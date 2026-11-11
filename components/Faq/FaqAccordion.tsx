"use client";

import { useState } from "react";
import { Accordion } from "@base-ui/react/accordion";
import { MotionConfig, motion } from "motion/react";
import { Plus } from "lucide-react";

type Faq = { q: string; a: string };

// One timing for everything that moves, so the highlight, the icon and the
// answer's height stay perfectly in step (and opening mirrors closing).
const timing = "duration-350 ease-in-out motion-reduce:transition-none";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  // One item open at a time; the first starts open
  const [value, setValue] = useState<string[]>([faqs[0]?.q]);

  return (
    <MotionConfig reducedMotion="user">
      <Accordion.Root value={value} onValueChange={(next) => setValue(next as string[])} className="space-y-2">
        {faqs.map((faq) => {
          const open = value.includes(faq.q);

          return (
            <Accordion.Item key={faq.q} value={faq.q} className="relative rounded-2xl">
              {/* Highlight: belongs to its own question and fades with the answer */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 rounded-2xl bg-mist transition-opacity ${timing} ${
                  open ? "opacity-100" : "opacity-0"
                }`}
              />

              <Accordion.Header className="relative">
                <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left font-display text-lg font-medium text-ink outline-none focus-visible:ring-2 focus-visible:ring-pine-400">
                  {faq.q}
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full transition-[background-color,color,rotate] ${timing} ${
                      open ? "rotate-45 bg-lime text-pine-900" : "bg-pine-50 text-pine-700 group-hover:bg-lime-soft"
                    }`}
                  >
                    <Plus className="size-4" strokeWidth={2.5} />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              {/* Height animates with Base UI's --accordion-panel-height */}
              <Accordion.Panel
                className={`relative h-(--accordion-panel-height) overflow-hidden transition-[height] ${timing} data-ending-style:h-0 data-starting-style:h-0`}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  className="max-w-2xl px-6 pb-6 leading-relaxed text-ink-soft"
                >
                  {faq.a}
                </motion.p>
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </MotionConfig>
  );
}
