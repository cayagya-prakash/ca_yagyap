import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import sidbi from "../../../src/assests/SIDBI.jpg";

function SIDBI() {
  return (
    <Layout>
      <PageHeader
        title="SIDBI Loans"
        description="End-to-end MSME loan assistance, from guidance and documentation to securing the right funding for your business growth."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SIDBI Loans" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 space-y-6">
          <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-2">
            The Expert SIDBI Loan Consultant in Ahmedabad, Gujarat — Empowering
            MSME Growth
          </h2>

          <p className="text-gray-600 leading-relaxed mb-2">
            SIDBI (Small Industries Development Bank of India) plays a crucial
            role in supporting MSMEs across the country. As an experienced SIDBI
            loan consultant in Ahmedabad, we help businesses access dedicated
            financing solutions designed specifically for MSME development and
            expansion.
          </p>

          <p className="text-gray-600 leading-relaxed mb-2">
            Since SIDBI was established in 1990, we have assisted numerous
            enterprises in securing the funds they need for growth,
            modernization, and new ventures. Through our expertise and
            commitment, we have become one of the leading SIDBI loan consultants
            in Gujarat, successfully helping thousands of MSMEs obtain timely
            financial support.
          </p>

          <p className="text-gray-600 leading-relaxed mb-2">
            SIDBI is a Government of India institution, established by an Act of
            Parliament — making it one of the most trusted and dependable loan
            providers in the country. Whether you are starting a new business or
            expanding an existing one, we can help you secure the right SIDBI
            loan tailored to your needs in Ahmedabad, Gujarat.
          </p>
          <img src={sidbi} alt="sidbi" />

          {/* <!-- Section: Consultant --> */}
          <div >
            <h2 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              Trusted SIDBI Loan Consultant in Ahmedabad, Gujarat
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              We are a fully accredited and trusted SIDBI loan consultant in
              Ahmedabad, helping MSMEs secure fast and reliable funding. As
              SIDBI specialists, we guide you in selecting the right scheme
              based on your business needs — including Make in India Soft Loan
              Fund, Small Equipment Finance, Trader Finance Scheme, refinance
              options, and more.
            </p>

            <p className="text-gray-600 leading-relaxed">
              SIDBI works through banks, NBFCs, SFCs and other institutions.
              With the right consultant, you can navigate eligibility,
              documentation and approvals smoothly — ensuring your business
              starts or expands with complete confidence.
            </p>
          </div>

          {/* <!-- Section: SIDBI Benefits --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              SIDBI Loans — Supporting Entrepreneurs and MSMEs
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              SIDBI loans make business ownership easier by offering reliable
              funding for startups and small-scale industries. These loans
              support business expansion, machinery purchase, modernization, and
              working capital needs.
            </p>

            <p className="text-gray-700 font-semibold">
              Loan Amount Range: ₹10 Lakhs to ₹2.5 Crores
            </p>
          </div>

          {/* <!-- Section: Why Gujarat --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              Why SIDBI Loans Matter for Gujarat Businesses
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Gujarat — especially Ahmedabad — has always been a strong base for
              trade and entrepreneurship. SIDBI helps businesses manage
              operational costs, invest in infrastructure, upgrade technology,
              and overcome financial gaps — enabling sustainable growth.
            </p>
          </div>

          {/* <!-- Section: Advantages --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              Key Benefits of SIDBI Loans
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Quick processing and flexible repayment options</li>
              <li>Competitive interest rates</li>
              <li>Secured and unsecured loan choices</li>
              <li>Support for modernization and expansion</li>
              <li>Easy access to certified lending partners</li>
            </ul>
          </div>

          {/* <!-- Section: COVID Scheme --> */}
          <div >
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-4">
              SIDBI Special COVID-19 Liquidity Scheme
            </h3>

            <p className="text-gray-600 leading-relaxed">
              SIDBI introduced a special liquidity program to help MSMEs recover
              during COVID-19 — providing immediate working capital support via
              banks, NBFCs, and microfinance institutions, ensuring businesses
              could restart and stabilize.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SIDBI;
