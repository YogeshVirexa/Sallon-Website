import { createFileRoute } from "@tanstack/react-router";
import { ImportedContentPage } from "./index";
import cover from "@/assets/fabeau-real-service.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact & Appointments | Fabeau Coimbatore" },
    { name: "description", content: "Plan your visit to Fabeau luxury unisex salon in Coimbatore." },
    { property: "og:title", content: "Contact & Appointments | Fabeau Coimbatore" },
    { property: "og:description", content: "Plan your visit to Fabeau luxury unisex salon in Coimbatore." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: cover },
    { name: "twitter:image", content: cover },
  ] }),
  component: Page,
});

function Page() { return <ImportedContentPage page="contact" />; }
