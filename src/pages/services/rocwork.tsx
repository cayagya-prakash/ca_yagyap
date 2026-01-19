import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import audit from "../../../public/audit.jpg";

function RocWork() {
  return (
    <Layout>
      <PageHeader
        title="ROC Work"
        description="Accurate preparation and filing of ROC forms and compliance documents to keep your company legally updated and penalty-free."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "ROC Work" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl md:text-2xl font-medium  text-gray-800 mb-2">
              Your Trusted Company Registration Consultant in Ahmedabad
            </h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              <span className="font-semibold">
                Yagya Prakash Sharda &amp; Co.
              </span>{" "}
              is a trusted consultancy for company registration and ROC
              compliance services in Ahmedabad. Our team helps entrepreneurs and
              organizations establish their businesses smoothly across various
              industries, offering reliable guidance backed by knowledge of
              corporate law and regulatory procedures.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We provide client-focused, flexible, and customized advisory
              services, making the company registration and compliance journey
              simple and stress-free.
            </p>
          </div>

          {/* <!-- ROC Support --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Complete ROC & Corporate Advisory Support
            </h3>

            <p className="text-gray-600 leading-relaxed">
              As experienced ROC consultants in Ahmedabad, we assist with legal
              registrations, approvals, and certifications required to start a
              business. Whether your company is into manufacturing, trading, or
              services, we guide you through every step of the registration
              process.
            </p>
          </div>

          {/* <!-- Why Register --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Why Register Your Company?
            </h3>

            <p className="text-gray-600 leading-relaxed mb-2">
              Selecting the right business structure — such as Private Limited,
              LLP, or OPC — builds credibility and ensures legal compliance.
              Each structure requires mandatory filings, and our annual
              compliance services help complete them accurately and on time.
            </p>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Better credibility and professional image</li>
              <li>Easier banking and funding opportunities</li>
              <li>Transparent financial reporting</li>
              <li>Protection from penalties with timely filings</li>
            </ul>
          </div>

          {/* <!-- ROC Filing --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              ROC Filing — Key Requirements
            </h3>

            <p className="text-gray-600 leading-relaxed mb-2">
              ROC filing involves submitting statutory forms and annual returns
              to the Ministry of Corporate Affairs. Every registered company in
              India must:
            </p>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Conduct an Annual General Meeting (AGM)</li>
              <li>File annual returns within 60 days of the AGM</li>
              <li>
                Submit financial statements and income tax returns every year
              </li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              Since the financial year runs from 1 April to 31 March, most
              annual returns are due on or before 30 September. Professional ROC
              consultants ensure these compliances are managed correctly and on
              time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default RocWork;
