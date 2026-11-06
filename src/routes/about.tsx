import { createFileRoute } from "@tanstack/react-router";
import { ImportedContentPage } from "./index";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Fabeau | Fabeau Coimbatore" },
    { name: "description", content: "Fabeau luxury unisex salon in Coimbatore. Premium care, skilled professionals and a luxury experience." },
    { property: "og:title", content: "About Fabeau | Fabeau Coimbatore" },
    { property: "og:description", content: "Fabeau luxury unisex salon in Coimbatore. Premium care, skilled professionals and a luxury experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

function Page() { return <ImportedContentPage page="about" />; }
