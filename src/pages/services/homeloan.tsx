import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import homeloan from "../../../public/homeloan.jpeg";

function HomeLoan() {
  return (
    <Layout>
      <PageHeader
        title="Home Loan"
        description="Easy and reliable home loan guidance — from eligibility and documentation to finding the right lender and EMI plan."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Home Loan" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-2">
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

          {/* Intro */}
          <div>
            <h2 className="text-lg font-medium  text-gray-800 mb-4">
              The Most Trusted and Reliable Home Loan Consultant in Ahmedabad
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <span className="font-semibold">
                Yagya Prakash Sharda &amp; Co.
              </span>{" "}
              is recognized as one of the most dependable home loan consultants
              in Ahmedabad, helping clients secure suitable housing finance with
              transparency and ease. We assist in arranging loans for purchasing
              or constructing homes, managing everything from documentation to
              lender coordination.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With our expertise in loan advisory, we guide you toward options
              that match your repayment comfort, financial goals, and long-term
              plans.
            </p>
          </div>
<img src={homeloan} alt="homeloan"/>
          {/* First Time Buyers */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Expert Guidance for First-Time Home Buyers
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              As trusted advisors for first-time buyers, we compare multiple
              loan offers, negotiate with banks, and help secure competitive
              interest rates. Our team ensures a smooth, stress-free application
              process.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We also advise on insurance-linked loans, repayment strategies,
              and essential considerations before applying. Whether salaried,
              self-employed, a business owner, or NRI — we help tailor the right
              home loan solution to your needs.
            </p>

            
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomeLoan;
