import { createFileRoute } from "@tanstack/react-router";
import { ImportedContentPage } from "./index";
import cover from "@/assets/fabeau-real-studio.jpg";

export const Route = createFileRoute("/studio")({
  head: () => ({ meta: [
    { title: "Our Studio | Fabeau Coimbatore" },
    { name: "description", content: "Discover the Fabeau salon experience in Coimbatore: premium care in a calm, hygienic space." },
    { property: "og:title", content: "Our Studio | Fabeau Coimbatore" },
    { property: "og:description", content: "Discover the Fabeau salon experience in Coimbatore: premium care in a calm, hygienic space." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: cover },
    { name: "twitter:image", content: cover },
  ] }),
  component: Page,
});

function Page() { return <ImportedContentPage page="studio" />; }
