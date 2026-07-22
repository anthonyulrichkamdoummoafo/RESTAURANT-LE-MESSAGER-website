import type { MetadataRoute } from "next";
import { RESTAURANT } from "@/lib/data/restaurant-info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api"] }],
    sitemap: `${RESTAURANT.siteUrl}/sitemap.xml`,
  };
}
