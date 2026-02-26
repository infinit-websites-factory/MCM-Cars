import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CalendarCheck, ShieldCheck, Clock, SearchCheck, ArrowLeftRight } from "lucide-react";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.questions.reserve.question'),
      answer: t('faq.questions.reserve.answer'),
      icon: CalendarCheck,
    },
    {
      question: t('faq.questions.warranty.question'),
      answer: t('faq.questions.warranty.answer'),
      icon: ShieldCheck,
    },
    {
      question: t('faq.questions.schedule.question'),
      answer: t('faq.questions.schedule.answer'),
      icon: Clock,
    },
    {
      question: t('faq.questions.quality.question'),
      answer: t('faq.questions.quality.answer'),
      icon: SearchCheck,
    },
    {
      question: t('faq.questions.trade_in.question'),
      answer: t('faq.questions.trade_in.answer'),
      icon: ArrowLeftRight,
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#111]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-white/50">
            {t('faq.subtitle')}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/[0.03] backdrop-blur-sm data-[state=open]:border-white/20 data-[state=open]:bg-white/[0.06] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-white hover:no-underline hover:text-white/80 gap-4 py-5">
                  <span className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Icon size={20} className="text-white/70" />
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pt-0 pb-5 pl-14 leading-relaxed text-[15px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
