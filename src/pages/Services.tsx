import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ContactCTA } from "@/components/shared/ContactCTA";
import {
  FileText,
  Calculator,
  ClipboardCheck,
  BookOpen,
  Building2,
  ArrowRight,
} from "lucide-react";

// const services = [
//   {
//     title: "Income Tax & ITR Filing",
//     description:
//       "Comprehensive income tax planning, computation, return filing, and representation services for individuals, HUFs, firms, and companies.",
//     icon: FileText,
//     href: "/services/income-tax",
//     features: [
//       "Tax Planning",
//       "ITR Filing",
//       "Tax Assessment",
//       "Appeals & Representation",
//     ],
//   },
//   {
//     title: "GST & Indirect Tax",
//     description:
//       "Complete GST compliance services including registration, return filing, refunds, and advisory on indirect tax matters.",
//     icon: Calculator,
//     href: "/services/gst",
//     features: [
//       "GST Registration",
//       "Return Filing",
//       "Refund Claims",
//       "Advisory Services",
//     ],
//   },
//   {
//     title: "Audit & Assurance",
//     description:
//       "Statutory audit, tax audit, internal audit, and other assurance services conducted as per professional standards.",
//     icon: ClipboardCheck,
//     href: "/services/audit",
//     features: [
//       "Statutory Audit",
//       "Tax Audit",
//       "Internal Audit",
//       "Special Audits",
//     ],
//   },
//   {
//     title: "Accounting & Bookkeeping",
//     description:
//       "Professional accounting services including bookkeeping, financial statements preparation, and management reporting.",
//     icon: BookOpen,
//     href: "/services/accounting",
//     features: [
//       "Bookkeeping",
//       "Financial Statements",
//       "MIS Reports",
//       "Payroll Processing",
//     ],
//   },
//   {
//     title: "Business Registration & Compliance",
//     description:
//       "Company incorporation, LLP formation, startup registration, and ongoing secretarial and regulatory compliance.",
//     icon: Building2,
//     href: "/services/registration",
//     features: [
//       "Company Registration",
//       "LLP Formation",
//       "MSME Registration",
//       "Annual Compliance",
//     ],
//   },
// ];
const services = [
  {
    title: "SME",
    description:
      "We help SMEs — the backbone of India’s economy contributing nearly 40% of exports — with expert tax, GST, audit, and financial advisory services to ensure compliance and sustainable growth.",
    icon: FileText,
    href: "/services/income-tax",
  },
  {
    title: "Finance & Advisory",
    description:
      "We help businesses raise capital, grow through acquisitions, and realise value through strategic financial planning, valuations, and expert advisory support.",
    icon: Calculator,
    href: "/services/gst",
  },
  {
    title: "Government Grants & Subsidies",
    description:
      "We help businesses identify eligible government schemes, prepare documentation, and secure grants and subsidies — supporting growth while ensuring full compliance.",
    icon: ClipboardCheck,
    href: "/services/subsidy",
  },
  {
    title: "Tax Advisory",
    description:
      "We help businesses and individuals with smart tax planning, accurate filings, and compliance support — reducing risks and optimizing tax savings.",
    icon: BookOpen,
    href: "/services/incom-tax",
  },
  {
    title: "Corporate Affairs",
    description:
      "We assist businesses with Company Law compliance, company formation, and regulatory filings to ensure smooth and legally compliant operations.",
    icon: Building2,
    href: "/services/registration",
  },
  {
    title: "SIDBI Loan Consultant",
    description:
      "We help startups and MSMEs get SIDBI loans with expert guidance, documentation support, and smooth approval assistance.",
    icon: Building2,
    href: "/services/sidbi-loan",
  },
 
  {
    title: "LLP Annual Return Filing",
    description:
      "We help LLPs file their annual returns and statements accurately, ensuring timely compliance and avoiding penalties.",
    icon: Building2,
    href: "/services/registration",
  },
  {
    title: "MSME Loan Consultant",
    description:
      "We help MSMEs access the right government-backed loans with guidance on eligibility, documentation, and smooth approvals.",
    icon: Building2,
    href: "/services/msme-loan",
  },
  {
    title: "Compliance Auditing Services",
    description:
      "We review business processes to ensure full compliance with laws, regulations, and policies — reducing risks and penalties.",
    icon: Building2,
    href: "/services/audit",
  },
  {
    title: "Personal Loan",
    description:
      "We assist individuals in getting instant personal loans with quick approval, minimal documentation, and flexible repayment options.",
    icon: Building2,
    href: "/services/registration",
  },
  {
    title: "Term loan for Business",
    description:
      "We help businesses secure term loans with structured repayment plans for expansion, working capital, and asset purchases.",
    icon: Building2,
    href: "/services/registration",
  },
  {
    title: "Company Registration Consultant",
    description:
      "We help entrepreneurs register companies quickly with complete support for documentation, approvals, and compliance.",
    icon: Building2,
    href: "/services/roc-work",
  },
];
export default function Services() {
  return (
    <Layout>
      <PageHeader
        title="Our Services"
        description="Comprehensive professional services designed to meet your financial, taxation, and compliance requirements."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <div>
            <div className="mx-auto">
              <div className="bg-white rounded-2xl p-6 md:p-10">
                <h2 className="text-xl md:text-xl font-bold text-gray-800 mb-4">
                  GST (Goods &amp; Services Tax) — Registration, Filing &amp;
                  Compliance
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Goods and Services Tax (GST)</strong> is a unified
                  indirect tax system that replaces multiple state and central
                  taxes with one streamlined structure. It is a
                  consumption-based tax charged where goods or services are
                  finally used — and the end consumer ultimately bears the tax.
                </p>
                <p className="text-gray-700 font-semibold mb-3">
                  As trusted <strong>GST consultants in Ahmedabad</strong>, we
                  help businesses with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-5">
                  <li>
                    <strong>GST registration</strong>
                  </li>
                  <li>
                    <strong>Monthly and annual GST returns</strong>
                  </li>
                  <li>
                    <strong>Input tax credit management</strong>
                  </li>
                  <li>
                    <strong>GST audits and compliance</strong>
                  </li>
                  <li>
                    <strong>Record keeping and documentation</strong>
                  </li>
                </ul>

                <p className="text-gray-600 leading-relaxed mb-3">
                  GST is divided into <strong>CGST (Central GST)</strong> and{" "}
                  <strong>SGST (State GST)</strong>. Rates vary depending on the
                  type of goods and services, and rules are updated frequently.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our team ensures your business stays compliant, avoids
                  penalties, and benefits from smart tax planning — with
                  transparent, cost-effective GST advisory and ongoing
                  compliance support.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
