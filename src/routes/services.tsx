import { createFileRoute } from "@tanstack/react-router";
import { ImportedContentPage } from "./index";
import cover from "@/assets/fabeau-real-styling.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services & Prices | Fabeau Coimbatore" },
    { name: "description", content: "Explore hair, grooming and beauty services at Fabeau luxury unisex salon in Coimbatore." },
    { property: "og:title", content: "Services & Prices | Fabeau Coimbatore" },
    { property: "og:description", content: "Explore hair, grooming and beauty services at Fabeau luxury unisex salon in Coimbatore." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: cover },
    { name: "twitter:image", content: cover },
  ] }),
  component: Page,
});

function Page() { return <ImportedContentPage page="services" />; }
