import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import audit from "../../../public/audit.jpg";

function InComeTax() {
  return (
    <Layout>
      <PageHeader
        title="Income tax"
        description="Accurate tax planning and filing to ensure compliance while minimizing liabilities."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Income Tax" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* <!-- Intro Section --> */}
          <div>
            <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-4">
              The Best Income Tax Consultancy Services in Ahmedabad
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Filing income tax returns correctly is essential for every
              individual and business. If you’re looking for professional and
              hassle-free tax filing support, you’re in the right place. Our
              experienced Chartered Accountants provide accurate income tax
              consultancy services in Ahmedabad, ensuring smooth filing and
              complete compliance.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We have earned the trust of clients by making tax compliance
              simple, transparent, and timely. Whether you’re an individual
              taxpayer, startup, or established business, we help manage your
              taxes efficiently while identifying legitimate tax-saving
              opportunities.
            </p>
          </div>

          {/* <!-- Why Choose Us --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Why Choose Us as Your Income Tax Consultant in Ahmedabad
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Licensed and authorized income tax consultants</li>
              <li>Complete support for documentation and e-filing</li>
              <li>Expert handling of scrutiny and tax audit matters</li>
              <li>Accurate, ethical, and dependable advisory services</li>
              <li>
                Guidance on legal tax-saving strategies for individuals and
                businesses
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              Our goal is to make tax filing stress-free while ensuring full
              compliance with income tax laws.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default InComeTax;
