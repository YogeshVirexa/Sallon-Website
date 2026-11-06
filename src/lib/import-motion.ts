// Recreates the source site's motion and selector behaviour on top of the captured markup.
export function startImportMotion(): () => void {
  const cleanups: Array<() => void> = [];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Scroll reveal: headings, text blocks, cards and figures fade/slide up into view.
  const targets = document.querySelectorAll<HTMLElement>(
    "#main section h2, #main section [data-framer-component-type='RichTextContainer'], #main section figure, #main section article, #studio a[aria-label], #services .import-service-row, #faq .import-faq-row, #booking form",
  );
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("im-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    targets.forEach((el, i) => {
      if (el.closest("#hero, nav, #lookbook figure, #your-visit article, a, button, .framer-qHphS") || el.closest(".im-reveal")) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return; // already on screen
      el.classList.add("im-reveal");
      el.style.setProperty("--im-delay", `${(i % 4) * 70}ms`);
      io.observe(el);
    });
    cleanups.push(() => { io.disconnect(); targets.forEach(el => { el.classList.remove("im-reveal", "im-in"); el.style.removeProperty("--im-delay"); }); });
  }

  // 2. Hero intro: staged entrance for hero copy.
  document.querySelectorAll<HTMLElement>("#hero [data-framer-component-type='RichTextContainer'], #hero a").forEach((el, i) => {
    if (reduce) return;
    el.classList.add("im-hero");
    el.style.setProperty("--im-delay", `${150 + i * 90}ms`);
    cleanups.push(() => { el.classList.remove("im-hero"); el.style.removeProperty("--im-delay"); });
  });

  // 3. Hero slideshow: slow zoom and dot autoplay.
  const carousel = document.querySelector<HTMLElement>("#hero [aria-roledescription='carousel']");
  if (carousel) {
    const dots = Array.from(carousel.querySelectorAll<HTMLButtonElement>("button[aria-label^='Show photo']"));
    const images = Array.from(carousel.querySelectorAll<HTMLImageElement>("[data-hero-photo]"));
    let idx = 0;
    const show = (n: number) => {
      idx = n;
      dots.forEach((d, j) => {
        d.toggleAttribute("aria-current", j === n);
        const s = d.querySelector<HTMLElement>("span");
        if (s) s.style.opacity = j === n ? "1" : "0.35";
      });
      images.forEach((img, j) => {
        img.style.opacity = j === n ? "1" : "0";
        img.setAttribute("aria-hidden", String(j !== n));
        if (j === n && !reduce) {
          img.classList.remove("im-kenburns");
          void img.offsetWidth;
          img.classList.add("im-kenburns");
        }
      });
    };
    dots.forEach((d, j) => {
      const h = () => { show(j); restart(); };
      d.addEventListener("click", h);
      cleanups.push(() => d.removeEventListener("click", h));
    });
    let timer = 0;
    const restart = () => { window.clearInterval(timer); if (!reduce) timer = window.setInterval(() => show((idx + 1) % dots.length), 5000); };
    show(0); restart();
    cleanups.push(() => window.clearInterval(timer));
  }

  // 4. Service ticker: continuous marquee.
  const ticker = document.querySelector<HTMLElement>("#service-ticker > ul");
  if (ticker && !reduce) {
    ticker.querySelectorAll<HTMLElement>("li").forEach((li) => (li.style.transform = "none"));
    const items = Array.from(ticker.children);
    items.forEach((li) => { const c = li.cloneNode(true) as HTMLElement; c.setAttribute("aria-hidden", "true"); c.dataset["imClone"] = "1"; ticker.appendChild(c); });
    ticker.style.width = "max-content";
    ticker.classList.add("im-marquee");
    cleanups.push(() => { ticker.querySelectorAll("[data-im-clone]").forEach((n) => n.remove()); ticker.classList.remove("im-marquee"); });
  }

  // 5. Studio cards: hovered card expands, others shrink.
  const cards = Array.from(document.querySelectorAll<HTMLAnchorElement>("#studio a[aria-label]")).filter((a) => a.style.flex);
  if (cards.length > 1 && window.innerWidth > 809) {
    const base = cards.map((c) => c.style.flex);
    const wide = base.findIndex((f) => f.startsWith("2.4"));
    const set = (n: number) => cards.forEach((c, j) => (c.style.flex = j === n ? "2.4 1 0px" : "1 1 0px"));
    cards.forEach((c, j) => {
      c.classList.add("im-flex");
      const enter = () => set(j);
      c.addEventListener("mouseenter", enter);
      c.addEventListener("focus", enter);
      cleanups.push(() => { c.removeEventListener("mouseenter", enter); c.removeEventListener("focus", enter); });
    });
    const row = cards[0]?.parentElement;
    const leave = () => set(wide < 0 ? 0 : wide);
    row?.addEventListener("mouseleave", leave);
    cleanups.push(() => row?.removeEventListener("mouseleave", leave));
  }

  // 6. Selector groups (transformation tabs, review avatars): move the active state.
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>("#results nav button, section[aria-label='Before and after results'] nav button"));
  const activeBorder = tabs[0]?.style.getPropertyValue("--border-color");
  const activeText = "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)";
  const mutedText = "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)";
  tabs.forEach((t, j) => {
    t.setAttribute("aria-pressed", String(j === 0));
    const h = () => tabs.forEach((o, k) => {
      const on = k === j;
      o.setAttribute("aria-pressed", String(on));
      o.style.setProperty("--border-bottom-width", on ? "2px" : "0px");
      o.style.setProperty("--border-color", on ? activeBorder ?? "currentColor" : "rgba(0, 0, 0, 0)");
      o.querySelectorAll<HTMLElement>("[data-framer-component-type='RichTextContainer']").forEach((r) => {
        r.style.setProperty("--extracted-a0htzi", on ? activeText : mutedText);
        r.style.setProperty("--extracted-r6o4lv", on ? "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" : mutedText);
      });
      const slider = document.querySelector<HTMLElement>(".import-slider");
      if (on && slider && !reduce) { slider.classList.remove("im-swap"); void slider.offsetWidth; slider.classList.add("im-swap"); }
    });
    t.addEventListener("click", h);
    cleanups.push(() => t.removeEventListener("click", h));
  });

  const reviewBtns = Array.from(document.querySelectorAll<HTMLButtonElement>("#reviews button.framer-sSLKa"));
  if (reviewBtns.length) {
    const figure = document.querySelector<HTMLElement>("#reviews figure");
    let cur = Math.max(0, reviewBtns.findIndex((b) => b.style.getPropertyValue("--border-bottom-width") === "2px"));
    const select = (j: number) => {
      cur = j;
      reviewBtns.forEach((b, k) => {
        const on = k === j;
        b.setAttribute("aria-pressed", String(on));
        ["top", "right", "bottom", "left"].forEach((s) => b.style.setProperty(`--border-${s}-width`, on ? "2px" : "1px"));
        b.style.setProperty("--border-color", on ? "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be370a)" : "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)");
        const av = b.querySelector<HTMLElement>(".framer-1crifd7");
        if (av) av.style.opacity = on ? "1" : "0.5";
      });
      if (figure && !reduce) { figure.classList.remove("im-swap"); void figure.offsetWidth; figure.classList.add("im-swap"); }
    };
    reviewBtns.forEach((b, j) => {
      const h = () => select(j);
      b.addEventListener("click", h);
      cleanups.push(() => b.removeEventListener("click", h));
    });
    select(cur);
  }

  // 7. Nav: sticky header with solid background on scroll.
  const nav = document.querySelector<HTMLElement>("nav[aria-label='Main navigation']")?.closest<HTMLElement>("[data-framer-name], div") ?? null;
  const onScroll = () => {
    const y = window.scrollY;
    document.querySelectorAll<HTMLElement>("nav[aria-label='Main navigation']").forEach(navEl => {
      if (navEl.classList.contains("import-menu-open")) return;
      navEl.classList.toggle("im-nav-solid", y > 30);
    });
  };
  void nav;
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  cleanups.push(() => window.removeEventListener("scroll", onScroll));

  return () => cleanups.forEach((c) => c());
}
