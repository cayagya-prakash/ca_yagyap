import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Bookkeeping",
    description: "Recording of day-to-day financial transactions accurately and systematically.",
  },
  {
    title: "Financial Statements",
    description: "Preparation of balance sheet, profit & loss account, and cash flow statement.",
  },
  {
    title: "MIS Reporting",
    description: "Management information system reports for informed decision-making.",
  },
  {
    title: "Payroll Processing",
    description: "Salary computation, TDS deduction, and statutory compliance.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Data Collection",
    description: "Gathering source documents and transaction details.",
  },
  {
    step: "02",
    title: "Recording",
    description: "Systematic recording of transactions in accounting software.",
  },
  {
    step: "03",
    title: "Reconciliation",
    description: "Bank reconciliation and ledger verification.",
  },
  {
    step: "04",
    title: "Reporting",
    description: "Preparation of financial statements and MIS reports.",
  },
];

const faqs = [
  {
    question: "What accounting software do you work with?",
    answer: "We work with various accounting software including Tally, Zoho Books, QuickBooks, and other cloud-based solutions. We can adapt to your existing system or recommend suitable software based on your business needs.",
  },
  {
    question: "How frequently should books be updated?",
    answer: "We recommend monthly bookkeeping to ensure timely availability of financial information and easier compliance with statutory requirements. However, frequency can be adjusted based on transaction volume and business needs.",
  },
  {
    question: "What is included in payroll processing?",
    answer: "Our payroll services include salary computation, TDS calculation and deduction, PF/ESI computation, preparation of payslips, and filing of related returns. We also assist with full and final settlement calculations.",
  },
  {
    question: "How is data security ensured?",
    answer: "We maintain strict confidentiality of all client data. Access to financial information is restricted to authorized personnel. We use secure channels for data transfer and follow data protection best practices.",
  },
];

export default function Accounting() {
  return (
    <Layout>
      <PageHeader
        title="Accounting & Bookkeeping"
        description="Professional accounting services including bookkeeping, financial statements preparation, and management reporting."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Accounting & Bookkeeping" },
        ]}
      />

      {/* Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
                Overview
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Accurate accounting and bookkeeping form the foundation of sound financial 
                management. Proper maintenance of books of accounts is not only a legal 
                requirement but also essential for business planning, compliance, and 
                decision-making.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our accounting services are designed to help businesses maintain accurate 
                financial records while allowing them to focus on their core operations. 
                We provide comprehensive support from day-to-day bookkeeping to preparation 
                of financial statements.
              </p>

              <h3 className="font-heading text-xl font-semibold mb-4">Service Offerings</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="p-4 bg-surface rounded-lg border border-border">
                    <h4 className="font-medium mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-semibold mb-4">Key Features</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Systematic recording following accounting standards",
                  "Regular reconciliation to ensure accuracy",
                  "Timely preparation of financial statements",
                  "Customized MIS reports as per business needs",
                  "Integration with your existing systems",
                  "Secure handling of financial data",
                  "Support during audits and assessments",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface rounded-lg p-6 sticky top-24">
                <h3 className="font-heading text-lg font-semibold mb-4">Suitable For</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Small & Medium Businesses",
                    "Startups",
                    "Professional Firms",
                    "Retail Businesses",
                    "Service Providers",
                    "Manufacturing Units",
                    "Trading Enterprises",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/contact">Get Assistance</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background rounded-lg p-6 border border-border h-full">
                  <span className="text-4xl font-heading font-bold text-accent/20">
                    {step.step}
                  </span>
                  <h3 className="font-heading font-semibold text-lg mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-5 h-5 w-5 text-muted-foreground -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-lg border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Need Accounting Support?"
        description="Contact us to discuss your accounting and bookkeeping requirements. We offer flexible arrangements tailored to your needs."
      />
    </Layout>
  );
}
