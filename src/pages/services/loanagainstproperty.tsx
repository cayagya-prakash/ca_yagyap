import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import loanagainstproperty from "../../../src/assests/loanagainstproperty.jpeg";

function LoanAgainstProperty() {
  return (
    <Layout>
      <PageHeader
        title="Loan Against Property"
        description="Secure funding by leveraging your property — with guidance on eligibility, valuation, documentation, and choosing the right loan option"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Loan Against Property" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header / Intro */}
          <div>
            <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-2">
              Leading Loan Against Property Consultant in Ahmedabad, Gujarat
            </h2>

            <p className="text-gray-600 leading-relaxed mb-2">
              <span className="font-semibold">
                Yagya Prakash Sharda &amp; Co.
              </span>{" "}
              is a trusted consultant helping businesses arrange loans against
              property in Ahmedabad. Whether for startups, SMEs, or expanding
              enterprises, we assist clients in leveraging residential or
              commercial property to access funds with convenient repayment
              options.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With our expertise in mortgage advisory, we compare lenders,
              negotiate terms, and simplify the entire borrowing process —
              making it transparent, faster, and stress-free.
            </p>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Why Choose Loan Against Property?
            </h3>

            <p className="text-gray-600 leading-relaxed mb-2">
              Many of our clients have successfully availed funding for working
              capital, business growth, and new ventures through loans secured
              against their property. We help structure finance solutions that
              match your needs while keeping EMIs manageable.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you’re seeking a reliable and flexible loan option backed by
              your property, our team can help you secure the right financing at
              competitive interest rates.
            </p>
          </div>

          <img src={loanagainstproperty} alt="loanagainstproperty"/>
        </div>
      </section>
    </Layout>
  );
}

export default LoanAgainstProperty;
