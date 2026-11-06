import { createFileRoute } from "@tanstack/react-router";
import { ImportedContentPage } from "./index";
import cover from "@/assets/fabeau-real-hair.jpg";

export const Route = createFileRoute("/stylists")({
  head: () => ({ meta: [
    { title: "Our Stylists | Fabeau Coimbatore" },
    { name: "description", content: "Meet the team behind hair, grooming and beauty care at Fabeau salon in Coimbatore." },
    { property: "og:title", content: "Our Stylists | Fabeau Coimbatore" },
    { property: "og:description", content: "Meet the team behind hair, grooming and beauty care at Fabeau salon in Coimbatore." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: cover },
    { name: "twitter:image", content: cover },
  ] }),
  component: Page,
});

function Page() { return <ImportedContentPage page="stylists" />; }
