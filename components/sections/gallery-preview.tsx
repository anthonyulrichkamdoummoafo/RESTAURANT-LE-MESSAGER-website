"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { GALLERY_IMAGES } from "@/lib/data/gallery";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/utils";

export function GalleryPreview() {
  const { dict, locale } = useLocale();
  const images = GALLERY_IMAGES.slice(0, 5);

  return (
    <section className="section-pad bg-[rgb(var(--surface))]">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="kicker-divider" />
            {dict.home.galleryEyebrow}
            <span className="kicker-divider" />
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            {dict.home.galleryTitle}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          {images.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.06}
              className={
                i === 0
                  ? "col-span-2 row-span-2"
                  : i === 3
                  ? "col-span-2 md:col-span-1"
                  : ""
              }
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full min-h-[140px] overflow-hidden rounded-2xl shadow-soft"
              >
                <Media id={img.id} category={img.category} photo={img.photo} label={t(img.alt, locale)} />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              {dict.home.galleryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
