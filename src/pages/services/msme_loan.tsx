import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import msme from "../../../src/assests/msme.jpg";

function Msmeloan() {
  return (
    <Layout>
      <PageHeader
        title="MSME Loan"
        description="End-to-end MSME loan assistance, from guidance and documentation to securing the right funding for your business growth."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "MSME Loan" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 space-y-10">
          <header>
            <h2 className="text-2xl md:text-2xl font-medium mb-3 text-gray-900">
              MSME (Micro, Small & Medium Enterprises)
            </h2>
            <p className="mt-0 text-gray-600">
              Understanding MSME classification, loan schemes, and how expert
              consultants help secure funding.
            </p>
          </header>

          <div
            className="space-y-4 leading-relaxed text-gray-700">
            <p className="mt-0">
              Under the MSMED Act, 2006, enterprises are classified based on
              investment in plant, machinery, or equipment. MSMEs play a key
              role in employment generation and economic development across
              India.
            </p>
            <h3 className="text-lg font-medium text-gray-900">
              Manufacturing Enterprises
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Micro:</strong> Investment up to ₹25 lakh
              </li>
              <li>
                <strong>Small:</strong> Above ₹25 lakh and up to ₹5 crore
              </li>
              <li>
                <strong>Medium:</strong> Above ₹5 crore and up to ₹10 crore
              </li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6">
              Service Enterprises
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Micro:</strong> Investment up to ₹10 lakh
              </li>
              <li>
                <strong>Small:</strong> Above ₹10 lakh and up to ₹2 crore
              </li>
              <li>
                <strong>Medium:</strong> Above ₹2 crore and up to ₹5 crore
              </li>
            </ul>

            <img src={msme} alt="msmeloan" />

            <h3 className="text-lg font-medium text-gray-900 mt-6">
              MSME Loans & Government Schemes
            </h3>
            <p>
              MSME loans support startup founders and small businesses. Interest
              rates and tenures vary by lender, while several government
              initiatives provide collateral-free assistance.
            </p>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                MUDRA Scheme
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Shishu:</strong> Up to ₹50,000
                </li>
                <li>
                  <strong>Kishore:</strong> Up to ₹5 lakh
                </li>
                <li>
                  <strong>Tarun:</strong> Up to ₹10 lakh
                </li>
              </ul>
              <p className="mt-3 text-gray-700">
                All categories offer repayment periods of up to{" "}
                <strong>60 months</strong>.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                CGTMSE Scheme
              </h4>
              <p>
                Provides collateral-free loans up to <strong>₹2 crore</strong>
                for new and existing MSMEs, ensuring easier access to capital
                without third-party guarantees.
              </p>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mt-6">
              Why Work With an MSME Loan Consultant?
            </h3>
            <p>
              The application process — choosing lenders, filling forms,
              uploading documents, and verification — can be time-consuming.
              Experienced consultants simplify the process, increasing approval
              chances and ensuring timely funding.
            </p>

            <p>
              A professional MSME loan consultant helps startups, small business
              owners, and women entrepreneurs secure loans quickly so they can
              focus on growth rather than paperwork.
            </p>
          </div>

          <div className=" mx-auto rounded-xl ">
            <h2 className="text-xl md:text-xl font-bold text-gray-800 mb-4">
              The Expert and Experienced MSME Loan Consultant in Gujarat
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              MSMEs often need financial support at every stage — from setting
              up operations to expanding their business.
              <span className="font-semibold text-gray-800 me-1">
                Yagya Prakash Sharda &amp; Co 
              </span>
               is a trusted and experienced MSME loan consultant in Gujarat. We
              help businesses secure the right funding from genuine and reputed
              sources.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you are starting a new venture or planning to grow an
              existing one, we assist in arranging MSME loans from leading banks
              and financial institutions in your region. Many entrepreneurs have
              successfully obtained MSME loans through our guidance, and you can
              too.
            </p>

            

           
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Msmeloan;
