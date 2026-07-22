"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import { FAQ_ITEMS } from "@/lib/data/content";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { t } from "@/lib/utils";

export function FaqAccordion() {
  const { dict, locale } = useLocale();

  return (
    <Reveal>
      <h3 className="font-display text-2xl font-semibold mb-2">{dict.contact.faqTitle}</h3>
      <Accordion type="single" collapsible className="mt-4">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{t(item.question, locale)}</AccordionTrigger>
            <AccordionContent>{t(item.answer, locale)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
