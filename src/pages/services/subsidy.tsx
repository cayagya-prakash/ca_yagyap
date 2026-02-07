import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import subsidy from "./../../../src/assests/subsidy.jpg";

function Subsidy() {
  return (
    <Layout>
      <PageHeader
        title="Subsidy"
        description="End-to-end MSME loan assistance, from guidance and documentation to securing the right funding for your business growth."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Subsidy" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 space-y-6">
          {/* <!-- Header --> */}
          <div >
            <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-4">
              Expert Subsidy Consultant in Ahmedabad, Gujarat for Business Loans
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              We act as a specialist subsidy consultant in Ahmedabad, assisting
              businesses with various loan requirements. With strong networks
              across nationalized banks and trusted financial institutions, we
              help clients secure funding along with attractive interest
              subsidies.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you’re planning to start or expand a business and need expert
              guidance on subsidy-backed loans, you can rely on us for trusted
              and professional support across different industries.
            </p>
          </div>

          {/* <!-- Importance of Subsidies --> */}
          <div >
            <p className="text-gray-600 leading-relaxed mb-4">
              Registered businesses in India are eligible for subsidy-based
              financing to expand infrastructure and scale operations. These
              subsidies reduce financial pressure, helping companies stay
              competitive and offer products at reasonable prices.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In Ahmedabad, government subsidies support entrepreneurs in
              managing rising costs, inflation, and production challenges —
              contributing to long-term economic growth.
            </p>
          </div>

          {/* <!-- Government Subsidy Loans --> */}
          <div >
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
              Government Subsidy Loans for New Businesses
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              We help entrepreneurs obtain government-backed subsidy loans for
              new businesses in Ahmedabad. Modern infrastructure, technology,
              and efficient resources are essential — and subsidy programs make
              these investments achievable.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Schemes such as SME IPO subsidies, GST-related subsidies, and
              capital subsidy programs provide valuable financial support while
              ensuring businesses meet regulatory and quality standards.
            </p>

            <p className="text-gray-600 leading-relaxed">
              As experienced consultants,
              <span className="font-semibold">
                Yagya Prakash Sharda &amp; Co.
              </span>{" "}
              guides businesses through capital and interest subsidy schemes in
              Ahmedabad, making the entire process clear and efficient.
            </p>
          </div>

          <img src={subsidy} alt="subsidy"/>
        </div>
      </section>
    </Layout>
  );
}

export default Subsidy;
