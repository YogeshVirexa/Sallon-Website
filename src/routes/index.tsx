import fb2_after from "@/assets/fb2-after.jpg";
import fb2_bridal from "@/assets/fb2-bridal.jpg";
import fb2_brows from "@/assets/fb2-brows.jpg";
import fb2_client1 from "@/assets/fb2-client1.jpg";
import fb2_client2 from "@/assets/fb2-client2.jpg";
import fb2_client3 from "@/assets/fb2-client3.jpg";
import fb2_client4 from "@/assets/fb2-client4.jpg";
import fb2_fade from "@/assets/fb2-fade.jpg";
import fb2_interior from "@/assets/fb2-interior.jpg";
import fb2_keratin from "@/assets/fb2-keratin.jpg";
import fb2_man_crop from "@/assets/fb2-man-crop.jpg";
import fb2_manicure from "@/assets/fb2-manicure.jpg";
import fb2_pedicure from "@/assets/fb2-pedicure.jpg";
import fb2_reception from "@/assets/fb2-reception.jpg";
import fb2_shave from "@/assets/fb2-shave.jpg";
import fb2_stations from "@/assets/fb2-stations.jpg";
import fb2_stylist1 from "@/assets/fb2-stylist1.jpg";
import fb2_stylist2 from "@/assets/fb2-stylist2.jpg";
import fb2_stylist3 from "@/assets/fb2-stylist3.jpg";
import fb2_stylist4 from "@/assets/fb2-stylist4.jpg";
import fb2_wash from "@/assets/fb2-wash.jpg";
import fb2_woman_layers from "@/assets/fb2-woman-layers.jpg";
import fb2_woman_waves from "@/assets/fb2-woman-waves.jpg";
import realHairImg from "@/assets/fabeau-real-hair.jpg";
import realWashImg from "@/assets/fabeau-real-styling.jpg";
import realStudioImg from "@/assets/fabeau-real-studio.jpg";
import realServiceImg from "@/assets/fabeau-real-service.jpg";
import fb_men from "@/assets/fb-men.jpg";
import fb_facial from "@/assets/fb-facial.jpg";
import fb_nails from "@/assets/fb-nails.jpg";
import fb_colour from "@/assets/fb-colour.jpg";
import fb_spa from "@/assets/fb-spa.jpg";
import fb_threading from "@/assets/fb-threading.jpg";
import fb_blowdry from "@/assets/fb-blowdry.jpg";
import fb_products from "@/assets/fb-products.jpg";
import fb_men2 from "@/assets/fb-men2.jpg";
import fbLogoImg from "@/assets/fabeau-logo.png";

const realHair = { url: realHairImg };
const realWash = { url: realWashImg };
const realStudio = { url: realStudioImg };
const realService = { url: realServiceImg };
const fbLogo = { url: fbLogoImg };
import type { CSSProperties } from "react";
import { useEffect, useState, useRef } from "react";
import { useSyncExternalStore } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";
import repairCSS from "../styles/import-repairs.css?raw";
import motionCSS from "../styles/import-motion.css?raw";
import { startImportMotion } from "@/lib/import-motion";
import { startImportScroll } from "@/lib/import-scroll";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Fabeau | Luxury Unisex Salon in Coimbatore" },
    { name: "description", content: "Fabeau luxury unisex salon in Coimbatore. Women's hair, men's grooming, facials, waxing, threading, manicure and pedicure." },
    { property: "og:title", content: "Fabeau | Luxury Unisex Salon, Coimbatore" },
    { property: "og:description", content: "Hair, grooming, facials and more at Fabeau, Coimbatore." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: realHair.url },
    { name: "twitter:image", content: realHair.url },
  ] }),
  staticData: { importedDocument: { html: { "className": "lenis lenis-autoToggle", "dir": "ltr", "lang": "en" }, body: {  } } },
  component: HomePage,
});

type ContentPage = "home" | "services" | "studio" | "stylists" | "contact" | "about";

function HomePage() { return <ImportedContentPage page="home" />; }

export function ImportedContentPage({ page }: { page: ContentPage }) { return <Index page={page} />; }

function Index({ page = "home" }: { page?: ContentPage }) {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  useImportedLayout();
  useEffect(() => { const id = requestAnimationFrame(() => { const a = startImportMotion(); const b = startImportScroll(); stop = () => { b(); a(); }; }); let stop: (() => void) | undefined; return () => { cancelAnimationFrame(id); stop?.(); }; }, [isMobile, page]);
  return (
    <>
      <style>{capturedCSS + "\n" + repairCSS + "\n" + motionCSS}</style>
      <div id="main">
        <div className={`${page !== "home" ? "import-content-page " : ""}framer-0chF0 framer-gj6e67 items-center flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]`} style={{ width: "auto" }} data-layout-template="true" data-content-page={page}>
          <div className="framer-2t5eo0-container flex-none [left:0px] [order:-1000] [right:0px] [top:0px] [z-index:99999]" style={{ backgroundColor: "var(--token-4f05f468-261f-4d3f-953e-417f2a2e2041)" } as CSSProperties} data-site-import-desktop-header="" {...({ name: "Nav" } as any)}>
            <div className={isMobile ? "ssr-variant hidden-gj6e67 hidden-uav2mb" : "ssr-variant"}>
              <ImportedNavMainNavigation />
            </div>
          </div>
          <ImportedDivNav />
          <div className="framer-1hC3k framer-aiVBd framer-gdA2M framer-lZ7pJ framer-72rtr7 items-center flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]" style={{ width: "auto", display: "contents" }}>
            {page === "home" ? <ImportedSectionIntroduction /> : <section className="import-page-intro"><img src={({ services: realWash.url, studio: realStudio.url, stylists: realHair.url, contact: realService.url, about: fb2_reception } as const)[page]} alt={({ services: "A professional hair wash at a salon", studio: "Bright salon styling stations", stylists: "A hairdresser blow drying a client’s hair", contact: "Salon chairs ready for a visit", about: "Salon reception" } as const)[page]} fetchPriority="high" /><div><h1>{({ services: "Our services", studio: "The Fabeau studio", stylists: "Our stylists", contact: "Contact Fabeau", about: "About Fabeau" } as const)[page]}</h1><p>{({ services: "Hair, grooming and beauty care at Fabeau, Coimbatore.", studio: "Luxury beauty in a calm, hygienic space.", stylists: "Skilled professionals. Personal care. Beautiful results.", contact: "Your next visit to Fabeau, Coimbatore.", about: "Luxury unisex salon. Fashion with beauty." } as const)[page]}</p></div></section>}
            {page === "home" && <ImportedDivServiceTicker />}
            {(page === "home" || page === "studio" || page === "about") && <ImportedSectionAboutTheStudio page={page} />}
            {(page === "home" || page === "services") && <ImportedSectionServiceMenu />}
            {(page === "home" || page === "about" || page === "studio") && <ImportedSectionWhyFabeau />}
            {page === "home" && <ImportedSectionBeforeAndAfterResults />}
            {(page === "home" || page === "stylists" || page === "about") && <ImportedSectionMeetTheStylists />}
            {(page === "home" || page === "services") && <div className="ssr-variant"><ImportedDivYourVisit /></div>}
            {(page === "home" || page === "stylists") && <ImportedSectionClientReviews />}
            {(page === "home" || page === "studio") && <ImportedSectionLookbook />}
            {(page === "home" || page === "services") && <ImportedSectionFrequentlyAskedQuestions />}
            {(page === "home" || page === "services" || page === "stylists" || page === "contact") && <div className="ssr-variant"><ImportedDivBooking /></div>}
          </div>
          <div id="overlay" />
          <div className="framer-1hzvqrv grow" />
          <div className="framer-8qb9ok-container flex-none [order:1002]">
            <div className={isMobile ? "ssr-variant hidden-gj6e67 hidden-uav2mb" : "ssr-variant"}>
              <footer style={{ backgroundColor: "var(--token-4f05f468-261f-4d3f-953e-417f2a2e2041)", width: "100%", opacity: "1" }} className={isMobile ? "framer-Pq9nU framer-lZ7pJ framer-JiJV2 framer-j4ZEW framer-CxlV6 framer-1lmqu3a framer-v-1fcv3du" : "framer-Pq9nU framer-lZ7pJ framer-JiJV2 framer-j4ZEW framer-CxlV6 framer-1lmqu3a"}>
                <ImportedDivContainer />
              </footer>
            </div>
          </div>
          <div className="framer-jw5z43-container flex-none [left:50%] [order:1003] [top:0px] [transform:translate(-50%)] [z-index:1]" {...({ name: "Lenis Smooth Scroll" } as any)} />
        </div>
        <div id="template-overlay" />
      </div>
      <div className="[overflow:hidden] [bottom:0px] [left:0px] [z-index:0] [contain:strict]" style={{ position: "absolute", width: "0px", height: "0px" }} id="svg-templates" aria-hidden="true"><svg id="1173457374" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...({ display: "block" } as any)}><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px" /><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px" /></svg><svg id="3642559178" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...({ display: "block" } as any)}><path d="M 0 0 L 9.75 0 L 9.75 9.75 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="9.75px" id="wb64pxkUI" transform="translate(8.25 6)" width="9.75px" /><path d="M 0 7.125 L 7.125 0" fill="transparent" height="7.125px" id="eXMMevGY5" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 10.875)" width="7.125px" /><path d="M 0 0 L 9.75 0 L 9.75 9.75 Z" fill="transparent" height="9.75px" id="FrNxKmblG" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(8.25 6)" width="9.75px" /></svg><svg id="2942266250" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...({ display: "block" } as any)}><path d="M 0 6.75 C 0 3.022 3.022 0 6.75 0 C 10.478 0 13.5 3.022 13.5 6.75 C 13.5 10.478 10.478 13.5 6.75 13.5 C 3.022 13.5 0 10.478 0 6.75 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="13.5px" id="Vx7TMvl2W" transform="translate(5.25 5.25)" width="13.5px" /><path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="OHTRgu94K" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px" /><path d="M 0 0 L 15 9" fill="transparent" height="9px" id="TewcLurQf" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 7.5)" width="15px" /><path d="M 0 9 L 15 0" fill="transparent" height="9px" id="CUDNMMFC9" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 7.5)" width="15px" /></svg><svg id="2930526878" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...({ display: "block" } as any)}><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.746261605760054px" id="t6hF1mhP1" transform="translate(2.251 2.25)" width="19.49332240036336px" /><path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill="transparent" height="18.746261605760054px" id="b0GcHZb5O" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 2.25)" width="19.49332240036336px" /></svg><svg id="650073895" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...({ display: "block" } as any)}><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="jSiOsA4GS" transform="translate(3.75 3.75)" width="16.5px" /><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="NfSWNK3uH" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px" /></svg><svg id="465907804" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...({ display: "block" } as any)}><path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="qUr6K2nJv" transform="translate(3.75 3.75)" width="16.5px" /><path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="MbfmAbWGf" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px" /><path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="mcA57vhod" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px" /></svg><svg id="547985882" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...({ display: "block" } as any)}><path d="M 7.125 7.5 L 0.75 7.5 C 0.336 7.5 0 7.164 0 6.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 6.375 0 C 6.789 0 7.125 0.336 7.125 0.75 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="7.5px" id="YRVmJ2NxP" transform="translate(3 6)" width="7.125px" /><path d="M 7.125 7.5 L 0.75 7.5 C 0.336 7.5 0 7.164 0 6.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 6.375 0 C 6.789 0 7.125 0.336 7.125 0.75 Z" fillOpacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="7.5px" id="Mbc3zo2eV" transform="translate(13.875 6)" width="7.125px" /><path d="M 7.125 7.5 L 0.75 7.5 C 0.336 7.5 0 7.164 0 6.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 6.375 0 C 6.789 0 7.125 0.336 7.125 0.75 L 7.125 9 C 7.125 11.071 5.446 12.75 3.375 12.75" fill="transparent" height="12.75px" id="EU8WkDZVO" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 6)" width="7.125px" /><path d="M 7.125 7.5 L 0.75 7.5 C 0.336 7.5 0 7.164 0 6.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 6.375 0 C 6.789 0 7.125 0.336 7.125 0.75 L 7.125 9 C 7.125 11.071 5.446 12.75 3.375 12.75" fill="transparent" height="12.75px" id="TuL7tpJzc" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(13.875 6)" width="7.125px" /></svg></div>
    </>
  );
}

function ImportedNavMainNavigation() {
  return (
    <nav className="framer-N8jZ7 framer-1szdf47" style={{ backgroundColor: "var(--token-4f05f468-261f-4d3f-953e-417f2a2e2041)", width: "100%", willChange: "auto", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} aria-label="Main navigation" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"framer-v-yojk4p\"],\"removed\":[\"framer-v-1szdf47\"],\"threshold\":1296},\"mobile\":{\"added\":[\"framer-v-1g86pha\"],\"removed\":[\"framer-v-14xt05v\"],\"threshold\":1266}}"} {...({ name: "Nav" } as any)}>
      <div className="framer-1w2aizy" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
        <div className="framer-1c2rcei" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
          <div className="framer-1ydrb5s" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
            <div className="framer-16r9gne-container" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} {...({ name: "Logo" } as any)}>
              <a className="framer-7mWQI framer-adxa4z framer-jtzoau" style={{ height: "100%", width: "100%", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} href="/#hero" {...({ name: "Logo" } as any)}>
                <div className="framer-1cbl9j4" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                  <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                    <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "contain" } as CSSProperties} decoding="auto" width="2200" height="374" src={fbLogo.url} alt="Fabeau" />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-c0r0y7" style={{ opacity: "1" }}>
            <div className="framer-3ghv64-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/">Home</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-3ghv64-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/about">About</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1p6ygwa-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/studio">Studio</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1jc4vwa-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/services">Services</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-qe0b9o-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/stylists">Stylists</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-xw2b4k-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/contact">Contact</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-otbyb4" style={{ opacity: "1" }}>
            <div className="framer-10kar46-container" style={{ opacity: "1" }}>
              <Link className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-7wbj0k framer-1x46096" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "none", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px", opacity: "1" } as CSSProperties} to="/contact">
                <div className="framer-dhr7ap" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book an appointment</p>
                </div>
                <svg className="framer-EcgqK framer-17gg11h" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#1173457374" } as any)} />
                </svg>
                <div className="framer-zk1yxt" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", opacity: "1" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ImportedDivNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => { setMenuOpen(false); triggerRef.current?.focus(); };
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenu(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);
  return (
    <div className="framer-2t5eo0-container flex-none [left:0px] [order:-1000] [right:0px] [top:0px] [z-index:99999]" style={{ "--site-import-header-display": "block", backgroundColor: "var(--token-4f05f468-261f-4d3f-953e-417f2a2e2041)" } as CSSProperties} data-site-import-responsive="4" data-site-import-mobile-header="" {...({ name: "Nav" } as any)}>
      <div className="ssr-variant" data-site-import-responsive="1548">
        <nav className={`framer-N8jZ7 framer-1szdf47 ${menuOpen ? "framer-v-1kpfw29 import-menu-open" : "framer-v-14xt05v"}`} data-import-menu-open={menuOpen} style={{ backgroundColor: "var(--token-4f05f468-261f-4d3f-953e-417f2a2e2041)", width: "100%", willChange: "auto", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} aria-label="Main navigation" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"framer-v-yojk4p\"],\"removed\":[\"framer-v-1szdf47\"],\"threshold\":1296},\"mobile\":{\"added\":[\"framer-v-1g86pha\"],\"removed\":[\"framer-v-14xt05v\"],\"threshold\":1266}}"} data-site-import-responsive="5" {...({ name: "Nav" } as any)}>
          <div className="framer-1w2aizy" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="6">
            <div className="framer-1c2rcei" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="7">
              <div className="framer-1ydrb5s" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="8">
                <div className="framer-16r9gne-container" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="9" {...({ name: "Logo" } as any)}>
                  <a className="framer-7mWQI framer-adxa4z framer-jtzoau" style={{ height: "100%", width: "100%", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="10" href="/#hero" {...({ name: "Logo" } as any)}>
                    <div className="framer-1cbl9j4" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="11">
                      <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties} data-site-import-responsive="12">
                        <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "contain" } as CSSProperties} decoding="auto" width="2200" height="374" src={fbLogo.url} alt="Fabeau" data-site-import-responsive="13" />
                      </div>
                    </div>
                  </a>
                </div>
                <button className="framer-1qipwna" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-355b50d7-c2f0-4ee4-9290-2018c1f4bd29)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", borderRadius: "2px", opacity: "1" } as CSSProperties} ref={triggerRef} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} data-border="true" data-reset="button" tabIndex={0}>
                  <svg className="framer-iZmZi framer-wf27eq" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5", opacity: "1" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    {menuOpen ? <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.5" /> : <path d="M4 8h16M4 16h16" fill="none" stroke="currentColor" strokeWidth="1.5" />}
                  </svg>
                </button>
              </div>
{menuOpen && <div onClick={(event) => { if ((event.target as HTMLElement).closest("a")) closeMenu(); }}>          <div className="framer-c0r0y7" style={{ opacity: "1" }}>
            <div className="framer-3ghv64-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/">Home</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-3ghv64-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/about">About</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1p6ygwa-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/studio">Studio</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1jc4vwa-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/services">Services</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-qe0b9o-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/stylists">Stylists</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-xw2b4k-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/contact">Contact</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-otbyb4" style={{ opacity: "1" }}>
            <div className="framer-10kar46-container" style={{ opacity: "1" }}>
              <Link className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-7wbj0k framer-1x46096" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "none", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px", opacity: "1" } as CSSProperties} to="/contact">
                <div className="framer-dhr7ap" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book an appointment</p>
                </div>
                <svg className="framer-EcgqK framer-17gg11h" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#1173457374" } as any)} />
                </svg>
                <div className="framer-zk1yxt" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", opacity: "1" }} />
              </Link>
            </div>
          </div>
</div>}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function ImportedSectionIntroduction() {
  return (
    <section className="framer-1ve7rqt items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)]" aria-label="Introduction" id="hero">
      <div className="framer-7v5ttb items-center flex-[1_0_0px] flex-col flex-nowrap content-center justify-between [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]">
        <div className="framer-1pop8q0-container flex-none [z-index:0]" {...({ name: "Background Slideshow" } as any)}>
          <div className="[overflow:hidden]" style={{ height: "100%", width: "100%", position: "relative", background: "rgb(0, 26, 13)" }} role="region" aria-roledescription="carousel" aria-label="Studio photos">
            <div className="[opacity:1] will-change-transform" style={{ position: "absolute", inset: "0px", width: "100%", height: "100%" }}>
              <img className="object-cover [transform:scale(1.03994)] will-change-transform" style={{ position: "absolute", inset: "0px", width: "100%", height: "100%", display: "block" }} data-hero-photo="1" src={realHair.url} alt="A hairdresser blow drying a client’s hair in a salon" fetchPriority="high" />
            </div>
            <img data-hero-photo="2" className="import-hero-photo" src={realWash.url} alt="A professional hair wash at a salon" aria-hidden="true" />
            <img data-hero-photo="3" className="import-hero-photo" src={realStudio.url} alt="Light-filled salon styling stations" aria-hidden="true" />
            <div className="import-hero-shade" aria-hidden="true" />
            <div className="right-[32px] bottom-[32px] [gap:6px] [z-index:2]" style={{ position: "absolute", display: "flex" }}>
              <button className="[padding:10px] [margin:-10px]" style={{ borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", background: "transparent", cursor: "pointer", display: "flex" } as CSSProperties} type="button" aria-label="Show photo 1" aria-current="true">
                <span className="[opacity:0.35] [transition:opacity_0.3s]" style={{ width: "10px", height: "10px", background: "rgb(245, 242, 233)" }} />
              </button>
              <button className="[padding:10px] [margin:-10px]" style={{ borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", background: "transparent", cursor: "pointer", display: "flex" } as CSSProperties} type="button" aria-label="Show photo 2">
                <span className="[opacity:0.35] [transition:opacity_0.3s]" style={{ width: "10px", height: "10px", background: "rgb(245, 242, 233)" }} />
              </button>
              <button className="[padding:10px] [margin:-10px]" style={{ borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", background: "transparent", cursor: "pointer", display: "flex" } as CSSProperties} type="button" aria-label="Show photo 3">
                <span className="[opacity:1] [transition:opacity_0.3s]" style={{ width: "10px", height: "10px", background: "rgb(245, 242, 233)" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="framer-1vvngc9 items-start flex-none flex-col flex-nowrap max-w-[1224px] [gap:0px] [place-content:flex-start]">
          <div className="framer-18xl9pu items-start flex-none flex-col flex-nowrap max-w-[660px] [place-content:flex-start] [z-index:1]">
            <div className="framer-1hqol5f items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start]">
              <div className="framer-1c3v2pz-container flex-none [opacity:1] transform-none" style={{ willChange: "transform" }}>
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:blur(12px)] [opacity:1]" style={{ backgroundColor: "var(--token-a48a902b-b7a4-442c-a201-1ee165dc5e98)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">01</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Luxury unisex salon, Coimbatore</p>
                  </div>
                </div>
              </div>
              <div className="framer-4vywcm items-start flex-none flex-col flex-nowrap gap-[24px] [place-content:flex-start]">
                <div className="framer-1i4gah3 transform-none" data-framer-component-type="RichTextContainer">
                  <h1 className="framer-text framer-styles-preset-15oyzaj" style={{ "--framer-text-color": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} dir="auto"><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="76">Fabeau.</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="77">Beauty,</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="78">crafted</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="79">for</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="80">you.</span></h1>
                </div>
                <div className="framer-17wzyf max-w-[460px] wrap-break-word [word-break:break-word] [opacity:1] transform-none" style={{ willChange: "transform" }} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5, rgb(214, 220, 207))" } as CSSProperties} dir="auto">Hair, grooming, facials, waxing, threading, manicure and pedicure. Premium care from skilled professionals in a calm, hygienic space.</p>
                </div>
              </div>
            </div>
            <div className="framer-38xt8m items-center gap-[12px] content-center justify-start [opacity:1] transform-none" style={{ willChange: "transform" }}>
              <div className="framer-f1zu1r-container flex-none">
                <Link className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-7wbj0k framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" } as CSSProperties} to="/contact">
                  <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book an appointment</p>
                  </div>
                  <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#1173457374" } as any)} />
                  </svg>
                  <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" }} />
                </Link>
              </div>
              <div className="framer-a3etn-container flex-none">
                <a className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-14jnwst framer-1x46096 [backdrop-filter:blur(12px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-355b50d7-c2f0-4ee4-9290-2018c1f4bd29)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-a48a902b-b7a4-442c-a201-1ee165dc5e98)", borderRadius: "2px" } as CSSProperties} data-border="true" href="/#services">
                  <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Explore services</p>
                  </div>
                  <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#1173457374" } as any)} />
                  </svg>
                  <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-1c9dhmn items-end flex-none flex-row flex-nowrap max-w-[1224px] content-end justify-start [gap:0px] [z-index:1]">
          <div className="ssr-variant">
            <div className="framer-ys3ins-container [opacity:1] transform-none" style={{ willChange: "transform" }}>
              <a className="framer-GYeRC framer-j4ZEW framer-ME0Og framer-JiJV2 framer-ao0wdu framer-c6ckkw items-center flex-row flex-nowrap gap-[20px] content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [backdrop-filter:blur(16px)] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-355b50d7-c2f0-4ee4-9290-2018c1f4bd29)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-a48a902b-b7a4-442c-a201-1ee165dc5e98)", width: "100%", borderRadius: "2px" } as CSSProperties} data-border="true" href="/#services">
                <div className="framer-whaauj flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2304" height="1856" src={fb2_man_crop} alt="Men’s textured haircut" />
                  </div>
                </div>
                <div className="framer-gdze60 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[8px] [place-content:flex-start] [opacity:1]">
                  <div className="framer-qeyxcp wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565))" } as CSSProperties} dir="auto">Special combo</p>
                  </div>
                  <div className="framer-1s0wkq8 items-start flex-none flex-col flex-nowrap gap-[4px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-yuszbw wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Men's Grooming Combo</h3>
                    </div>
                    <div className="framer-1nw7mdg wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Haircut + beard trim + head massage, ₹649</p>
                    </div>
                  </div>
                </div>
                <svg className="framer-mbPBj framer-1lml2z0 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#3642559178" } as any)} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedDivServiceTicker() {
  return (
    <div className="framer-1amwhyg items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px]" style={{ overflowX: "clip", display: "flex", position: "relative" }} id="service-ticker">
      <ul className="list-none justify-start flex-row [gap:0px] [opacity:1] items-center [max-height:100%] [max-width:100%] [transform:translateX(-1010.23px)] will-change-transform" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", width: "100%", height: "100%" }}>
        <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "translateX(3352px)" }} aria-hidden="false" aria-posinset={1} aria-setsize={7} data-site-import-responsive="116">
          <div className="ssr-variant">
            <div className="framer-1340kfy-container flex-none">
              <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
                <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Women's Hair</p>
                </div>
                <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#2942266250" } as any)} />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0]" style={{ position: "relative", height: "fit-content", width: "fit-content", transform: "none" }} aria-hidden="false" aria-posinset={2} aria-setsize={7} data-site-import-responsive="123">
          <div className="ssr-variant">
            <div className="framer-1s4gdji-container flex-none">
              <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
                <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Men's Grooming</p>
                </div>
                <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#2942266250" } as any)} />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={3} aria-setsize={7}>
          <div className="ssr-variant">
            <div className="framer-1fy061l-container flex-none">
              <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
                <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Hair Treatments</p>
                </div>
                <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#2942266250" } as any)} />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={4} aria-setsize={7}>
          <div className="ssr-variant">
            <div className="framer-1xownwt-container flex-none">
              <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
                <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Facials</p>
                </div>
                <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#2942266250" } as any)} />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={5} aria-setsize={7}>
          <div className="ssr-variant">
            <div className="framer-1eeacdp-container flex-none">
              <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
                <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Waxing</p>
                </div>
                <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#2942266250" } as any)} />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={6} aria-setsize={7}>
          <div className="ssr-variant">
            <div className="framer-mu6ikd-container flex-none">
              <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
                <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Threading</p>
                </div>
                <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#2942266250" } as any)} />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={7} aria-setsize={7}>
          <div className="ssr-variant">
            <div className="framer-1ix81ro-container flex-none">
              <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
                <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Manicure & Pedicure</p>
                </div>
                <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#2942266250" } as any)} />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="true">
          <div className="framer-1340kfy-container flex-none">
            <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
              <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Women's Hair</p>
              </div>
              <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                <use {...({ href: "#2942266250" } as any)} />
              </svg>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="true">
          <div className="framer-1s4gdji-container flex-none">
            <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
              <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Men's Grooming</p>
              </div>
              <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                <use {...({ href: "#2942266250" } as any)} />
              </svg>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="true">
          <div className="framer-1fy061l-container flex-none">
            <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
              <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Hair Treatments</p>
              </div>
              <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                <use {...({ href: "#2942266250" } as any)} />
              </svg>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="true">
          <div className="framer-1xownwt-container flex-none">
            <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
              <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Facials</p>
              </div>
              <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                <use {...({ href: "#2942266250" } as any)} />
              </svg>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="true">
          <div className="framer-1eeacdp-container flex-none">
            <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
              <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Waxing</p>
              </div>
              <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                <use {...({ href: "#2942266250" } as any)} />
              </svg>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="true">
          <div className="framer-mu6ikd-container flex-none">
            <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
              <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Threading</p>
              </div>
              <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                <use {...({ href: "#2942266250" } as any)} />
              </svg>
            </div>
          </div>
        </li>
        <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="true">
          <div className="framer-1ix81ro-container flex-none">
            <div className="framer-wicb9 framer-cNuce framer-1wi0ui4 items-center flex-row flex-nowrap gap-[28px] content-center justify-start [opacity:1]">
              <div className="framer-ridvog transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-18z0xvi" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Manicure & Pedicure</p>
              </div>
              <svg className="framer-AXXHl framer-s1nu6n aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                <use {...({ href: "#2942266250" } as any)} />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

const studioPanels = [
  {
    num: "01",
    title: "Men's Grooming",
    desc: "Sharp style, modern confidence.",
    img: fb2_fade,
    alt: "Barber finishing a skin fade at Fabeau",
    label: "Skin fade. Sharp fades, blended by hand.",
    tagA: "316",
    tagOverlay: "318",
    tagTitle: "322",
    tagDesc: "1564",
  },
  {
    num: "02",
    title: "Facials",
    desc: "Glow, nourish and refresh your skin.",
    img: fb2_woman_layers,
    alt: "Woman with a layered cut and caramel highlights",
    label: "Curls. Shape and definition for every curl pattern.",
    tagA: "323",
    tagOverlay: "325",
    tagTitle: "329",
    tagDesc: "1565",
  },
  {
    num: "03",
    title: "Hair Colour",
    desc: "Root touch-ups, highlights and all-over colour.",
    img: fb_colour,
    alt: "Hair colouring at Fabeau",
    label: "Balayage. Hand painted colour that grows out softly.",
    tagA: "330",
    tagOverlay: undefined,
    tagTitle: "336",
    tagDesc: undefined,
  },
  {
    num: "04",
    title: "Hair Spa",
    desc: "Nourishing spa and relaxing head massage.",
    img: fb2_shave,
    alt: "Hot towel shave with a straight razor",
    label: "Beard. Sculpted lines and a hot towel finish.",
    tagA: "338",
    tagOverlay: "340",
    tagTitle: "344",
    tagDesc: "1566",
  },
  {
    num: "05",
    title: "Manicure & Pedicure",
    desc: "Pamper your hands and feet with expert care.",
    img: fb2_keratin,
    alt: "Keratin smoothing on long hair",
    label: "Long layers. Movement for hair past the shoulders.",
    tagA: "345",
    tagOverlay: "347",
    tagTitle: "351",
    tagDesc: "1567",
  },
];

const aboutFabeauSlides = [
  {
    num: "01",
    title: "The Fabeau Studio",
    desc: "Luxury styling stations crafted for calm, personal pampering.",
    src: realStudio.url,
    alt: "Bright, luxury salon styling stations at Fabeau",
  },
  {
    num: "02",
    title: "Signature Hair & Colour",
    desc: "Artistic hair styling, precision cuts and soft balayage.",
    src: realHair.url,
    alt: "Hairdresser styling hair at Fabeau",
  },
  {
    num: "03",
    title: "Spa & Beauty Rituals",
    desc: "Deep conditioning head spas, refreshing facials and nail care.",
    src: realWash.url,
    alt: "Relaxing hair wash and spa at Fabeau",
  },
];

function ImportedSectionAboutTheStudio({ page = "home" }: { page?: ContentPage }) {
  const [activeStudioPanel, setActiveStudioPanel] = useState<number>(2);
  const [activeAboutSlide, setActiveAboutSlide] = useState<number>(0);

  useEffect(() => {
    if (page !== "about") return;
    const timer = setInterval(() => {
      setActiveAboutSlide((prev) => (prev + 1) % aboutFabeauSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [page, activeAboutSlide]);
  return (
    <section className="framer-r1yvfn items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)]" aria-label="About the studio" id="studio">
      <div className="framer-1t5zbns items-start flex-none flex-col flex-nowrap max-w-[1320px] [place-content:flex-start]">
        <div className="framer-1yauax1">
          <div className="framer-xsr9xj items-start gap-[32px] [place-content:flex-start]">
            <div className="ssr-variant">
              <div className="framer-ke9tm-container flex-none will-change-transform opacity-[0.999423] transform-none">
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">02</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">About Fabeau</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-ct7zuw-container flex-none">
              <div className="ssr-variant">
                <h2 style={{ width: "100%", position: "relative", margin: "0px", color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", textWrap: "balance", fontFamily: "\"General Sans\", \"General Sans Placeholder\", sans-serif", fontSize: "40px", fontStyle: "normal", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.18em" }} data-site-import-responsive="226">
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>Bridal</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>glow,</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>sharp</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>fades,</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>soft</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>colour</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:0.16]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>and</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>spa</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>rituals.</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>One</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" }}>salon,</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>and</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>one</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>standard,</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>every</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>guest</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>pampered</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>with</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>the</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>same</span>
                  </span>
                  <span>{" "}</span>
                  <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre" }}>
                    <span className="[opacity:1]" style={{ color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }}>care.</span>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="framer-11fvn7w items-start gap-[28px] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1te21sq-container flex-none">
                <div className="framer-gWX23 framer-j4ZEW framer-1clj6z8 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]">
                  <div className="framer-6r6g4f items-center flex-none flex-row flex-nowrap gap-[2px] content-center justify-start [opacity:1]">
                    <svg className="framer-YnhV6 framer-18u5i2m aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#2930526878" } as any)} />
                    </svg>
                    <svg className="framer-YnhV6 framer-1ynvcza aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#2930526878" } as any)} />
                    </svg>
                    <svg className="framer-YnhV6 framer-1dvnwyk aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#2930526878" } as any)} />
                    </svg>
                    <svg className="framer-YnhV6 framer-1jtjg2o aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#2930526878" } as any)} />
                    </svg>
                    <svg className="framer-YnhV6 framer-pusoqh aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#2930526878" } as any)} />
                    </svg>
                  </div>
                  <div className="framer-1g8gdsk transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Fashion with beauty. A wedding art studio.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-mr4nbk wrap-break-word [word-break:break-word] transform-none" data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} dir="auto">A luxury unisex salon in Coimbatore. Every visit starts with a real consultation, so you know the plan and the price before we begin.</p>
            </div>
            <div className="ssr-variant">
              <div className="framer-15p2wou-container flex-none">
                <a className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-sovuw2 framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} data-border="true" href="tel:+910000000000" target="_blank">
                  <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book a consultation</p>
                  </div>
                  <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#1173457374" } as any)} />
                  </svg>
                  <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {page === "about" ? (
          <div className="framer-robujf-container flex-none will-change-transform [opacity:1] transform-none import-about-carousel">
            <div className="ssr-variant" style={{ width: "100%", height: "100%" }}>
              <div
                className="[overflow:hidden]"
                style={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  background: "rgb(0, 26, 13)",
                  borderRadius: "2px",
                }}
                role="region"
                aria-roledescription="carousel"
                aria-label="About Fabeau Studio photos"
              >
                {aboutFabeauSlides.map((slide, idx) => {
                  const isActive = activeAboutSlide === idx;
                  return (
                    <div
                      key={slide.num}
                      style={{
                        position: "absolute",
                        inset: "0px",
                        width: "100%",
                        height: "100%",
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 0.8s ease",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                      aria-hidden={!isActive}
                    >
                      <img
                        className="object-cover will-change-transform"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          width: "100%",
                          height: "100%",
                          display: "block",
                          transform: isActive ? "scale(1.04)" : "scale(1)",
                          transition: "transform 6s ease-out",
                        }}
                        src={slide.src}
                        alt={slide.alt}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "linear-gradient(rgba(0, 0, 0, 0.1) 40%, rgba(10, 20, 14, 0.78) 100%)",
                          pointerEvents: "none",
                        }}
                        aria-hidden="true"
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "32px",
                          left: "32px",
                          right: "120px",
                          zIndex: 2,
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            letterSpacing: "0.04em",
                            fontFamily: "\"General Sans\", \"General Sans Placeholder\", sans-serif",
                            fontWeight: 500,
                            color: "rgb(245, 242, 233)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span style={{ display: "inline-block", width: "8px", height: "8px", background: "rgb(184, 137, 44)" }} />
                          {slide.num} — {slide.title}
                        </span>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            lineHeight: "1.4",
                            fontFamily: "\"General Sans\", \"General Sans Placeholder\", sans-serif",
                            color: "rgb(214, 220, 207)",
                            maxWidth: "520px",
                          }}
                        >
                          {slide.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div
                  className="right-[32px] bottom-[32px] [gap:6px] [z-index:2]"
                  style={{ position: "absolute", display: "flex", alignItems: "center" }}
                >
                  {aboutFabeauSlides.map((_, idx) => (
                    <button
                      key={idx}
                      className="[padding:10px] [margin:-10px]"
                      style={{
                        borderWidth: "medium",
                        borderStyle: "none",
                        borderColor: "currentcolor",
                        borderImage: "none",
                        background: "transparent",
                        cursor: "pointer",
                        display: "flex",
                      }}
                      type="button"
                      aria-label={`Show photo ${idx + 1}`}
                      aria-current={activeAboutSlide === idx ? "true" : undefined}
                      onClick={() => setActiveAboutSlide(idx)}
                    >
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          background: "rgb(245, 242, 233)",
                          opacity: activeAboutSlide === idx ? 1 : 0.35,
                          transition: "opacity 0.3s ease",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="framer-robujf-container flex-none will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="[gap:12px]" style={{ height: "100%", width: "100%", position: "relative", display: "flex", flexDirection: "row" }} data-site-import-responsive="315">
                {studioPanels.map((panel, i) => {
                  const isActive = activeStudioPanel === i;
                  return (
                    <a
                      key={panel.num}
                      className="[overflow:hidden] [min-width:0px] [outline:none] [opacity:1] transform-none will-change-transform"
                      style={{
                        position: "relative",
                        display: "block",
                        borderRadius: "2px",
                        height: "100%",
                        flex: isActive ? "2.4 1 0px" : "1 1 0px",
                        transition: "flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                        textDecoration: "none",
                        color: "rgb(245, 242, 233)",
                        cursor: "pointer",
                      }}
                      aria-label={panel.label}
                      data-site-import-responsive={panel.tagA}
                      onMouseEnter={() => setActiveStudioPanel(i)}
                      onFocus={() => setActiveStudioPanel(i)}
                      onClick={(e) => { e.preventDefault(); setActiveStudioPanel(i); }}
                    >
                      <img className="object-cover" style={{ position: "absolute", inset: "0px", width: "100%", height: "100%", display: "block" }} src={panel.img} alt={panel.alt} />
                      <div
                        className="[@media(max-width:767px)]:will-change-transform!"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          background: "linear-gradient(rgba(0, 0, 0, 0) 35%, rgba(21, 10, 8, 0.72) 100%)",
                          opacity: isActive ? "1" : "0.75",
                          transition: "opacity 0.3s ease",
                        }}
                        aria-hidden="true"
                        {...(panel.tagOverlay ? { "data-site-import-responsive": panel.tagOverlay } : {})}
                      />
                      <div className="[left:0px] [right:0px] [bottom:0px] flex-col [gap:12px]" style={{ position: "absolute", padding: "28px", display: "flex" }}>
                        <span style={{ fontSize: "13px", lineHeight: "1em", letterSpacing: "0.02em", fontFamily: "\"General Sans\", \"General Sans Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "500", color: "rgb(245, 242, 233)" }}>
                          <span className="mr-[10px] align-middle" style={{ display: "inline-block", width: "8px", height: "8px", background: "rgb(184, 137, 44)" }} />
                          {panel.num}
                        </span>
                        <span
                          style={{
                            fontSize: "34px",
                            lineHeight: "1em",
                            letterSpacing: "-0.035em",
                            fontFamily: "\"General Sans\", \"General Sans Placeholder\", sans-serif",
                            fontStyle: "normal",
                            fontWeight: "500",
                            color: "rgb(245, 242, 233)",
                            whiteSpace: "nowrap",
                            alignSelf: "flex-start",
                            ...(isActive
                              ? { transform: "none" }
                              : { writingMode: "vertical-rl", transform: "rotate(180deg)" }),
                            transition: "opacity 0.25s ease",
                          } as CSSProperties}
                          {...(panel.tagTitle ? { "data-site-import-responsive": panel.tagTitle } : {})}
                        >
                          {panel.title}
                        </span>
                        <span
                          className="[@media(max-width:767px)]:will-change-transform! max-w-[320px]"
                          style={{
                            fontSize: "16px",
                            lineHeight: "1.5em",
                            fontFamily: "\"General Sans\", \"General Sans Placeholder\", sans-serif",
                            fontStyle: "normal",
                            fontWeight: "400",
                            letterSpacing: "0em",
                            color: "rgb(168, 184, 168)",
                            display: isActive ? "block" : "none",
                            opacity: isActive ? "1" : "0",
                            transform: isActive ? "none" : "translateY(12px)",
                            transition: "opacity 0.3s ease, transform 0.3s ease",
                          }}
                          {...(panel.tagDesc ? { "data-site-import-responsive": panel.tagDesc } : {})}
                        >
                          {panel.desc}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const serviceItemsData = [
  {
    image: fb_blowdry,
    alt: "Blow dry styling at Fabeau",
    intro: "Elegant cuts and flawless finishing.",
    items: [
      { title: "Women's Hair Cut", desc: "Consultation, wash and a precision cut finished to suit you.", price: "₹499", duration: "45 min" },
      { title: "Layer / Stylish Haircut", desc: "Soft layers and movement, shaped for your face.", price: "₹799", duration: "60 min" },
      { title: "Straight Blow Dry", desc: "Smooth, glossy blow dry. Curls and ironing from ₹699.", price: "₹499", duration: "40 min" },
      { title: "Kids Hair Cut", desc: "Any style, done gently with patience included.", price: "₹249", duration: "30 min" },
    ],
  },
  {
    image: fb_colour,
    alt: "Hair colour and spa styling at Fabeau",
    intro: "Hair colour, spa and head massage, matched to you.",
    items: [
      { title: "All-Over Hair Colour", desc: "One rich shade from root to tip.", price: "₹2,999 onwards", duration: "2 hrs" },
      { title: "Hair Highlights", desc: "Dimension and lightness that grows out softly.", price: "₹3,999 onwards", duration: "3 hrs" },
      { title: "Root Touch-Up", desc: "Fresh coverage at the roots between colour visits.", price: "₹1,499 onwards", duration: "1 hr" },
      { title: "Hair Spa", desc: "Deep nourishing spa for medium to extra long hair.", price: "₹999 onwards", duration: "60 min" },
    ],
  },
  {
    image: fb_men,
    alt: "Men's grooming and styling at Fabeau",
    intro: "Sharp style, modern confidence.",
    items: [
      { title: "Beard Trim & Design", desc: "Clean lines and shape. Beard design ₹199.", price: "₹149", duration: "20 min" },
      { title: "Normal Shave", desc: "A clean, classic shave with a smooth finish.", price: "₹149", duration: "20 min" },
      { title: "Men's Hair Cut", desc: "A sharp everyday cut. Styling ₹399.", price: "₹299", duration: "30 min" },
      { title: "Men's Grooming Combo", desc: "Haircut, beard trim and head massage in one visit.", price: "₹649", duration: "60 min" },
    ],
  },
  {
    image: fb_facial,
    alt: "Facials and advanced hair treatments at Fabeau",
    intro: "Facials and advanced hair treatments that glow, nourish and repair.",
    items: [
      { title: "Hydra Facial", desc: "Advanced hydration for a fresh, luminous look.", price: "₹3,999", duration: "60 min" },
      { title: "Keratin Treatment", desc: "Smooth, frizz-free hair for short to long lengths.", price: "₹2,999 onwards", duration: "3 hrs" },
      { title: "Golden Facial", desc: "Deep cleansing and nourishment for a natural glow.", price: "₹1,499", duration: "60 min" },
      { title: "Hair Botox", desc: "Repairs and restores shine for short to long hair.", price: "₹3,999 onwards", duration: "2 hrs" },
    ],
  },
];

function ServiceDetailPanel({
  index,
  isMobileVariant = false,
}: {
  index: number;
  isMobileVariant?: boolean;
}) {
  const data = serviceItemsData[index];
  if (!data) return null;
  const containerClasses = [
    "framer-r77kl3-container",
    "framer-17mgedg-container",
    "framer-11hfdrt-container",
    "framer-1sj3t3g-container",
  ];

  return (
    <div
      data-import-service-panel=""
      className={`framer-9nt4q8 items-start flex-none flex-row flex-wrap ${isMobileVariant ? "gap-[28px]" : "gap-[48px]"} [place-content:flex-start] [opacity:1]`}
    >
      <div
        className={`framer-1bck72s flex-[1_0_0px] ${isMobileVariant ? "min-w-[260px]" : "min-w-[300px]"} [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]`}
        style={{ borderRadius: "2px" }}
      >
        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
          <img
            className="[corner-shape:inherit] [object-position:center_center] object-cover"
            style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties}
            decoding="auto"
            width="2048"
            height="2048"
            src={data.image}
            alt={data.alt}
          />
        </div>
      </div>
      <div className="framer-zmaegx items-start flex-[1.2_0_0px] flex-col flex-nowrap gap-[28px] min-w-[320px] [place-content:flex-start] [opacity:1]">
        <div
          className="framer-441k6r max-w-[460px] wrap-break-word [word-break:break-word] transform-none [opacity:1]"
          style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties}
          data-framer-component-type="RichTextContainer"
        >
          <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">
            {data.intro}
          </p>
        </div>
        <div
          className="framer-18tcr5u items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start] [opacity:1]"
          style={{
            "--border-bottom-width": "0px",
            "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)",
            "--border-left-width": "0px",
            "--border-right-width": "0px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            width: "100%",
          } as CSSProperties}
          data-border="true"
        >
          {data.items.map((item, idx) => (
            <div key={item.title} className={`${containerClasses[idx % containerClasses.length]} flex-none [opacity:1]`}>
              <div
                className="framer-vuZcP framer-ME0Og framer-JiJV2 framer-HhJEE framer-j4ZEW framer-86w384 items-start flex-row flex-nowrap gap-[24px] [place-content:flex-start] [opacity:1]"
                style={{
                  "--border-bottom-width": "1px",
                  "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "0px",
                  width: "100%",
                } as CSSProperties}
                data-border="true"
              >
                <div className="framer-zhujw1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                  <div
                    className="framer-19uixk3 wrap-break-word [word-break:break-word] transform-none [opacity:1]"
                    style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties}
                    data-framer-component-type="RichTextContainer"
                  >
                    <h3
                      className="framer-text framer-styles-preset-1ivnrcx"
                      style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties}
                      dir="auto"
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className="framer-1rl8kc1 wrap-break-word [word-break:break-word] transform-none [opacity:1]"
                    style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-16u458q"
                      style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties}
                      dir="auto"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="framer-12qteax items-end flex-none flex-col flex-nowrap gap-[6px] content-end justify-start [opacity:1]">
                  <div
                    className="framer-17mce6y transform-none [opacity:1]"
                    style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-u0ai7f"
                      style={{ "--framer-text-alignment": "right", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties}
                      dir="auto"
                    >
                      {item.price}
                    </p>
                  </div>
                  <div
                    className="framer-i7nqb9 transform-none [opacity:1]"
                    style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-a4lqi5"
                      style={{ "--framer-text-alignment": "right", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties}
                      dir="auto"
                    >
                      {item.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="framer-1lvvnvn-container flex-none [opacity:1]">
          <a
            className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-q93yu8 framer-1x46096 [backdrop-filter:none] [opacity:1]"
            style={{
              "--border-bottom-width": "0px",
              "--border-color": "rgba(0, 0, 0, 0)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)",
              borderRadius: "2px",
            } as CSSProperties}
            href="tel:+910000000000"
            target="_blank"
          >
            <div
              className="framer-dhr7ap transform-none [opacity:1]"
              style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-krd2eu"
                style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties}
                dir="auto"
              >
                Book this service
              </p>
            </div>
            <svg
              className="framer-EcgqK framer-17gg11h transform-none [opacity:1]"
              style={{
                "--1335ju": "1.5",
                "--18mrqx2": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6, rgb(245, 242, 233))",
              } as CSSProperties}
              role="presentation"
              viewBox="0 0 24 24"
            >
              <use {...({ href: "#1173457374" } as any)} />
            </svg>
            <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1, rgb(143, 106, 28))" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

function ImportedSectionServiceMenu() {
  const [openService, setOpenService] = useState<number | null>(0);
  return (
    <section className="framer-iiiv5j items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)]" aria-label="Service menu" id="services">
      <div className="framer-1kfxx4l items-start flex-none flex-col flex-nowrap max-w-[1320px] [place-content:flex-start]">
        <div className="framer-xzmcfu">
          <div className="framer-fsldsb items-start gap-[24px] [place-content:flex-start]">
            <div className="ssr-variant">
              <div className="framer-sq4jfy-container flex-none will-change-transform opacity-[0.999281] transform-none">
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">03</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Brochure & price list</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-1atrgnc transform-none" data-framer-component-type="RichTextContainer">
              <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-color": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" } as CSSProperties} dir="auto"><span className="framer-text" style={{ "--framer-text-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties}><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="366">Our</span>{" "}<span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="367">signature</span>{" "}<span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="368">services</span>{" "}<span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="369" /></span><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="370">for</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="371">every</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="372">beautiful</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="373">you.</span></h2>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-p7809j wrap-break-word [word-break:break-word] [@media(max-width:809.98px)]:max-w-[520px] [@media(min-width:810px)_and_(max-width:1199.98px)]:max-w-[520px] will-change-transform opacity-[0.983959] transform-none" data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} dir="auto" data-site-import-responsive="375">Transparent prices for every service. Your stylist confirms the final price at consultation, before we begin.</p>
            </div>
          </div>
        </div>
        <div className="framer-1cylw1r items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start]" data-border="true">
          <div className="ssr-variant">
            <div className="framer-vbudr2-container flex-none will-change-transform [opacity:1] transform-none import-service-row" style={{ height: "769.23px" }} data-open={openService === 0} data-site-import-desktop-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 framer-v-gv9i7q items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[32px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 0 ? null : 0)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">01</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">Women's Hair</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Haircuts</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Blow dry</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Long layers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 0 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 0} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 0 ? null : 0); }} data-border="true" data-reset="button">
                    <svg className="framer-I69i9 framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 0 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 0 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={0} />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="framer-vbudr2-container flex-none will-change-transform [opacity:1] transform-none import-service-row" style={{ height: "1069.88px", "--site-import-responsive-display": "block" } as CSSProperties} data-open={openService === 0} data-site-import-mobile-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 framer-v-1jb4bu4 items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[16px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 0 ? null : 0)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">01</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">Women's Hair</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Haircuts</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Blow dry</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Long layers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 0 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 0} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 0 ? null : 0); }} data-border="true" data-reset="button">
                    <svg className="framer-I69i9 framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 0 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 0 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={0} isMobileVariant />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-12z37uv-container flex-none will-change-transform [opacity:1] transform-none import-service-row" style={{ height: "155.8px" }} data-open={openService === 1} data-site-import-desktop-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[32px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 1 ? null : 1)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">02</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Colour & Spa</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Hair Highlights</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Highlights</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Root Touch-Up</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 1 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 1} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 1 ? null : 1); }} data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 1 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 1 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={1} />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="framer-12z37uv-container flex-none will-change-transform [opacity:1] transform-none import-service-row" style={{ height: "164.69px", "--site-import-responsive-display": "block" } as CSSProperties} data-open={openService === 1} data-site-import-mobile-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 framer-v-an9eiw items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[16px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 1 ? null : 1)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">02</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Colour & Spa</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Hair Highlights</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Highlights</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Root Touch-Up</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 1 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 1} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 1 ? null : 1); }} data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 1 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 1 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={1} isMobileVariant />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-h58s6t-container flex-none will-change-transform opacity-[0.982619] transform-none import-service-row" style={{ height: "155.8px" }} data-open={openService === 2} data-site-import-desktop-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[32px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 2 ? null : 2)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">03</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Men's Grooming</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Beard</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Beard</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Styling</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 2 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 2} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 2 ? null : 2); }} data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 2 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 2 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={2} />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="framer-h58s6t-container flex-none will-change-transform [opacity:1] transform-none import-service-row" style={{ height: "125.09px", "--site-import-responsive-display": "block" } as CSSProperties} data-open={openService === 2} data-site-import-mobile-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 framer-v-an9eiw items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[16px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 2 ? null : 2)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">03</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Men's Grooming</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Beard</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Beard</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Styling</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 2 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 2} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 2 ? null : 2); }} data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 2 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 2 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={2} isMobileVariant />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1vnr4i-container flex-none will-change-transform opacity-[0.964276] transform-none import-service-row" style={{ height: "155.8px" }} data-open={openService === 3} data-site-import-desktop-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[32px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 3 ? null : 3)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">04</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Treatments</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Highlights</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Facials</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Keratin</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 3 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 3} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 3 ? null : 3); }} data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 3 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 3 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={3} />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="framer-1vnr4i-container flex-none will-change-transform [opacity:1] transform-none import-service-row" style={{ height: "125.09px", "--site-import-responsive-display": "block" } as CSSProperties} data-open={openService === 3} data-site-import-mobile-variant="">
              <div className="framer-EQKLe framer-j4ZEW framer-GIM0c framer-gdA2M framer-17uwhk1 framer-v-an9eiw items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1vvhp0e items-center flex-none flex-row flex-nowrap gap-[16px] content-center justify-start [opacity:1]" tabIndex={0} onClick={() => setOpenService(openService === 3 ? null : 3)}>
                  <div className="framer-2lhjic wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">04</p>
                  </div>
                  <div className="framer-1phbfn1 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[14px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-12lq327 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Treatments</h3>
                    </div>
                    <div className="framer-cpix59 items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-hvha0a-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Highlights</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1kjxx2y-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Facials</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-g4q32h-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Keratin</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="framer-11iaxbu items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: openService === 3 ? "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" : "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} aria-label="Show or hide service details" aria-expanded={openService === 3} onClick={(e) => { e.stopPropagation(); setOpenService(openService === 3 ? null : 3); }} data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-1hy1to8 aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": openService === 3 ? "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" : "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: openService === 3 ? "#650073895" : "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
                <ServiceDetailPanel index={3} isMobileVariant />
                <div className="framer-1p61jlz-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhyFabeau() {
  return (
    <section className="framer-1pw5073 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)]" aria-label="Why Scissor" id="why-scissor">
      <div className="framer-1gi38j1 items-start flex-none flex-col flex-nowrap max-w-[1320px] [place-content:flex-start]">
        <div className="framer-1p5joq1">
          <div className="framer-1yvwv2q items-start gap-[24px] [place-content:flex-start]">
            <div className="ssr-variant">
              <div className="framer-3lap3y-container flex-none will-change-transform opacity-[0.999281] transform-none">
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:blur(12px)] [opacity:1]" style={{ backgroundColor: "var(--token-a48a902b-b7a4-442c-a201-1ee165dc5e98)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">04</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Why choose us</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-qk7xvj transform-none" data-framer-component-type="RichTextContainer">
              <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} dir="auto"><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="557">Four</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="558">reasons</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="559">people</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="560" /><span className="framer-text" style={{ "--framer-text-color": "var(--token-741cae64-f534-4240-a634-bfdfc0e8d17d)" } as CSSProperties}><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="562">stay.</span></span></h2>
            </div>
          </div>
          <div className="framer-ednj5s items-start gap-[28px] [place-content:flex-start] will-change-transform opacity-[0.974156] transform-none">
            <div className="framer-1adxa6i wrap-break-word [word-break:break-word] [@media(min-width:810px)_and_(max-width:1199.98px)]:max-w-[520px] transform-none" data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} dir="auto">Guests come for one visit and stay for years. Here is what makes Fabeau different.</p>
            </div>
            <div className="ssr-variant">
              <div className="framer-xszxyc-container flex-none">
                <Link className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-7wbj0k framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" } as CSSProperties} to="/contact">
                  <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book an appointment</p>
                  </div>
                  <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#1173457374" } as any)} />
                  </svg>
                  <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-jrcoj0 items-start flex-none flex-col flex-nowrap [place-content:flex-start]">
          <div className="ssr-variant">
            <div className="framer-m2vhnh-container flex-none" data-site-import-desktop-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod items-center flex-row flex-nowrap gap-[40px] content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", height: "100%", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-between [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">01 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Premium care</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">High-quality products and personalised care, planned with you before we begin.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Consultation</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Skin & hair check</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Clear pricing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-[1.15_0_0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2752" height="1536" src={fb2_interior} alt="Fabeau styling floor with green velvet chairs" />
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-m2vhnh-container flex-none" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod framer-v-kpv7oh items-center flex-col! flex-row flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-none flex-col flex-nowrap gap-[40px] justify-start! content-start justify-between [order:1] [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">01 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Premium care</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">High-quality products and personalised care, planned with you before we begin.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Consultation</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Skin & hair check</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Clear pricing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-none [order:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2752" height="1536" src={fb2_interior} alt="Fabeau styling floor with green velvet chairs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-abhqlo-container flex-none" data-site-import-desktop-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod items-center flex-row flex-nowrap gap-[40px] content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", height: "100%", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-between [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">02 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Skilled professionals</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Experienced and certified experts in hair, skin, grooming and bridal beauty for women and men.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Stylists</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Beauticians</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Barbers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-[1.15_0_0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2752" height="1536" src={fb2_wash} alt="Relaxing hair wash at Fabeau" />
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-abhqlo-container flex-none" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod framer-v-kpv7oh items-center flex-col! flex-row flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-none flex-col flex-nowrap gap-[40px] justify-start! content-start justify-between [order:1] [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">02 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Skilled professionals</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Experienced and certified experts in hair, skin, grooming and bridal beauty for women and men.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Stylists</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Beauticians</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Barbers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-none [order:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2752" height="1536" src={fb2_wash} alt="Relaxing hair wash at Fabeau" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-k24lpz-container flex-none" data-site-import-desktop-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod items-center flex-row flex-nowrap gap-[40px] content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", height: "100%", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-between [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">03 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Hygienic service</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">A clean, safe and well-maintained space, with tools sanitised for every guest.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Sanitised tools</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Fresh linens</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Salon grade</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-[1.15_0_0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2304" height="1856" src={fb_products} alt="Fabeau hair care products" />
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-k24lpz-container flex-none" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod framer-v-kpv7oh items-center flex-col! flex-row flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-none flex-col flex-nowrap gap-[40px] justify-start! content-start justify-between [order:1] [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">03 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Hygienic service</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">A clean, safe and well-maintained space, with tools sanitised for every guest.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Sanitised tools</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Fresh linens</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Salon grade</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-none [order:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2304" height="1856" src={fb_products} alt="Fabeau hair care products" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-7nw1r2-container flex-none" data-site-import-desktop-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod items-center flex-row flex-nowrap gap-[40px] content-center justify-start [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", height: "100%", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-[1_0_0px] flex-col flex-nowrap content-start justify-between [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">04 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Luxury experience</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">A relaxing and indulgent environment where every guest is pampered, never rushed.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Unisex salon</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Walk ins</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Complimentary drink</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-[1.15_0_0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2304" height="1856" src={fb2_stations} alt="Fabeau styling stations with gold mirrors" />
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-7nw1r2-container flex-none" style={{ "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
              <div className="framer-IDbjw framer-j4ZEW framer-GIM0c framer-gdA2M framer-1j0xod framer-v-kpv7oh items-center flex-col! flex-row flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", width: "100%", borderRadius: "4px" }}>
                <div className="framer-17tqs0c items-start flex-none flex-col flex-nowrap gap-[40px] justify-start! content-start justify-between [order:1] [opacity:1]">
                  <div className="framer-11fjhhj wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">04 / 04</p>
                  </div>
                  <div className="framer-rn9b0z items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-118vrr8 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1ihuxgm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Luxury experience</h3>
                      </div>
                      <div className="framer-vhzory max-w-[420px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">A relaxing and indulgent environment where every guest is pampered, never rushed.</p>
                      </div>
                    </div>
                    <div className="framer-1im230r items-center flex-none flex-row flex-wrap gap-[8px] content-center justify-start [opacity:1]">
                      <div className="framer-7tvfic-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Unisex salon</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-h2uff4-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Walk ins</p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1aar4v3-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Complimentary drink</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-s32dcp flex-none [order:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                  <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                    <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2304" height="1856" src={fb2_stations} alt="Fabeau styling stations with gold mirrors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionBeforeAndAfterResults() {
  const [comparison, setComparison] = useState(50);
  return (
    <section className="framer-13k3kqj items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)]" aria-label="Before and after results" id="transformations">
      <div className="framer-7mmq6e items-start flex-none flex-col flex-nowrap max-w-[1320px] [place-content:flex-start]">
        <div className="framer-1itjhwc">
          <div className="framer-9r4pem items-start gap-[24px] [place-content:flex-start]">
            <div className="ssr-variant">
              <div className="framer-1x1i148-container flex-none will-change-transform [opacity:1] transform-none">
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">05</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Transformations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-17jkggd transform-none" data-framer-component-type="RichTextContainer">
              <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} dir="auto"><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="695">Real</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="696">results,</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="697" /><span className="framer-text" style={{ "--framer-text-color": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" } as CSSProperties}><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="699">side</span>{" "}<span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="700">by</span>{" "}<span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="701">side.</span></span></h2>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1iw2u1s wrap-break-word [word-break:break-word] [@media(max-width:809.98px)]:max-w-[520px] [@media(min-width:810px)_and_(max-width:1199.98px)]:max-w-[520px] will-change-transform opacity-[0.974156] transform-none" data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} dir="auto" data-site-import-responsive="703">Drag the handle to compare. Every result comes from our own salon in Coimbatore.</p>
            </div>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-12ux3oj-container flex-none will-change-transform [opacity:1] transform-none">
            <div className="framer-HUMuw framer-GIM0c framer-CxlV6 framer-uez7nq items-start flex-col flex-nowrap gap-[40px] [place-content:flex-start] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", width: "100%" }}>
              <nav className="framer-1y0b10k items-end flex-none flex-row flex-nowrap gap-[40px] content-end justify-start [overflow:auto] [padding:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px" } as CSSProperties} aria-label="Transformation cases" data-border="true" data-hide-scrollbars="true">
                <div className="framer-cyfpsy-container flex-none [opacity:1]">
                  <button className="framer-8ykm1 framer-ME0Og framer-j4ZEW framer-17a28hd framer-v-n77sz4 items-start flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "2px", "--border-color": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px" } as CSSProperties} data-reset="button" data-border="true" tabIndex={0}>
                    <div className="framer-1sgodqe transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Skin fade and beard</h3>
                    </div>
                    <div className="framer-118yu3g transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1))" } as CSSProperties} dir="auto">01</p>
                    </div>
                  </button>
                </div>
                <div className="framer-i53gav-container flex-none [opacity:1]">
                  <button className="framer-8ykm1 framer-ME0Og framer-j4ZEW framer-17a28hd items-start flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px" } as CSSProperties} data-reset="button" tabIndex={0}>
                    <div className="framer-1sgodqe transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Soft highlights</h3>
                    </div>
                    <div className="framer-118yu3g transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">02</p>
                    </div>
                  </button>
                </div>
                <div className="framer-1h8jidz-container flex-none [opacity:1]">
                  <button className="framer-8ykm1 framer-ME0Og framer-j4ZEW framer-17a28hd items-start flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px" } as CSSProperties} data-reset="button" tabIndex={0}>
                    <div className="framer-1sgodqe transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Keratin smooth</h3>
                    </div>
                    <div className="framer-118yu3g transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">03</p>
                    </div>
                  </button>
                </div>
              </nav>
              <div className="framer-dwrw0q items-start flex-none flex-row flex-wrap gap-[48px] [place-content:flex-start] [opacity:1]">
                <div className="framer-69n3sm-container aspect-[1.25/1] flex-[1.9_0_0px] min-w-[320px] [opacity:1]" {...({ name: "Before After Slider" } as any)}>
                  <div className="import-slider [overflow:hidden] select-none [touch-action:pan-y]" style={{ position: "relative", width: "100%", height: "100%", borderRadius: "2px", cursor: "ew-resize", backgroundColor: "rgb(240, 240, 240)" }}>
                    <div style={{ position: "absolute", inset: "0px", backgroundImage: "url(\"/site-assets/3143f6562e75195d.webp\")", backgroundSize: "cover", backgroundPosition: "center center" }} />
                    <div className="will-change-transform" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)`, position: "absolute", inset: "0px", backgroundImage: "url(\"/site-assets/d122ca0395674e61.webp\")", backgroundSize: "cover", backgroundPosition: "center center" }} />
                    <div className="[top:0px] [bottom:0px] [z-index:10] will-change-auto" style={{ position: "absolute", left: `${comparison}%`, width: "0px" }}>
                      <div className="[top:0px] [bottom:0px] [box-shadow:rgba(0,_0,_0,_0.3)_0px_0px_12px]" style={{ position: "absolute", left: "-1px", width: "2px", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" }} />
                      <div className="items-center justify-center [box-shadow:rgba(0,_0,_0,_0.2)_0px_2px_8px,_rgba(0,_0,_0,_0.15)_0px_4px_16px] [overflow:hidden] will-change-transform transform-none" style={{ position: "absolute", top: "50%", left: "-22px", marginTop: "-22px", width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "rgb(255, 255, 255)", display: "flex", border: "2px solid rgba(255, 255, 255, 0.2)" }} tabIndex={0}>
                        <svg width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...({ version: "1.1" } as any)}>
                          <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" />
                        </svg>
                        <svg width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...({ version: "1.1" } as any)}>
                          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
                        </svg>
                      </div>
                    </div>
                    <input type="range" min={0} max={100} value={comparison} aria-label="Compare before and after" onChange={(event) => setComparison(Number(event.target.value))} />
<div style={{ position: "absolute", top: "16px", left: "16px", padding: "8px 16px", backgroundColor: "rgba(0, 0, 0, 0.75)", color: "rgb(255, 255, 255)", borderRadius: "8px", fontSize: "14px", fontWeight: "600", pointerEvents: "none" }}>Before</div>
                    <div className="right-[16px]" style={{ position: "absolute", top: "16px", padding: "8px 16px", backgroundColor: "rgba(0, 0, 0, 0.75)", color: "rgb(255, 255, 255)", borderRadius: "8px", fontSize: "14px", fontWeight: "600", pointerEvents: "none" }}>After</div>
                  </div>
                </div>
                <div className="framer-ugizzm items-start flex-[1_0_0px] flex-col flex-nowrap gap-[36px] min-w-[280px] [place-content:flex-start] [opacity:1]">
                  <div className="framer-1mreqi4 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-98dc8l wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">From overgrown to sharp</h3>
                    </div>
                    <div className="framer-12bdj5n wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-1i9yw26" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">A clean fade blended into textured length on top, with the beard trimmed and designed to match the jawline.</p>
                    </div>
                  </div>
                  <div className="framer-90fopf items-start flex-none flex-col flex-nowrap gap-[20px] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px" } as CSSProperties} data-border="true">
                    <div className="framer-1fg0kuq-container flex-none [opacity:1]">
                      <div className="framer-6Q8PS framer-j4ZEW framer-gdA2M framer-efi3hp items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }}>
                        <div className="framer-1wpplpt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Service</p>
                        </div>
                        <div className="framer-10016nm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Hair cut, beard trim & design</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-106892e-container flex-none [opacity:1]">
                      <div className="framer-6Q8PS framer-j4ZEW framer-gdA2M framer-efi3hp items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }}>
                        <div className="framer-1wpplpt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Time in chair</p>
                        </div>
                        <div className="framer-10016nm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">50 min</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-lw0lcp-container flex-none [opacity:1]">
                      <div className="framer-6Q8PS framer-j4ZEW framer-gdA2M framer-efi3hp items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }}>
                        <div className="framer-1wpplpt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Stylist</p>
                        </div>
                        <div className="framer-10016nm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Arjun, senior barber</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-12iahr5-container flex-none [opacity:1]">
                    <a className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-sovuw2 framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} data-border="true" href="tel:+910000000000" target="_blank">
                      <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book this look</p>
                      </div>
                      <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                        <use {...({ href: "#1173457374" } as any)} />
                      </svg>
                      <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionMeetTheStylists() {
  return (
    <section className="framer-1qyhwcj items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0px]" aria-label="Meet the stylists" id="stylists">
      <div className="framer-1szb425 items-start max-w-[1320px] [place-content:flex-start]">
        <div className="framer-8u4dcs items-start [place-content:flex-start]">
          <div className="framer-3ctc10 items-start flex-none flex-col flex-nowrap gap-[24px] [place-content:flex-start]">
            <div className="ssr-variant">
              <div className="framer-ie2aur-container flex-none will-change-transform [opacity:1] transform-none">
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">06</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Meet the team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-h1iy35 items-start flex-none flex-col flex-nowrap gap-[20px] [place-content:flex-start]">
              <div className="framer-384b78 transform-none" data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} dir="auto"><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="785">The</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="786">hands</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="787">behind</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="788" /><span className="framer-text" style={{ "--framer-text-color": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" } as CSSProperties}><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="790">every</span>{" "}<span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="791">chair.</span></span></h2>
              </div>
              <div className="framer-1hxr70j max-w-[420px] wrap-break-word [word-break:break-word] will-change-transform [opacity:1] transform-none" data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} dir="auto">Stylists, beauticians and barbers who share one luxury floor. Book the person, not just the service.</p>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1ppyjw6-container flex-none will-change-transform [opacity:1] transform-none">
              <a className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-q93yu8 framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" } as CSSProperties} href="tel:+910000000000" target="_blank">
                <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Book with an expert</p>
                </div>
                <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6, rgb(245, 242, 233))" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#1173457374" } as any)} />
                </svg>
                <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1, rgb(143, 106, 28))" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="framer-u1gt02 items-start [place-content:flex-start]">
          <div className="framer-11zz7o5 items-start [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="framer-gxjag8 items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start]">
              <div className="ssr-variant">
                <div className="framer-znous3-container flex-none">
                  <Link className="framer-sjxZy framer-ME0Og framer-JiJV2 framer-1xoycau framer-12mnx6i items-start flex-col flex-nowrap gap-[20px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }} to="/stylists">
                    <div className="framer-v23b0 items-start aspect-[0.75/1] flex-none flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1792" height="2400" src={fb2_stylist1} alt="Divya Raman, senior stylist at Fabeau" />
                      </div>
                      <div className="framer-pjd382-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Senior stylist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-g6drux items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-18oribt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Divya Raman</h3>
                      </div>
                      <div className="framer-9z9dtz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Cuts, blow dries and styling</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="framer-gxjag8 items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start]">
              <div className="ssr-variant">
                <div className="framer-znous3-container flex-none">
                  <Link className="framer-sjxZy framer-ME0Og framer-JiJV2 framer-1xoycau framer-12mnx6i items-start flex-col flex-nowrap gap-[20px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }} to="/stylists">
                    <div className="framer-v23b0 items-start aspect-[0.75/1] flex-none flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1792" height="2400" src={fb2_stylist2} alt="Arjun Kumar, senior barber at Fabeau" />
                      </div>
                      <div className="framer-pjd382-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Senior barber</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-g6drux items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-18oribt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Arjun Kumar</h3>
                      </div>
                      <div className="framer-9z9dtz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Fades, beards and grooming</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-7b4mt9 items-start [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="framer-1x9race items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start]">
              <div className="ssr-variant">
                <div className="framer-1g4t26i-container flex-none">
                  <Link className="framer-sjxZy framer-ME0Og framer-JiJV2 framer-1xoycau framer-12mnx6i items-start flex-col flex-nowrap gap-[20px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }} to="/stylists">
                    <div className="framer-v23b0 items-start aspect-[0.75/1] flex-none flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1792" height="2400" src={fb2_stylist4} alt="Meera Iyer, colour specialist at Fabeau" />
                      </div>
                      <div className="framer-pjd382-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Colour specialist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-g6drux items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-18oribt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Meera Iyer</h3>
                      </div>
                      <div className="framer-9z9dtz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Highlights and hair treatments</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="framer-1x9race items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start]">
              <div className="ssr-variant">
                <div className="framer-1g4t26i-container flex-none">
                  <Link className="framer-sjxZy framer-ME0Og framer-JiJV2 framer-1xoycau framer-12mnx6i items-start flex-col flex-nowrap gap-[20px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }} to="/stylists">
                    <div className="framer-v23b0 items-start aspect-[0.75/1] flex-none flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                      <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                        <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1792" height="2400" src={fb2_stylist3} alt="Kavya Nair, skin and beauty therapist at Fabeau" />
                      </div>
                      <div className="framer-pjd382-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Skin specialist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-g6drux items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-18oribt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Kavya Nair</h3>
                      </div>
                      <div className="framer-9z9dtz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Facials, waxing and threading</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedDivYourVisit() {
  return (
    <div className="framer-1yvdi0f-container flex-none" id="your-visit" {...({ name: "Your Visit" } as any)}>
      <div className="ssr-variant">
        <section className="framer-7bz22 framer-lZ7pJ framer-gdA2M framer-p0umqt items-center flex-col flex-nowrap content-center justify-start [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [padding:0px] [opacity:1]" style={{ backgroundColor: "var(--token-4f05f468-261f-4d3f-953e-417f2a2e2041)", width: "100%" }} aria-label="Your visit" {...({ name: "Your Visit" } as any)}>
          <div className="framer-8zus2e items-center flex-none flex-col flex-nowrap place-content-center [gap:0px] [min-height:calc(var(--framer-viewport-height,100vh)_*_1)] [z-index:1] [opacity:1]">
            <div className="framer-exznxz items-start flex-none flex-col flex-nowrap gap-[44px] max-w-[1320px] [place-content:flex-start] [opacity:1]">
              <div className="framer-cii6np items-end flex-none flex-row flex-nowrap gap-[56px] content-end justify-start [opacity:1]">
                <div className="framer-14qqi1h items-start flex-[1.6_0_0px] flex-col flex-nowrap gap-[24px] [place-content:flex-start] [opacity:1]">
                  <div className="framer-a4nrcm-container flex-none will-change-transform [opacity:1] transform-none">
                    <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:blur(12px)] [opacity:1]" style={{ backgroundColor: "var(--token-a48a902b-b7a4-442c-a201-1ee165dc5e98)", borderRadius: "2px" }}>
                      <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                        <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">07</p>
                        </div>
                      </div>
                      <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Your visit</p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-19xo4w wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-1of0zx5": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--extracted-1qn201a": "var(--token-741cae64-f534-4240-a634-bfdfc0e8d17d)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto"><span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }}>From</span> <span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }}>first</span> <span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }}>hello</span> <span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }}>to</span> <span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }}>the</span> <span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }} /><span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1qn201a, var(--token-741cae64-f534-4240-a634-bfdfc0e8d17d))" } as CSSProperties}><span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }}>final</span>{" "}<span className="[opacity:1] transform-none transform-none" style={{ display: "inline-block" }}>mirror.</span></span></h2>
                  </div>
                </div>
                <div className="framer-1rprxez items-start flex-[1_0_0px] flex-col flex-nowrap gap-[28px] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
                  <div className="framer-1ccyj0j wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Four simple steps, no rush and no surprises. Here is how every visit to Fabeau works.</p>
                  </div>
                  <div className="framer-d84uvc-container flex-none [opacity:1]">
                    <Link className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-7wbj0k framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" } as CSSProperties} to="/contact">
                      <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book an appointment</p>
                      </div>
                      <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                        <use {...({ href: "#1173457374" } as any)} />
                      </svg>
                      <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" }} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="framer-17dp4yz items-start flex-none flex-row flex-wrap [gap:0px] [place-content:flex-start] [opacity:1]">
                <div className="framer-15eezag-container flex-[1_0_0px] min-w-[240px] [opacity:1] transform-none">
                  <article className="framer-Xor5w framer-j4ZEW framer-GIM0c framer-CxlV6 framer-xtegxm items-start flex-col flex-nowrap gap-[22px] [padding:0px] [place-content:flex-start] [opacity:1] transform-none" style={{ width: "100%" }}>
                    <div className="framer-smudhm items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-giqb32 aspect-[1.55/1] flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2528" height="1696" src={fb2_reception} alt="Fabeau reception and lounge" />
                        </div>
                      </div>
                    </div>
                    <div className="framer-2boop5 items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]">
                      <div className="framer-djntja flex-none [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", borderRadius: "100px" }} />
                      <div className="framer-1setfwf flex-[1_0_0px] [opacity:1]" style={{ backgroundColor: "var(--token-5d37f567-19dd-4b58-ac57-b69f0910214f)" }} />
                    </div>
                    <div className="framer-170ilw4 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1v36tlj items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]">
                        <div className="framer-b7tts6 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565))" } as CSSProperties} dir="auto">Step 01</p>
                        </div>
                        <div className="framer-st0bsz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Book</h3>
                        </div>
                        <div className="framer-157scou wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1i9yw26" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Pick a service and an expert online or by phone. We confirm within the hour.</p>
                        </div>
                      </div>
                      <div className="framer-ngn7o0-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">2 minutes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="framer-1v6jyt6-container flex-[1_0_0px] min-w-[240px] [opacity:1] transform-none">
                  <article className="framer-Xor5w framer-j4ZEW framer-GIM0c framer-CxlV6 framer-xtegxm items-start flex-col flex-nowrap gap-[22px] [padding:0px] [place-content:flex-start] [opacity:1] transform-none" style={{ width: "100%" }}>
                    <div className="framer-smudhm items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-giqb32 aspect-[1.55/1] flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2528" height="1696" src={fb_facial} alt="Facial treatment at Fabeau" />
                        </div>
                      </div>
                    </div>
                    <div className="framer-2boop5 items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]">
                      <div className="framer-djntja flex-none [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", borderRadius: "100px" }} />
                      <div className="framer-1setfwf flex-[1_0_0px] [opacity:1]" style={{ backgroundColor: "var(--token-5d37f567-19dd-4b58-ac57-b69f0910214f)" }} />
                    </div>
                    <div className="framer-170ilw4 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1v36tlj items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]">
                        <div className="framer-b7tts6 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565))" } as CSSProperties} dir="auto">Step 02</p>
                        </div>
                        <div className="framer-st0bsz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Consult</h3>
                        </div>
                        <div className="framer-157scou wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1i9yw26" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">A few minutes to agree on the look, the time and the price.</p>
                        </div>
                      </div>
                      <div className="framer-ngn7o0-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">10 minutes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="framer-1bpn1du-container flex-[1_0_0px] min-w-[240px] [opacity:1] transform-none">
                  <article className="framer-Xor5w framer-j4ZEW framer-GIM0c framer-CxlV6 framer-xtegxm items-start flex-col flex-nowrap gap-[22px] [padding:0px] [place-content:flex-start] [opacity:1] transform-none" style={{ width: "100%" }}>
                    <div className="framer-smudhm items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-giqb32 aspect-[1.55/1] flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2528" height="1696" src={fb_men} alt="Men's grooming at Fabeau" />
                        </div>
                      </div>
                    </div>
                    <div className="framer-2boop5 items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]">
                      <div className="framer-djntja flex-none [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", borderRadius: "100px" }} />
                      <div className="framer-1setfwf flex-[1_0_0px] [opacity:1]" style={{ backgroundColor: "var(--token-5d37f567-19dd-4b58-ac57-b69f0910214f)" }} />
                    </div>
                    <div className="framer-170ilw4 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1v36tlj items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]">
                        <div className="framer-b7tts6 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565))" } as CSSProperties} dir="auto">Step 03</p>
                        </div>
                        <div className="framer-st0bsz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Create</h3>
                        </div>
                        <div className="framer-157scou wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1i9yw26" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Your expert gets to work while you relax in a calm, luxurious space.</p>
                        </div>
                      </div>
                      <div className="framer-ngn7o0-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">20 to 180 minutes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="framer-dz17oh-container flex-[1_0_0px] min-w-[240px] [opacity:1] transform-none">
                  <article className="framer-Xor5w framer-j4ZEW framer-GIM0c framer-CxlV6 framer-xtegxm items-start flex-col flex-nowrap gap-[22px] [padding:0px] [place-content:flex-start] [opacity:1] transform-none" style={{ width: "100%" }}>
                    <div className="framer-smudhm items-start flex-none flex-col flex-nowrap [gap:0px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-giqb32 aspect-[1.55/1] flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="2528" height="1696" src={fb2_manicure} alt="Manicure at Fabeau" />
                        </div>
                      </div>
                    </div>
                    <div className="framer-2boop5 items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]">
                      <div className="framer-djntja flex-none [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", borderRadius: "100px" }} />
                      <div className="framer-1setfwf flex-[1_0_0px] [opacity:1]" style={{ backgroundColor: "var(--token-5d37f567-19dd-4b58-ac57-b69f0910214f)" }} />
                    </div>
                    <div className="framer-170ilw4 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start] [opacity:1]">
                      <div className="framer-1v36tlj items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]">
                        <div className="framer-b7tts6 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565))" } as CSSProperties} dir="auto">Step 04</p>
                        </div>
                        <div className="framer-st0bsz wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-1fitxwk" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Care</h3>
                        </div>
                        <div className="framer-157scou wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1i9yw26" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Leave glowing, with care tips and a rebook date that suits you.</p>
                        </div>
                      </div>
                      <div className="framer-ngn7o0-container flex-none [opacity:1]">
                        <div className="framer-6G8Yj framer-j4ZEW framer-1qdhcxq items-center flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                          <div className="framer-prxey3 transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">5 minutes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1itp35w flex-none [opacity:1]" />
          <div className="framer-106k76g flex-none [opacity:1]" />
          <div className="framer-70ep5k flex-none [opacity:1]" />
          <div className="framer-lbpvf9 flex-none [opacity:1]" />
          <div className="framer-1qndreo flex-none [opacity:1]" />
        </section>
      </div>
    </div>
  );
}

function ImportedSectionClientReviews() {
  return (
    <section className="framer-10g3g0x items-center flex-none flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]" aria-label="Client reviews" id="reviews">
      <div className="framer-17ao1sr items-start flex-none flex-col flex-nowrap max-w-[1320px] [place-content:flex-start]">
        <div className="framer-hnp0dc [@media(max-width:809.98px)]:gap-[12px] will-change-transform opacity-[0.999233] transform-none">
          <div className="ssr-variant">
            <div className="framer-1inumka-container flex-none">
              <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" }}>
                  <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">08</p>
                  </div>
                </div>
                <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Client reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1cv60i-container flex-none">
              <div className="framer-gWX23 framer-j4ZEW framer-1clj6z8 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]">
                <div className="framer-6r6g4f items-center flex-none flex-row flex-nowrap gap-[2px] content-center justify-start [opacity:1]">
                  <svg className="framer-YnhV6 framer-18u5i2m aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <svg className="framer-YnhV6 framer-1ynvcza aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <svg className="framer-YnhV6 framer-1dvnwyk aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <svg className="framer-YnhV6 framer-1jtjg2o aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <svg className="framer-YnhV6 framer-pusoqh aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                </div>
                <div className="framer-1g8gdsk transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">4.9 from 980+ Google reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-pg7bri-container flex-none will-change-transform [opacity:1] transform-none">
            <div className="framer-k93sq framer-YXfPH framer-ME0Og framer-JiJV2 framer-1rw1l3u items-center flex-row flex-wrap gap-[80px] content-center justify-start [opacity:1]" style={{ width: "100%" }}>
              <div className="framer-10y18b1 items-start flex-[1.4_0_0px] flex-col flex-nowrap gap-[44px] min-w-[300px] [place-content:flex-start] [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1015">
                <figure className="framer-t7k1vp items-start flex-none flex-col flex-nowrap gap-[28px] [place-content:flex-start] [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1016">
                  <svg className="framer-gS9zB framer-lkre90 aspect-square flex-none [mask:var(--framer-icon-mask)] [@media(max-width:767px)]:[opacity:1]!" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--pgex8v": "1.5", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} role="presentation" viewBox="0 0 24 24" data-site-import-responsive="1017">
                    <use {...({ href: "#547985882" } as any)} />
                  </svg>
                  <div className="framer-okg874 wrap-break-word [word-break:break-word] [@media(max-width:767px)]:[opacity:1]!" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-framer-component-type="RichTextContainer" data-site-import-responsive="1019">
                    <p className="framer-text framer-styles-preset-pkflip" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Meera listened and nailed my highlights. My colour still looks soft and glossy months later.</p>
                  </div>
                  <figcaption className="framer-zz7dcj items-start flex-none flex-col flex-nowrap gap-[4px] [padding:0px] [place-content:flex-start] [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1021">
                    <div className="framer-1wlg1ac wrap-break-word [word-break:break-word] [@media(max-width:767px)]:[opacity:1]!" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-framer-component-type="RichTextContainer" data-site-import-responsive="1022">
                      <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Sneha R.</h3>
                    </div>
                    <div className="framer-18nwudx wrap-break-word [word-break:break-word] [@media(max-width:767px)]:[opacity:1]!" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-framer-component-type="RichTextContainer" data-site-import-responsive="1024">
                      <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Highlights with Meera</p>
                    </div>
                  </figcaption>
                </figure>
                <div className="framer-1rrjkob items-center flex-none flex-row flex-nowrap gap-[12px] content-center justify-start [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1026">
                  <div className="framer-1fir5ie-container flex-none [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1027">
                    <button className="framer-sSLKa framer-4ocayc items-center flex-row flex-nowrap place-content-center [gap:0px] will-change-auto" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", borderRadius: "100px", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} aria-label="Daniel Okafor" data-border="true" data-reset="button" tabIndex={0}>
                      <div className="framer-1crifd7 flex-[1_0_0px] [overflow:var(--overflow-clip-fallback,clip)] [opacity:0.5]" style={{ borderRadius: "100px", transform: "none", transformOrigin: "50% 50% 0px", willChange: "transform" } as CSSProperties}>
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1856" height="2304" src={fb2_client1} alt="Fabeau client" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="framer-14z8hrh-container flex-none [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1032">
                    <button className="framer-sSLKa framer-4ocayc items-center flex-row flex-nowrap place-content-center [gap:0px] [@media(max-width:767px)]:[opacity:1]! will-change-auto" style={{ "--border-bottom-width": "2px", "--border-color": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", "--border-left-width": "2px", "--border-right-width": "2px", "--border-style": "solid", "--border-top-width": "2px", borderRadius: "100px", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} aria-label="Sofia Russo" data-border="true" data-reset="button" tabIndex={0} data-site-import-responsive="1033">
                      <div className="framer-1crifd7 flex-[1_0_0px] [overflow:var(--overflow-clip-fallback,clip)]" style={{ borderRadius: "100px", opacity: "1", transform: "none", transformOrigin: "50% 50% 0px", willChange: "transform" } as CSSProperties} data-site-import-responsive="1034">
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1856" height="2304" src={fb2_client2} alt="Fabeau client" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="framer-ibfsyn-container flex-none [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1037">
                    <button className="framer-sSLKa framer-4ocayc items-center flex-row flex-nowrap place-content-center [gap:0px] [@media(max-width:767px)]:will-change-auto! [@media(max-width:767px)]:[opacity:1]!" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", borderRadius: "100px", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} aria-label="Kwame Asante" data-border="true" data-reset="button" tabIndex={0} data-site-import-responsive="1038">
                      <div className="framer-1crifd7 flex-[1_0_0px] [overflow:var(--overflow-clip-fallback,clip)] [opacity:0.5]" style={{ borderRadius: "100px", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1039">
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1856" height="2304" src={fb2_client3} alt="Fabeau client" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="framer-djlsmp-container flex-none [@media(max-width:767px)]:[opacity:1]!" style={{ transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} data-site-import-responsive="1042">
                    <button className="framer-sSLKa framer-4ocayc items-center flex-row flex-nowrap place-content-center [gap:0px]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", borderRadius: "100px", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties} aria-label="Leah Martin" data-border="true" data-reset="button" tabIndex={0}>
                      <div className="framer-1crifd7 flex-[1_0_0px] [overflow:var(--overflow-clip-fallback,clip)] [opacity:0.5]" style={{ borderRadius: "100px", transform: "none", transformOrigin: "50% 50% 0px" } as CSSProperties}>
                        <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                          <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1856" height="2304" src={fb2_client4} alt="Fabeau client" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="framer-1qh5g7k aspect-[0.85/1] flex-[1_0_0px] min-w-[280px] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ borderRadius: "2px" }}>
                <div className="[corner-shape:inherit]" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" } as CSSProperties}>
                  <img className="[corner-shape:inherit] [object-position:center_center] object-cover" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" } as CSSProperties} decoding="auto" width="1856" height="2304" src={fb2_client1} alt="Fabeau client" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-yt2vhb items-center flex-none flex-row flex-nowrap gap-[12px] content-center justify-start [mask:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0)_100%)]" style={{ overflowX: "clip", display: "flex", position: "relative" }}>
        <ul className="list-none justify-start flex-row [gap:12px] [opacity:1] items-center [max-height:100%] [max-width:100%]" style={{ display: "flex", position: "relative", padding: "0px", margin: "0px", width: "100%", height: "100%", transform: "translateX(-24.969px)" }} data-site-import-responsive="1051">
          <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={1} aria-setsize={7}>
            <div className="ssr-variant">
              <div className="framer-1msnlev-container flex-none">
                <div className="framer-X72TH framer-pAxg8 framer-j4ZEW framer-15bj3k4 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <svg className="framer-YnhV6 framer-otdyop aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <div className="framer-kyblal transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Best grooming in Coimbatore</p>
                  </div>
                  <div className="framer-ww660e transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Karthik S.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={2} aria-setsize={7}>
            <div className="ssr-variant">
              <div className="framer-zyupm4-container flex-none">
                <div className="framer-X72TH framer-pAxg8 framer-j4ZEW framer-15bj3k4 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <svg className="framer-YnhV6 framer-otdyop aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <div className="framer-kyblal transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">My hair has never looked this soft</p>
                  </div>
                  <div className="framer-ww660e transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Sneha R.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={3} aria-setsize={7}>
            <div className="ssr-variant">
              <div className="framer-63elzd-container flex-none">
                <div className="framer-X72TH framer-pAxg8 framer-j4ZEW framer-15bj3k4 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <svg className="framer-YnhV6 framer-otdyop aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <div className="framer-kyblal transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">They actually listen</p>
                  </div>
                  <div className="framer-ww660e transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Priya K.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={4} aria-setsize={7}>
            <div className="ssr-variant">
              <div className="framer-8n76cr-container flex-none">
                <div className="framer-X72TH framer-pAxg8 framer-j4ZEW framer-15bj3k4 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <svg className="framer-YnhV6 framer-otdyop aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <div className="framer-kyblal transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Kids cut without the tears</p>
                  </div>
                  <div className="framer-ww660e transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Ramesh V.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={5} aria-setsize={7}>
            <div className="ssr-variant">
              <div className="framer-1rwute1-container flex-none">
                <div className="framer-X72TH framer-pAxg8 framer-j4ZEW framer-15bj3k4 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <svg className="framer-YnhV6 framer-otdyop aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <div className="framer-kyblal transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Hydra facial glow</p>
                  </div>
                  <div className="framer-ww660e transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Anjali M.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={6} aria-setsize={7}>
            <div className="ssr-variant">
              <div className="framer-fx4vsy-container flex-none">
                <div className="framer-X72TH framer-pAxg8 framer-j4ZEW framer-15bj3k4 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <svg className="framer-YnhV6 framer-otdyop aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <div className="framer-kyblal transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Worth every minute</p>
                  </div>
                  <div className="framer-ww660e transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Vikram H.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="[flex-grow:0] [flex-shrink:0] transform-none" style={{ position: "relative", height: "fit-content", width: "fit-content" }} aria-hidden="false" aria-posinset={7} aria-setsize={7}>
            <div className="ssr-variant">
              <div className="framer-zlturh-container flex-none">
                <div className="framer-X72TH framer-pAxg8 framer-j4ZEW framer-15bj3k4 items-center flex-row flex-nowrap gap-[12px] content-center justify-start [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <svg className="framer-YnhV6 framer-otdyop aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#2930526878" } as any)} />
                  </svg>
                  <div className="framer-kyblal transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Calm, kind and so skilled</p>
                  </div>
                  <div className="framer-ww660e transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Lakshmi P.</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ImportedSectionLookbook() {
  return (
    <section className="framer-cvm96m items-center flex-none flex-col flex-nowrap content-center justify-start [overflow:var(--overflow-clip-fallback,clip)]" aria-label="Lookbook" id="lookbook">
      <div className="framer-1tssruc items-start flex-none flex-col flex-nowrap max-w-[1320px] [gap:0px] [place-content:flex-start]">
        <div className="framer-rgow6a">
          <div className="framer-se7ubh items-start gap-[24px] [place-content:flex-start]">
            <div className="ssr-variant">
              <div className="framer-9u5v1r-container flex-none will-change-transform [opacity:1] transform-none">
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">09</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Lookbook</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-16yp8tf wrap-break-word [word-break:break-word] transform-none" data-framer-component-type="RichTextContainer">
              <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} dir="auto"><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1128">Fresh</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1129">from</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1130" /><span className="framer-text" style={{ "--framer-text-color": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" } as CSSProperties}><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1132">the</span>{" "}<span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1133">chair.</span></span></h2>
            </div>
          </div>
          <div className="framer-1x5sr7g items-start gap-[28px] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-q6c0nq wrap-break-word [word-break:break-word] [@media(min-width:810px)_and_(max-width:1199.98px)]:max-w-[520px] transform-none" data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} dir="auto">A rolling look at recent hair, colour, grooming and bridal work from our salon. Scroll to flip through the latest looks.</p>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1h5hzvb-container flex-none">
                <a className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-sovuw2 framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} data-border="true" href="tel:+910000000000" target="_blank">
                  <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book your look</p>
                  </div>
                  <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#1173457374" } as any)} />
                  </svg>
                  <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-aishiy-container flex-none" {...({ name: "Curved Archive" } as any)}>
        <div className="ssr-variant">
          <div style={{ width: "100%", position: "relative", height: "400vh" }}>
            <div className="[top:0px] [left:0px] [right:0px] min-h-[560px] [overflow:hidden] flex-col justify-center box-border transform-none" style={{ position: "absolute", height: "864px", display: "flex", padding: "64px 0px 40px" }} role="group" aria-label="Image archive" data-site-import-responsive="1146">
              <div className="[flex:1_1_0%]" style={{ position: "relative", width: "100%", minHeight: "584.75px" }} data-site-import-responsive="1147">
                <figure className="[overflow:hidden] [opacity:1] [z-index:100]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(-1.52513px) translateY(0.000261849px) scale(0.999452) rotate(-0.0119496deg)" } as CSSProperties} data-site-import-responsive="1148">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_man_crop} alt="Textured crop" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:90]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(304.787px) translateY(10.4576px) scale(0.890548) rotate(2.38805deg)" } as CSSProperties} data-site-import-responsive="1150">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_woman_waves} alt="Long glossy waves" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:80]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(611.1px) translateY(42.0399px) scale(0.780548) rotate(4.78805deg)" } as CSSProperties} data-site-import-responsive="1152">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_fade} alt="Skin fade" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:70]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(917.412px) translateY(94.7472px) scale(0.670548) rotate(7.18805deg)" } as CSSProperties} data-site-import-responsive="1154">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_bridal} alt="Bridal hair and makeup" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:60]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(1223.72px) translateY(168.58px) scale(0.560548) rotate(9.58805deg)" } as CSSProperties} data-site-import-responsive="1156">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_shave} alt="Beard shaping" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:50]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(1530.04px) translateY(169px) scale(0.5) rotate(11.9881deg)" } as CSSProperties} data-site-import-responsive="1158">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb_spa} alt="Hair spa" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:40]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(1836.35px) translateY(169px) scale(0.5) rotate(14deg)" } as CSSProperties} data-site-import-responsive="1160">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_after} alt="Smooth, glossy long hair" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:30]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(2142.66px) translateY(169px) scale(0.5) rotate(14deg)" } as CSSProperties} data-site-import-responsive="1605">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb_nails} alt="Nail care" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:0] [z-index:40]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(-1839.4px) translateY(169px) scale(0.5) rotate(-14deg)" } as CSSProperties} data-site-import-responsive="1607">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_keratin} alt="Sleek keratin finish" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:50]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(-1533.09px) translateY(169px) scale(0.5) rotate(-12.0119deg)" } as CSSProperties} data-site-import-responsive="1162">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_brows} alt="Eyebrow threading" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:60]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(-1226.78px) translateY(169px) scale(0.559452) rotate(-9.61195deg)" } as CSSProperties} data-site-import-responsive="1164">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb_colour} alt="Rich hair colour" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:70]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(-920.463px) translateY(95.3783px) scale(0.669452) rotate(-7.21195deg)" } as CSSProperties} data-site-import-responsive="1166">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb_men2} alt="Men's styling" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:80]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(-614.15px) translateY(42.4606px) scale(0.779452) rotate(-4.81195deg)" } as CSSProperties} data-site-import-responsive="1168">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_woman_layers} alt="Layered cut with highlights" loading="lazy" decoding="async" draggable="false" />
                </figure>
                <figure className="[overflow:hidden] [opacity:1] [z-index:90]" style={{ position: "absolute", left: "50%", top: "50%", width: "338px", height: "464.75px", margin: "-232.375px 0px 0px -169px", background: "rgba(14, 14, 14, 0.06)", transformOrigin: "50% 100%", transform: "translateX(-307.838px) translateY(10.6679px) scale(0.889452) rotate(-2.41195deg)" } as CSSProperties} data-site-import-responsive="1170">
                  <img className="object-cover" style={{ width: "100%", height: "100%", display: "block" }} src={fb2_pedicure} alt="Luxury pedicure" loading="lazy" decoding="async" draggable="false" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFrequentlyAskedQuestions() {
  const [openAnswer, setOpenAnswer] = useState<number | null>(0);
  return (
    <section className="framer-8ri3w items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0px]" aria-label="Frequently asked questions" id="faq">
      <div className="framer-7dtvtw items-start max-w-[1320px] [place-content:flex-start]">
        <div className="framer-19o4x5v items-start [place-content:flex-start]">
          <div className="framer-heu7jr items-start flex-none flex-col flex-nowrap gap-[24px] [place-content:flex-start]">
            <div className="ssr-variant">
              <div className="framer-1b4yeox-container flex-none will-change-transform [opacity:1] transform-none">
                <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:none] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", borderRadius: "2px" }}>
                  <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "2px" }}>
                    <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">10</p>
                    </div>
                  </div>
                  <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">FAQ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-1v38gzt items-start flex-none flex-col flex-nowrap gap-[20px] [place-content:flex-start]">
              <div className="framer-1enba3r wrap-break-word [word-break:break-word] transform-none" data-framer-component-type="RichTextContainer">
                <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} dir="auto"><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1186">Questions,</span> <span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1187" /><span className="framer-text" style={{ "--framer-text-color": "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" } as CSSProperties}><span className="[opacity:1] transform-none will-change-transform" style={{ display: "inline-block", filter: "blur(0px)" } as CSSProperties} data-site-import-responsive="1189">answered.</span></span></h2>
              </div>
              <div className="framer-1n2oanc max-w-[400px] wrap-break-word [word-break:break-word] will-change-transform [opacity:1] transform-none" data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} dir="auto">Cannot find what you are looking for? Call the salon and we will happily help.</p>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-jh2lj9-container flex-none will-change-transform [opacity:1] transform-none">
              <a className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-sovuw2 framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "2px" } as CSSProperties} data-border="true" href="tel:+910000000000" target="_blank">
                <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Call the salon</p>
                </div>
                <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                  <use {...({ href: "#1173457374" } as any)} />
                </svg>
                <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="framer-1r17oeh items-start [gap:0px] [place-content:flex-start] will-change-transform opacity-[0.983106] transform-none" data-border="true">
          <div className="ssr-variant">
            <div className="framer-16xnifk-container flex-none import-faq-row" style={{ height: "187.81px" }} data-open={openAnswer === 0} data-site-import-responsive="1200">
              <div className="framer-y5z2L framer-ME0Og framer-gdA2M framer-xclwdb framer-v-19holst items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1mv0tmy items-center flex-none flex-row flex-nowrap gap-[24px] content-center justify-start [opacity:1]" tabIndex={0}>
                  <div className="framer-v4ww98 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Are you a unisex salon?</h3>
                  </div>
                  <button className="framer-1k84uh2 items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", borderRadius: "100px" } as CSSProperties} aria-expanded={openAnswer === 0} onClick={() => setOpenAnswer(openAnswer === 0 ? null : 0)} aria-label="Show or hide answer" data-border="true" data-reset="button">
                    <svg className="framer-I69i9 framer-f9pmdp aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#650073895" } as any)} />
                    </svg>
                  </button>
                </div>
<div className="framer-1erysao"><div className="framer-5nynt4"><p className="framer-text framer-styles-preset-sazdse">Yes. Fabeau offers women's beauty and men's grooming under one roof, with separate price lists for each.</p></div></div>
                <div className="framer-nfq18s-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1qx1n6j-container flex-none import-faq-row" style={{ height: "100px" }} data-open={openAnswer === 1} data-site-import-responsive="1213">
              <div className="framer-y5z2L framer-ME0Og framer-gdA2M framer-xclwdb items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1mv0tmy items-center flex-none flex-row flex-nowrap gap-[24px] content-center justify-start [opacity:1]" tabIndex={0}>
                  <div className="framer-v4ww98 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">How do I book an appointment?</h3>
                  </div>
                  <button className="framer-1k84uh2 items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "100px" } as CSSProperties} aria-expanded={openAnswer === 1} onClick={() => setOpenAnswer(openAnswer === 1 ? null : 1)} aria-label="Show or hide answer" data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-f9pmdp aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
<div className="framer-1erysao"><div className="framer-5nynt4"><p className="framer-text framer-styles-preset-sazdse">Call the salon or book online. Pick your service and expert and we confirm within the hour.</p></div></div>
                <div className="framer-nfq18s-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-j901z3-container flex-none import-faq-row" style={{ height: "100px" }} data-open={openAnswer === 2}>
              <div className="framer-y5z2L framer-ME0Og framer-gdA2M framer-xclwdb items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1mv0tmy items-center flex-none flex-row flex-nowrap gap-[24px] content-center justify-start [opacity:1]" tabIndex={0}>
                  <div className="framer-v4ww98 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Do you take walk ins?</h3>
                  </div>
                  <button className="framer-1k84uh2 items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "100px" } as CSSProperties} aria-expanded={openAnswer === 2} onClick={() => setOpenAnswer(openAnswer === 2 ? null : 2)} aria-label="Show or hide answer" data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-f9pmdp aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
<div className="framer-1erysao"><div className="framer-5nynt4"><p className="framer-text framer-styles-preset-sazdse">Yes, depending on availability. Booking ahead is the best way to see your favourite expert.</p></div></div>
                <div className="framer-nfq18s-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1m9rspd-container flex-none import-faq-row" style={{ height: "100px" }} data-open={openAnswer === 3} data-site-import-responsive="1233">
              <div className="framer-y5z2L framer-ME0Og framer-gdA2M framer-xclwdb items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1mv0tmy items-center flex-none flex-row flex-nowrap gap-[24px] content-center justify-start [opacity:1]" tabIndex={0}>
                  <div className="framer-v4ww98 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Do you have combo packages?</h3>
                  </div>
                  <button className="framer-1k84uh2 items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "100px" } as CSSProperties} aria-expanded={openAnswer === 3} onClick={() => setOpenAnswer(openAnswer === 3 ? null : 3)} aria-label="Show or hide answer" data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-f9pmdp aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
<div className="framer-1erysao"><div className="framer-5nynt4"><p className="framer-text framer-styles-preset-sazdse">Yes. Men's Grooming Combo (haircut, beard trim, head massage) is ₹649 and Women's Beauty Combo (haircut, hair spa, eyebrow threading) is ₹1,299.</p></div></div>
                <div className="framer-nfq18s-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-wzs3x0-container flex-none import-faq-row" style={{ height: "100px" }} data-open={openAnswer === 4}>
              <div className="framer-y5z2L framer-ME0Og framer-gdA2M framer-xclwdb items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1mv0tmy items-center flex-none flex-row flex-nowrap gap-[24px] content-center justify-start [opacity:1]" tabIndex={0}>
                  <div className="framer-v4ww98 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Do you offer waxing and threading?</h3>
                  </div>
                  <button className="framer-1k84uh2 items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "100px" } as CSSProperties} aria-expanded={openAnswer === 4} onClick={() => setOpenAnswer(openAnswer === 4 ? null : 4)} aria-label="Show or hide answer" data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-f9pmdp aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
<div className="framer-1erysao"><div className="framer-5nynt4"><p className="framer-text framer-styles-preset-sazdse">Yes. Honey, roll-on and Brazilian wax, plus threading for eyebrows, lips, forehead, chin and full face, and bleach or tan removal.</p></div></div>
                <div className="framer-nfq18s-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1go6kc2-container flex-none import-faq-row" style={{ height: "100px" }} data-open={openAnswer === 5} data-site-import-responsive="1253">
              <div className="framer-y5z2L framer-ME0Og framer-gdA2M framer-xclwdb items-start flex-col flex-nowrap [gap:0px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-efee9b53-c9c9-4b82-bf9a-473cbc99e0f5)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", width: "100%" } as CSSProperties} data-border="true">
                <div className="framer-1mv0tmy items-center flex-none flex-row flex-nowrap gap-[24px] content-center justify-start [opacity:1]" tabIndex={0}>
                  <div className="framer-v4ww98 wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">What is your cancellation policy?</h3>
                  </div>
                  <button className="framer-1k84uh2 items-center flex-none flex-row flex-nowrap place-content-center [gap:0px] [opacity:1]" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderRadius: "100px" } as CSSProperties} aria-expanded={openAnswer === 5} onClick={() => setOpenAnswer(openAnswer === 5 ? null : 5)} aria-label="Show or hide answer" data-border="true" data-reset="button">
                    <svg className="framer-ohg0r framer-f9pmdp aspect-square flex-none [mask:var(--framer-icon-mask)] [opacity:1]" style={{ "--1m6trwb": "0", "--21h8s6": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", "--pgex8v": "1.5" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                      <use {...({ href: "#465907804" } as any)} />
                    </svg>
                  </button>
                </div>
<div className="framer-1erysao"><div className="framer-5nynt4"><p className="framer-text framer-styles-preset-sazdse">Please give us 24 hours notice to cancel or move your appointment, so we can offer the slot to someone else.</p></div></div>
                <div className="framer-nfq18s-container flex-none [z-index:1] [transform:translateX(-50%)] [opacity:1]">
                  <div style={{ position: "relative", pointerEvents: "none" }} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedDivBooking() {
  const [choiceOpen, setChoiceOpen] = useState<string | null>(null);
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");
  return (
    <div className="framer-w2p4xx-container flex-none" {...({ name: "Booking" } as any)}>
      <div className="ssr-variant">
        <section className="framer-WWB93 framer-lZ7pJ framer-gdA2M framer-ME0Og framer-JiJV2 framer-1rmv9gd items-center flex-col flex-nowrap content-center justify-start [gap:0px] [padding:140px_0px] [opacity:1]" style={{ backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565)", width: "100%" }} id="booking" aria-label="Book an appointment" {...({ name: "Booking" } as any)}>
          <div className="framer-fczuyz items-start flex-none flex-row flex-nowrap gap-[24px] max-w-[1320px] [place-content:flex-start] [opacity:1]">
            <div className="framer-2f1sys items-start self-stretch flex-[1_0_0px] flex-col flex-nowrap content-start justify-between will-change-transform [opacity:0] [transform:translateY(40px)]" style={{ backgroundColor: "var(--token-4f05f468-261f-4d3f-953e-417f2a2e2041)", borderRadius: "4px" }}>
              <div className="framer-yxxt3b items-start flex-none flex-col flex-nowrap gap-[24px] [place-content:flex-start] [opacity:1]">
                <div className="framer-yzrqgz-container flex-none [opacity:1]">
                  <div className="framer-qHphS framer-j4ZEW framer-14xovrv items-center flex-row flex-nowrap gap-[10px] content-center justify-start [backdrop-filter:blur(12px)] [opacity:1]" style={{ backgroundColor: "var(--token-a48a902b-b7a4-442c-a201-1ee165dc5e98)", borderRadius: "2px" }}>
                    <div className="framer-1mem27u items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0px] [opacity:1]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" }}>
                      <div className="framer-1ywkamd transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">11</p>
                      </div>
                    </div>
                    <div className="framer-1t8uwbf transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Booking</p>
                    </div>
                  </div>
                </div>
                <div className="framer-14pjym4 items-start flex-none flex-col flex-nowrap gap-[20px] [place-content:flex-start] [opacity:1]">
                  <div className="framer-tgdgjq wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-1of0zx5": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--extracted-1qn201a": "var(--token-741cae64-f534-4240-a634-bfdfc0e8d17d)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Book your <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1qn201a, var(--token-741cae64-f534-4240-a634-bfdfc0e8d17d))" } as CSSProperties}>chair.</span></h2>
                  </div>
                  <div className="framer-13td0e1 max-w-[400px] wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Send a request and we will confirm your time within the hour. Prefer to talk? Call the salon.</p>
                  </div>
                </div>
              </div>
              <div className="framer-a6nqbp flex-none grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-[repeat(1,min-content)] justify-center [gap:28px_24px] [grid-auto-rows:min-content] [opacity:1]">
                <div className="framer-vgtbv-container flex-none [place-self:start] [opacity:1]">
                  <div className="framer-6Q8PS framer-j4ZEW framer-gdA2M framer-efi3hp items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-1wpplpt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Visit us</p>
                    </div>
                    <div className="framer-10016nm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
                <div className="framer-539bck-container flex-none [place-self:start] [opacity:1]">
                  <div className="framer-6Q8PS framer-j4ZEW framer-gdA2M framer-efi3hp items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-1wpplpt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Opening hours</p>
                    </div>
                    <div className="framer-10016nm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Tue to Sun, 9 am to 8 pm</p>
                    </div>
                  </div>
                </div>
                <div className="framer-38w881-container flex-none [place-self:start] [opacity:1]">
                  <div className="framer-6Q8PS framer-j4ZEW framer-gdA2M framer-efi3hp items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-1wpplpt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Call</p>
                    </div>
                    <div className="framer-10016nm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">+91 00000 00000</p>
                    </div>
                  </div>
                </div>
                <div className="framer-kpqfb7-container flex-none [place-self:start] [opacity:1]">
                  <div className="framer-6Q8PS framer-j4ZEW framer-gdA2M framer-efi3hp items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]" style={{ width: "100%" }}>
                    <div className="framer-1wpplpt wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Email</p>
                    </div>
                    <div className="framer-10016nm wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-sazdse" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">hello@fabeau.in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-1p3ykxj-container flex-none [opacity:1]">
                <a className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-7wbj0k framer-1x46096 [backdrop-filter:none] [opacity:1]" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px" } as CSSProperties} href="tel:+910000000000" target="_blank">
                  <div className="framer-dhr7ap transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Call the salon</p>
                  </div>
                  <svg className="framer-EcgqK framer-17gg11h transform-none [opacity:1]" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
                    <use {...({ href: "#1173457374" } as any)} />
                  </svg>
                  <div className="framer-zk1yxt [opacity:1]" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)" }} />
                </a>
              </div>
            </div>
            <div className="framer-14pyf58 items-start flex-[1_0_0px] flex-col flex-nowrap gap-[32px] [place-content:flex-start] will-change-transform [opacity:0] [transform:translateY(40px)]" style={{ backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "4px" }}>
              <div className="framer-15z9kc6 items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start] [opacity:1]">
                <div className="framer-bgr1ky wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-a0htzi": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-1ivnrcx" style={{ "--framer-text-color": "var(--extracted-a0htzi, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Request an appointment</h3>
                </div>
                <div className="framer-4hq1eb wrap-break-word [word-break:break-word] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8))" } as CSSProperties} dir="auto">Fields marked with a star are required.</p>
                </div>
              </div>
              <form onSubmit={(event) => event.preventDefault()} className="framer-kx0nbf flex-none grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-[repeat(1,min-content)] justify-center [gap:20px_16px] [grid-auto-rows:min-content] [padding:0px] [opacity:1]" method="post">
                <div className="framer-ujn3g5-container flex-none self-center justify-self-center [opacity:1]">
                  <div className="flex-col items-stretch [gap:8px]" style={{ display: "flex", width: "100%" }}>
                    <label className="[line-height:1.2em] [color:var(--token-a93021d8-222c-4480-9ae5-459bd0824621,_rgb(48,_44,_40))] [flex-shrink:0]" style={{ fontSize: "12px", fontWeight: "500", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal" }} htmlFor="field-name">Name<span className="ml-[2px]" style={{ color: "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1, rgb(143, 106, 28))" }}> *</span></label>
                    <div className="[flex:1_1_0%] [min-width:0px]" style={{ width: "100%" }}>
                      <div className="[box-shadow:none] [opacity:1] min-h-[44px] [overflow:hidden] items-center [gap:8px] will-change-transform transform-none" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", borderRadius: "2px", backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", padding: "12px 15px 12px 12px", display: "flex" } as CSSProperties}>
                        <input className="fp-text-input-control__input [line-height:1.2] [opacity:1] [outline:none] [flex:1_1_0%] [min-width:0px] box-border [padding:0px] [margin:0px]" style={{ fontSize: "14px", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "400", color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621, rgb(0, 33, 16))", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", width: "100%", backgroundColor: "transparent" } as CSSProperties} id="field-name" name="name" type="text" placeholder="Your full name" required autoComplete="name" defaultValue="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-188y9qk-container flex-none self-center justify-self-center [opacity:1]">
                  <div className="flex-col items-stretch [gap:8px]" style={{ display: "flex", width: "100%" }}>
                    <label className="[line-height:1.2em] [color:var(--token-a93021d8-222c-4480-9ae5-459bd0824621,_rgb(48,_44,_40))] [flex-shrink:0]" style={{ fontSize: "12px", fontWeight: "500", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal" }} htmlFor="field-phone">Phone<span className="ml-[2px]" style={{ color: "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1, rgb(143, 106, 28))" }}> *</span></label>
                    <div className="[flex:1_1_0%] [min-width:0px]" style={{ width: "100%" }}>
                      <div className="[box-shadow:none] [opacity:1] min-h-[44px] [overflow:hidden] items-center [gap:8px] will-change-transform transform-none" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", borderRadius: "2px", backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", padding: "12px 15px 12px 12px", display: "flex" } as CSSProperties}>
                        <input className="fp-text-input-control__input [line-height:1.2] [opacity:1] [outline:none] [flex:1_1_0%] [min-width:0px] box-border [padding:0px] [margin:0px]" style={{ fontSize: "14px", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "400", color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621, rgb(0, 33, 16))", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", width: "100%", backgroundColor: "transparent" } as CSSProperties} id="field-phone" name="phone" type="text" placeholder="Your phone number" required autoComplete="tel" defaultValue="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1p88qoq-container flex-none self-center justify-self-center [opacity:1]">
                  <div className="flex-col items-stretch [gap:8px] [opacity:1]" style={{ display: "flex", width: "100%" }}>
                    <label className="[line-height:1.2em] [color:var(--token-a93021d8-222c-4480-9ae5-459bd0824621,_rgb(48,_44,_40))] [flex-shrink:0]" style={{ fontSize: "12px", fontWeight: "500", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal" }} htmlFor="field-email">Email<span className="ml-[2px]" style={{ color: "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1, rgb(143, 106, 28))" }}> *</span></label>
                    <div className="[flex:1_1_0%] [min-width:0px]" style={{ width: "100%" }}>
                      <div className="[opacity:1] min-h-[44px] [overflow:hidden] items-center [gap:8px] will-change-transform transform-none" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", borderRadius: "2px", backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", padding: "12px 15px 12px 12px", display: "flex" } as CSSProperties}>
                        <input className="fp-email-input-control__input [line-height:1.2] [opacity:1] [outline:none] [flex:1_1_0%] [min-width:0px] box-border [padding:0px] [margin:0px]" style={{ fontSize: "14px", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "400", color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621, rgb(0, 33, 16))", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", width: "100%", backgroundColor: "transparent" } as CSSProperties} id="field-email" name="email" type="email" placeholder="you@email.com" required autoComplete="email" defaultValue="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1tnal4n-container flex-none self-center justify-self-center [opacity:1]">
                  <div className="flex-col items-stretch [gap:8px]" style={{ display: "flex", width: "100%" }}>
                    <label className="[line-height:1.2em] [color:var(--token-a93021d8-222c-4480-9ae5-459bd0824621,_rgb(48,_44,_40))] [flex-shrink:0]" style={{ fontSize: "12px", fontWeight: "500", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal" }} htmlFor="field-preferred-date">Preferred date</label>
                    <div className="[flex:1_1_0%] [min-width:0px]" style={{ width: "100%" }}>
                      <div className="[opacity:1] min-h-[44px] [overflow:hidden] items-center [gap:8px] will-change-transform transform-none" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", borderRadius: "2px", backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", padding: "12px 15px 12px 12px", display: "flex" } as CSSProperties}>
                        <input className="fp-date-input-control__input [line-height:1.2] [outline:none] [flex:1_1_0%] [min-width:0px] box-border [padding:0px] [margin:0px]" style={{ fontSize: "14px", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "400", color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621, rgb(0, 33, 16))", opacity: "1", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", width: "100%", backgroundColor: "transparent", position: "relative" } as CSSProperties} id="field-preferred-date" name="preferred-date" type="date" defaultValue="" />
                        <div className="[flex-shrink:0]" style={{ width: "16px", height: "16px", pointerEvents: "none", backgroundColor: "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8, rgb(77, 95, 84))", maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E\")", maskRepeat: "no-repeat", maskSize: "contain" } as CSSProperties} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-zniy27-container flex-none self-center justify-self-center [opacity:1]">
                  <div className="flex-col items-stretch [gap:8px]" style={{ display: "flex", width: "100%" }}>
                    <label className="[line-height:1.2em] [color:var(--token-a93021d8-222c-4480-9ae5-459bd0824621,_rgb(48,_44,_40))] [flex-shrink:0]" style={{ fontSize: "12px", fontWeight: "500", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal" }} htmlFor="field-service">Service<span className="ml-[2px]" style={{ color: "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1, rgb(143, 106, 28))" }}> *</span></label>
                    <div className="[flex:1_1_0%] [min-width:0px]" style={{ position: "relative", width: "100%" }}>
                      <div style={{ position: "relative" }}>
                        <button className="[padding:12px_15px_12px_12px] [box-shadow:none] min-h-[50px] items-center justify-between [gap:8px] [opacity:1] [outline:none] box-border [transition:border-color_0.2s,_box-shadow_0.2s]" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", borderRadius: "2px", backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", width: "100%", display: "flex", cursor: "pointer", textAlign: "left" } as CSSProperties} id="field-service" type="button" aria-haspopup="listbox" aria-expanded={choiceOpen === "service"} onClick={() => setChoiceOpen(choiceOpen === "service" ? null : "service")} onKeyDown={(event) => { if (event.key === "Escape") setChoiceOpen(null); }}>
                          <span className="[flex:1_1_0%] [overflow:hidden] text-ellipsis" style={{ fontSize: "14px", lineHeight: "1.2", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "400", color: "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8, rgb(77, 95, 84))", whiteSpace: "nowrap" }}>{service || "Choose a service"}</span>
                          <svg className="[flex-shrink:0] [transition:transform_0.2s] [transform:rotate(0deg)]" style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" fill="none" stroke="var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8, rgb(77, 95, 84))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        {choiceOpen === "service" && <div role="listbox" className="import-choice-panel">{["Cut and style", "Skin fade", "Colour", "Balayage", "Beard and shave", "Treatment"].map(option => <button key={option} type="button" role="option" aria-selected={service === option} onClick={() => { setService(option); setChoiceOpen(null); }} onKeyDown={(event) => { if (event.key === "Escape") setChoiceOpen(null); }}>{option}</button>)}</div>}
<input className="[opacity:0] [padding:0px] [margin:0px] [outline:none] appearance-none [overflow:hidden] [clip:rect(0px,_0px,_0px,_0px)]" style={{ position: "absolute", width: "0px", height: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", pointerEvents: "none" } as CSSProperties} type="text" name="service" required readOnly tabIndex={-1} aria-hidden="true" value={service} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1avsssq-container flex-none self-center justify-self-center [opacity:1]">
                  <div className="flex-col items-stretch [gap:8px]" style={{ display: "flex", width: "100%" }}>
                    <label className="[line-height:1.2em] [color:var(--token-a93021d8-222c-4480-9ae5-459bd0824621,_rgb(48,_44,_40))] [flex-shrink:0]" style={{ fontSize: "12px", fontWeight: "500", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal" }} htmlFor="field-stylist">Preferred expert</label>
                    <div className="[flex:1_1_0%] [min-width:0px]" style={{ position: "relative", width: "100%" }}>
                      <div style={{ position: "relative" }}>
                        <button className="[padding:12px_15px_12px_12px] [box-shadow:none] min-h-[50px] items-center justify-between [gap:8px] [opacity:1] [outline:none] box-border [transition:border-color_0.2s,_box-shadow_0.2s]" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", borderRadius: "2px", backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", width: "100%", display: "flex", cursor: "pointer", textAlign: "left" } as CSSProperties} id="field-stylist" type="button" aria-haspopup="listbox" aria-expanded={choiceOpen === "stylist"} onClick={() => setChoiceOpen(choiceOpen === "stylist" ? null : "stylist")} onKeyDown={(event) => { if (event.key === "Escape") setChoiceOpen(null); }}>
                          <span className="[flex:1_1_0%] [overflow:hidden] text-ellipsis" style={{ fontSize: "14px", lineHeight: "1.2", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "400", color: "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8, rgb(77, 95, 84))", whiteSpace: "nowrap" }}>{stylist || "No preference"}</span>
                          <svg className="[flex-shrink:0] [transition:transform_0.2s] [transform:rotate(0deg)]" style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" fill="none" stroke="var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8, rgb(77, 95, 84))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        {choiceOpen === "stylist" && <div role="listbox" className="import-choice-panel">{["No preference", "Divya", "Arjun", "Meera", "Kavya"].map(option => <button key={option} type="button" role="option" aria-selected={stylist === option} onClick={() => { setStylist(option); setChoiceOpen(null); }} onKeyDown={(event) => { if (event.key === "Escape") setChoiceOpen(null); }}>{option}</button>)}</div>}
<input className="[opacity:0] [padding:0px] [margin:0px] [outline:none] appearance-none [overflow:hidden] [clip:rect(0px,_0px,_0px,_0px)]" style={{ position: "absolute", width: "0px", height: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", pointerEvents: "none" } as CSSProperties} type="text" name="stylist" readOnly tabIndex={-1} aria-hidden="true" value={stylist} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-h4u63-container flex-none self-center justify-self-center [grid-column:1/-1] [opacity:1]">
                  <div className="flex-col items-stretch [gap:8px] [opacity:1]" style={{ display: "flex", width: "100%" }}>
                    <label className="[line-height:1.2em] [color:var(--token-a93021d8-222c-4480-9ae5-459bd0824621,_rgb(48,_44,_40))] [flex-shrink:0]" style={{ fontSize: "12px", fontWeight: "500", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal" }} htmlFor="field-message">Anything we should know?</label>
                    <div className="[flex:1_1_0%] [min-width:0px]" style={{ width: "100%" }}>
                      <div className="[box-shadow:none] [opacity:1] will-change-transform transform-none" style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", borderRadius: "2px", backgroundColor: "var(--token-bb657d79-106c-4c74-b3bc-10d3806a1565, rgb(227, 214, 173))", padding: "12px 15px 12px 12px" } as CSSProperties}>
                        <textarea className="fp-textarea-control__textarea [line-height:1.4] [opacity:1] [outline:none] box-border [padding:0px] [margin:0px] resize-none min-h-[60px]" style={{ fontSize: "14px", fontFamily: "Inter, \"Inter Placeholder\", sans-serif", fontStyle: "normal", fontWeight: "400", color: "var(--token-a93021d8-222c-4480-9ae5-459bd0824621, rgb(0, 33, 16))", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", width: "100%", backgroundColor: "transparent" } as CSSProperties} id="field-message" name="message" placeholder="Hair type, the look you want, or questions" rows={4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-7evug5-container flex-none [grid-column:1/-1] [place-self:start] [opacity:1]">
                  <button className="framer-1SXSG framer-pAxg8 framer-1rs62yr items-center flex-row flex-nowrap gap-[10px] place-content-center [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]" style={{ backgroundColor: "var(--token-a3dbaa52-4f23-4f38-9e39-7e97add4edb8)", width: "100%", borderRadius: "2px" }} type="submit" data-reset="button">
                    <div className="framer-nhguxq [z-index:1] transform-none [opacity:1]" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)" } as CSSProperties} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Please fill in the required fields</p>
                    </div>
                    <div className="framer-d7cxe5 flex-none [overflow:var(--overflow-clip-fallback,clip)] [z-index:0] [opacity:1]" style={{ backgroundColor: "var(--token-ac5130b5-e726-48ad-8d51-69337ee4d4e1)" }} />
                  </button>
                </div>
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="message" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="subject" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="title" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="description" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="feedback" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="notes" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="details" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="remarks" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
                <input className="[transform:scale(0)]" style={{ position: "absolute" }} type="text" name="comments" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" defaultValue="" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ImportedDivContainer() {
  return (
    <div className="framer-ee3glb" style={{ opacity: "1" }}>
      <div className="framer-3n0wx1" style={{ opacity: "1" }}>
        <div className="framer-9vx4xe" style={{ "--extracted-1of0zx5": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", "--extracted-1qn201a": "var(--token-741cae64-f534-4240-a634-bfdfc0e8d17d)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <h2 className="framer-text framer-styles-preset-7zb1p" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Ready for your <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1qn201a, var(--token-741cae64-f534-4240-a634-bfdfc0e8d17d))" } as CSSProperties}>glow up?</span></h2>
        </div>
        <div className="framer-14kmaf7-container" style={{ opacity: "1" }}>
          <Link className="framer-FvcWE framer-pAxg8 framer-q93yu8 framer-v-7wbj0k framer-1x46096" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(0, 0, 0, 0)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px", backdropFilter: "none", backgroundColor: "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", borderRadius: "2px", opacity: "1" } as CSSProperties} to="/contact">
            <div className="framer-dhr7ap" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">Book an appointment</p>
            </div>
            <svg className="framer-EcgqK framer-17gg11h" style={{ "--1335ju": "1.5", "--18mrqx2": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} role="presentation" viewBox="0 0 24 24">
              <use {...({ href: "#1173457374" } as any)} />
            </svg>
            <div className="framer-zk1yxt" style={{ backgroundColor: "var(--token-df7ae08d-fa9c-42ae-96e8-7aae00be3709)", opacity: "1" }} />
          </Link>
        </div>
      </div>
      <div className="framer-1m9j26q" style={{ backgroundColor: "var(--token-5d37f567-19dd-4b58-ac57-b69f0910214f)", opacity: "1" }} />
      <div className="framer-c1maac" style={{ opacity: "1" }}>
        <div className="framer-11slmjx" style={{ opacity: "1" }}>
          <div className="framer-mv1esi-container" style={{ opacity: "1" }} {...({ name: "Logo" } as any)}>
            <a className="framer-7mWQI framer-adxa4z framer-jtzoau" style={{ height: "100%", width: "100%", opacity: "1" }} href="/#hero" {...({ name: "Logo" } as any)}>
              <div className="framer-1cbl9j4" style={{ opacity: "1" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
                  <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "contain" } as CSSProperties} decoding="auto" width="2200" height="374" src={fbLogo.url} alt="Fabeau" />
                </div>
              </div>
            </a>
          </div>
          <div className="framer-1ya5sx3" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-16u458q" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Fabeau, a luxury unisex salon in Coimbatore. Fashion with beauty.</p>
          </div>
        </div>
        <nav className="framer-9mkj6l" style={{ opacity: "1" }} aria-label="Footer navigation">
          <div className="framer-16s0cz6" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Explore</p>
          </div>
          <div className="framer-kzwjq4" style={{ opacity: "1" }}>
            <div className="framer-1u98b20-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/about">About</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1pupaf-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/studio">Studio</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-b7s9us-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/services">Services</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-hjfk6o-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/stylists">Stylists</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-djer9y-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <a className="framer-text framer-styles-preset-16ebbdz" href="/#reviews">Reviews</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-nhdems-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <a className="framer-text framer-styles-preset-16ebbdz" href="/#faq">FAQ</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-176cm1q-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <Link className="framer-text framer-styles-preset-16ebbdz" to="/contact">Contact</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="framer-15n8ibv" style={{ opacity: "1" }}>
          <div className="framer-os0ckq" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Visit</p>
          </div>
          <div className="framer-elvxz2" style={{ opacity: "1" }}>
            <div className="framer-1fd37hn" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-1i9yw26" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">
                <a className="framer-text" href={"https://www.google.com/maps/search/?api=1&query=214+Wythe+Ave+Brooklyn+NY+11249"} rel="" target="_blank">Coimbatore, Tamil Nadu, India</a>
              </p>
            </div>
            <div className="framer-15kropw" style={{ "--extracted-r6o4lv": "var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-1i9yw26" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-04d39632-0a3e-417e-aeea-79188d27b5a6))" } as CSSProperties} dir="auto">Tue to Sun, 9 am to 8 pm</p>
            </div>
          </div>
        </div>
        <div className="framer-1j1kec6" style={{ opacity: "1" }}>
          <div className="framer-1u2grty" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
            <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Contact</p>
          </div>
          <div className="framer-6c3qns" style={{ opacity: "1" }}>
            <div className="framer-1irfhnu-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <a className="framer-text framer-styles-preset-16ebbdz" href="tel:+910000000000" rel="" target="_blank">+91 00000 00000</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-g2f0h6-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <a className="framer-text framer-styles-preset-16ebbdz" href="mailto:hello@fabeau.in" rel="" target="_blank">hello@fabeau.in</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-5vvjlq-container" style={{ opacity: "1" }}>
              <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
                <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                    <a className="framer-text framer-styles-preset-16ebbdz" href="https://www.instagram.com/" rel="" target="_blank">Instagram</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-1p8vzsl" style={{ mask: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 84.0517%)", opacity: "1" } as CSSProperties}>
        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", inset: "0px" } as CSSProperties}>
          <img style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center center", objectFit: "contain" } as CSSProperties} decoding="auto" width="2200" height="374" src={fbLogo.url} alt="" />
        </div>
      </div>
      <div className="framer-1gz6c0k" style={{ "--border-bottom-width": "0px", "--border-color": "var(--token-5d37f567-19dd-4b58-ac57-b69f0910214f)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", opacity: "1" } as CSSProperties} data-border="true">
        <div className="framer-dv1fs8" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">© 2026 Fabeau Luxury Unisex Salon. All rights reserved.</p>
        </div>
        <nav className="framer-tkh19w" style={{ opacity: "1" }} aria-label="Legal">
          <div className="framer-6bkyxp-container" style={{ opacity: "1" }}>
            <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
              <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                  <a className="framer-text framer-styles-preset-16ebbdz" href="/privacy">Privacy</a>
                </p>
              </div>
            </div>
          </div>
          <div className="framer-q9pcw0-container" style={{ opacity: "1" }}>
            <div className="framer-UA3GD framer-pAxg8 framer-6bMAC framer-qcreh7" style={{ opacity: "1" }}>
              <div className="framer-epbbij" style={{ "--extracted-r6o4lv": "var(--token-a93021d8-222c-4480-9ae5-459bd0824621)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
                <p className="framer-text framer-styles-preset-krd2eu" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-a93021d8-222c-4480-9ae5-459bd0824621))" } as CSSProperties} dir="auto">
                  <a className="framer-text framer-styles-preset-16ebbdz" href="/terms">Terms</a>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="framer-1vxn6d2" style={{ "--extracted-r6o4lv": "var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2)", transform: "none", opacity: "1" } as CSSProperties} data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-a4lqi5" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-68079b37-4ddc-405c-9f77-bde8ec47bab2))" } as CSSProperties} dir="auto">Luxury unisex salon in Coimbatore</p>
        </div>
      </div>
    </div>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
