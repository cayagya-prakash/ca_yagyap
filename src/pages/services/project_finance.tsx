import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import sidbi from "../../../public/SIDBI.jpg";

function ProjectFinance() {
  return (
    <Layout>
      <PageHeader
        title="Project Finance Loan"
        description="Funding support to execute new projects and expand your business smoothly."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Project Finance Loans" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 space-y-6">
          {/* <!-- Intro --> */}
          <div >
            <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-4">
              Comprehensive Financial & Project Finance Consulting for
              Businesses
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Whether a business needs capital for investment, plans to expand
              through acquisitions, or wants to realize value through a sale —
              our Financial Consulting team supports you at every stage. We help
              streamline financial structures so you can access accurate
              information quickly and make confident decisions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our goal is to maximize the value of your business portfolio
              through innovative, customized financial strategies that suit your
              long-term vision.
            </p>
          </div>

          {/* <!-- Project Finance --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              Project Finance Tailored to Your Business Needs
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Whether it’s a new project, business expansion, short-term
              funding, or working capital requirements, our Project Finance team
              works closely with you to deliver the right financial structure
              and funding approach.
            </p>
          </div>

          {/* <!-- Services List --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              Our Finance Consulting Services
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Project feasibility studies</li>
              <li>Project consulting & financial projections</li>
              <li>Business valuations</li>
              <li>Financial due diligence</li>
              <li>Independent expert opinions</li>
              <li>Financial modeling & business planning</li>
              <li>Post-deal support</li>
              <li>Private equity advisory</li>
              <li>Transaction advisory (M&A)</li>
              <li>Structuring services</li>
              <li>Valuation consulting</li>
              <li>External Commercial Borrowing assistance</li>
            </ul>
          </div>

          {/* <!-- Y. P. Sharda Section --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              Y. P. Sharda — Research-Driven Project Finance & Advisory
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              <span className="font-semibold">Y. P. Sharda</span> provides
              research-based investment advisory and project finance services
              for corporates, high-net-worth individuals, and retail investors.
              Our client-centric approach ensures every plan protects and
              enhances business value.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We explain financing options clearly, highlight risks, and guide
              you through each step — building relationships based on trust,
              transparency, and long-term vision.
            </p>
          </div>

          {/* <!-- Best Consultant --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              The Best Project Finance Consultant in Ahmedabad, Gujarat
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Yagya Prakash Sharda &amp; Co. is recognized as a leading project
              finance consultant in Ahmedabad, offering innovative and timely
              financial solutions. We work closely with banks and financial
              institutions to arrange project loans for new businesses as well
              as financing for building and machinery.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our client-first approach, strong expertise, and reliable delivery
              make us a preferred partner for businesses across Gujarat.
            </p>
          </div>

          {/* <!-- Why Choose --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              Why Businesses Choose Y. P. Sharda
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Highly experienced and skilled team</li>
              <li>Strong banking and institutional relationships</li>
              <li>Transparent processes</li>
              <li>Customized project financing solutions</li>
              <li>End-to-end support from planning to approval</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              If you are planning a new project or expansion, we help arrange
              the right project finance to turn your plans into reality.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProjectFinance;
