// Scroll-linked motion matching the source: pinned stages, photo arc, sticky stacks, word reveals.
export function startImportScroll(): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const isPhone = window.innerWidth < 810;
  const updaters: Array<() => void> = [];
  const undo: Array<() => void> = [];
  const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);
  const progressOf = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    const range = r.height - window.innerHeight;
    return range <= 0 ? clamp(-r.top / Math.max(1, r.height)) : clamp(-r.top / range);
  };
  const setStyle = (el: HTMLElement, css: Partial<CSSStyleDeclaration>) => {
    const prev = el.getAttribute("style");
    Object.assign(el.style, css);
    undo.push(() => (prev === null ? el.removeAttribute("style") : el.setAttribute("style", prev)));
  };

  // 1. Lookbook: pinned stage, photos travel along a curved arc as you scroll.
  const lookbook = document.querySelector<HTMLElement>("#lookbook");
  const grid = lookbook?.querySelector<HTMLElement>('[data-site-import-responsive="1147"]');
  if (lookbook && grid) {
    const figs = Array.from(grid.querySelectorAll<HTMLElement>("figure"));
    const container = lookbook.querySelector<HTMLElement>(".framer-aishiy-container");
    if (figs.length && container) {
      lookbook.classList.add("im-arc-on");
      setStyle(container, { height: "400vh" });
      const track = container.querySelector<HTMLElement>(".ssr-variant > div");
      const stage = container.querySelector<HTMLElement>('[data-site-import-responsive="1146"]');
      if (track) setStyle(track, { position: "relative", height: "400vh" });
      if (stage) setStyle(stage, { position: "sticky", top: "0px", height: "100vh", overflow: "hidden" });
      grid.classList.add("im-arc");
      const n = figs.length;
      updaters.push(() => {
        const p = progressOf(container);
        const shift = p * (n - 1);
        const cx = window.innerWidth / 2;
        const step = Math.min(306.312, window.innerWidth * 0.20139);
        figs.forEach((f, i) => {
          let o = i - shift - 2;
          const span = n;
          o = ((o + span / 2) % span + span) % span - span / 2; // wrap so the arc never empties
          const a = Math.abs(o);
          const scale = Math.max(0.5, 1 - a * 0.11);
          const rot = clamp(o * 2.4, -14, 14);
          const y = Math.min(o * o * 10.5625, 169) * Math.min(1, window.innerWidth / 1520);
          f.style.setProperty("transform", `translate3d(${cx + o * step}px, ${y}px, 0) translateX(-50%) rotate(${rot}deg) scale(${scale})`, "important");
          f.style.setProperty("opacity", a > 5.5 ? "0" : "1", "important");
          f.style.zIndex = String(100 - Math.round(a * 10));
        });
      });
      undo.push(() => {
        lookbook.classList.remove("im-arc-on");
        grid.classList.remove("im-arc");
        figs.forEach((f) => { f.style.transform = ""; f.style.opacity = ""; f.style.zIndex = ""; });
      });
    }
  }

  // 2. Your visit: pinned stage, step cards rise in one after another.
  const visit = document.querySelector<HTMLElement>("#your-visit");
  const visitSection = visit?.querySelector<HTMLElement>("section");
  const visitStage = visit?.querySelector<HTMLElement>(".framer-8zus2e");
    if (visit && visitSection && visitStage && window.innerWidth >= 1200) {
    visit.classList.add("im-visit-on");
    undo.push(() => visit.classList.remove("im-visit-on"));
    const cards = Array.from(visit.querySelectorAll<HTMLElement>("article"));
    setStyle(visitSection, { height: "260vh" });
    setStyle(visitStage, { position: "sticky", top: "0px", minHeight: "100vh" });
    updaters.push(() => {
      const p = progressOf(visitSection);
      cards.forEach((c, i) => {
        const t = ease(clamp((p - i * 0.16) / 0.38));
        c.style.setProperty("transform", `translateY(${(1 - t) * 600}px)`, "important");
        c.style.setProperty("opacity", String(t), "important");
      });
    });
    undo.push(() => cards.forEach((c) => { c.style.removeProperty("transform"); c.style.removeProperty("opacity"); }));
  }

  // 3. Studio feature cards stack on top of each other while scrolling.
  const studioCards = Array.from(document.querySelectorAll<HTMLElement>("#studio p"))
    .filter((p) => /^0\d\s*\/\s*04$/.test((p.textContent || "").trim()))
    .map((p) => {
      let el: HTMLElement | null = p;
      while (el?.parentElement && !(el.parentElement.querySelectorAll("p").length > 0 && Array.from(el.parentElement.children).filter((c) => /0\d\s*\/\s*04/.test(c.textContent || "")).length > 1)) el = el.parentElement;
      return el;
    })
    .filter((el, i, arr): el is HTMLElement => !!el && arr.indexOf(el) === i);
  studioCards.forEach((c, i) => setStyle(c, { position: "sticky", top: `${(isPhone ? 80 : 110) + i * 16}px`, zIndex: String(i + 1) }));
  if (studioCards.length > 1) {
    updaters.push(() => {
      studioCards.forEach((c, i) => {
        const next = studioCards[i + 1];
        if (!next) return;
        const gap = next.getBoundingClientRect().top - c.getBoundingClientRect().top;
        const t = clamp(1 - gap / Math.max(1, c.offsetHeight));
        c.style.transform = `scale(${1 - t * 0.05})`;
        c.style.filter = `brightness(${1 - t * 0.25})`;
      });
    });
  }

  // 4. Sticky heading columns (stylists, FAQ) beside the scrolling list.
  if (!isPhone) {
    ["#stylists", "#faq"].forEach((sel) => {
      const h = document.querySelector<HTMLElement>(`${sel} h2`);
      let col: HTMLElement | null = h ?? null;
      const sec = document.querySelector(sel);
      while (col?.parentElement && col.parentElement !== sec && getComputedStyle(col.parentElement).flexDirection !== "row") col = col.parentElement;
      if (col && col.parentElement && col !== h) setStyle(col, { position: "sticky", top: "110px", alignSelf: "flex-start" });
    });
  }

  // 5. Word-by-word colour reveal on large section headings.
  document.querySelectorAll<HTMLElement>("#transformations h2, #your-visit h2, #stylists h2").forEach((h) => {
    const words: HTMLElement[] = [];
    const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    const originals = nodes.map((t) => [t, t.textContent] as const);
    nodes.forEach((t) => {
      const frag = document.createDocumentFragment();
      (t.textContent || "").split(/(\s+)/).forEach((w) => {
        if (!w.trim()) return frag.append(w);
        const s = document.createElement("span");
        s.textContent = w;
        s.className = "im-word";
        words.push(s);
        frag.append(s);
      });
      t.replaceWith(frag);
    });
    updaters.push(() => {
      const r = h.getBoundingClientRect();
      const p = clamp((window.innerHeight * 0.9 - r.top) / (window.innerHeight * 0.55));
      words.forEach((w, i) => { w.style.opacity = String(0.18 + 0.82 * clamp(p * words.length - i)); });
    });
    undo.push(() => {
      words.forEach((w) => w.replaceWith(document.createTextNode(w.textContent || "")));
      h.normalize();
      void originals;
    });
  });

  // 6. Hero image grows slightly as you scroll (source scales to ~1.065).
  const heroImg = document.querySelector<HTMLElement>("#hero img");
  if (heroImg) updaters.push(() => { heroImg.style.scale = String(1 + Math.min(window.scrollY / 1400, 1) * 0.065); });

  let raf = 0;
  const tick = () => { raf = 0; updaters.forEach((u) => u()); };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  tick();
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(raf);
    if (heroImg) heroImg.style.scale = "";
    undo.reverse().forEach((u) => u());
  };
}
