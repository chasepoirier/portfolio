import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What's included in the 2-week MVP service?",
    answer:
      "You'll receive a fully functional MVP, including core features, custom design, user authentication, and third-party integrations. We also handle deployment and provide documentation.",
  },
  {
    question: "Can I customize the features of my MVP?",
    answer:
      "Yes, you can request specific features during the planning phase. Our team will work with you to ensure the MVP meets your needs and goals.",
  },
  {
    question: "How do you ensure the MVP is delivered in 2 weeks?",
    answer:
      "We use a streamlined, agile process with dedicated developers, ensuring rapid development and iteration without sacrificing quality.",
  },
  {
    question: "What happens after the MVP is launched?",
    answer:
      "We provide post-launch support, including bug fixes, minor adjustments, and guidance on scaling and next steps for your product.",
  },
  {
    question: "Do I need technical knowledge to use this service?",
    answer:
      "No, we handle the technical aspects for you. Our service is designed for founders of all backgrounds, including non-technical entrepreneurs.",
  },
  {
    question: "Can I request changes after the MVP is delivered?",
    answer:
      "Yes, we offer ongoing development options for additional features or adjustments after the MVP is launched.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-screen-xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 ">
        <div className="mx-auto max-w-4xl divide-y divide-white/5">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Frequently asked questions
          </h2>

          <Accordion type="single">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-white font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
