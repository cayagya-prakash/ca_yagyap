import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import gst from "../../../src/assests/gst.jpeg";

function GST() {
  return (
    <Layout>
      <PageHeader
        title="GST"
        description="Accurate GST registration, returns, and compliance — helping businesses manage taxes smoothly and avoid penalties."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "GST" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* <!-- Header --> */}
          <div>
            <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-2">
              The Leading GST Services Consultants in Ahmedabad, Gujarat
            </h2>

            <p className="text-gray-600 leading-relaxed mb-2">
              Since the introduction of GST in India,
              <span className="font-semibold">
                Yagya Prakash Sharda &amp; Co.
              </span>{" "}
              has been supporting businesses as one of the leading GST
              consultants in Ahmedabad. We provide complete GST services,
              including registration, return filing, and ongoing compliance
              guidance for all business types.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team ensures accuracy and timely filings, helping businesses
              stay compliant and avoid unnecessary penalties or complications.
            </p>
          </div>

          {/* <!-- Services List --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Our GST Services Include
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>GST registration assistance</li>
              <li>Regular GST return filing and compliance</li>
              <li>Expert CA support for GST matters</li>
              <li>Daily GST advisory and consultation</li>
              <li>GST audits and assessments</li>
              <li>Handling GST notices and departmental responses</li>
              <li>GST registration modification or cancellation</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              We manage GST interactions with authorities on your behalf,
              providing practical guidance and technology-driven solutions to
              keep your business fully compliant.
            </p>
          </div>
          <img src={gst} alt="gst" />
        </div>
      </section>
    </Layout>
  );
}

export default GST;
