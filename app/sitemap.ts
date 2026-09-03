import type { MetadataRoute } from "next";

const routes = [
  "",
  "/quantum-bed-info",
  "/quantum-health",
  "/wellness-pod-products",
  "/wellness-pod-recliner",
  "/businesses",
  "/retail",
  "/financing",
  "/ebook",
  "/faq",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/california-consumer-privacy-act-ccpa",
  "/cookie-privacy-policy",
  "/dmca",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `https://www.quantumenergybeds.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }));
}
