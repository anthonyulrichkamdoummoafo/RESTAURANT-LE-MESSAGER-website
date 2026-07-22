import type { MetadataRoute } from "next";
import { RESTAURANT } from "@/lib/data/restaurant-info";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/menu",
    "/about",
    "/gallery",
    "/reservation",
    "/contact",
    "/events",
  ];

  return routes.map((route) => ({
    url: `${RESTAURANT.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
