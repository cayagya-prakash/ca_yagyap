import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What services does your firm offer?", a: "We offer income tax, GST, audit, accounting, and business registration services." },
  { q: "How can I schedule a consultation?", a: "You can contact us via phone, email, or the contact form on this website." },
  { q: "What documents do I need for ITR filing?", a: "Typically PAN, Aadhaar, Form 16, bank statements, and investment proofs." },
  { q: "Do you handle tax notices?", a: "Yes, we assist with responding to tax notices and representation before authorities." },
  { q: "What are your office hours?", a: "Monday to Saturday, 10:00 AM to 7:00 PM." },
  { q: "Do you offer virtual consultations?", a: "Yes, we offer consultations via phone and video call for client convenience." },
];

export default function FAQs() {
  return (
    <Layout>
      <PageHeader title="FAQs" description="Answers to commonly asked questions." breadcrumbs={[{ label: "FAQs" }]} />
      <section className="section-padding">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
}
