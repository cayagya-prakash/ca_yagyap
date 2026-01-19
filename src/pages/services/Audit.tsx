import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import audit from "../../../public/audit.jpg";

function Audit() {
  return (
    <Layout>
      <PageHeader
        title="Audit"
        description="Accurate and reliable financial audits to ensure compliance and transparency."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Audit" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* <!-- Intro Section --> */}
          <div>
            <h2 className="text-2xl md:text-2xl font-medium text-gray-800 mb-2">
              Most Trusted Secretarial Audit Services in Ahmedabad
            </h2>

            <p className="text-gray-600 leading-relaxed mb-2">
              <span className="font-semibold">
                Yagya Prakash Sharda &amp; Co.
              </span>{" "}
              offers reliable and professional secretarial audit services in
              Ahmedabad. In today’s competitive business environment,
              organizations must comply with several corporate laws,
              regulations, and reporting standards. Our audit and assurance team
              helps businesses stay compliant while improving corporate
              governance and operational transparency.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our services strengthen investor confidence, highlight improvement
              areas, and support businesses in moving forward in the right
              direction.
            </p>
          </div>

          {/* <!-- Why Secretarial Audit --> */}
          <div>
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-2">
              Why Secretarial Audit and Compliance Support Matters
            </h3>

            <p className="text-gray-600 leading-relaxed mb-2">
              Secretarial audits are essential not only to meet legal
              requirements but also to identify risks, enhance internal
              controls, and safeguard stakeholder interests. We assist clients
              in planning and managing:
            </p>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Legal and statutory compliance reviews</li>
              <li>Internal and accounting-related audits</li>
              <li>Due diligence and risk assessments</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              Whether you require an audit for a partnership firm, company, or
              LLP, we focus on understanding your operations and delivering
              practical, cost-effective solutions.
            </p>
          </div>

          {/* <!-- Compliance & Corporate Law --> */}
          <div>
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-2">
              Expert Secretarial Compliance & Corporate Law Support
            </h3>

            <p className="text-gray-600 leading-relaxed mb-2">
              Our team understands the real challenges faced by business owners
              — from statutory filings to annual compliance. As a leading
              secretarial audit consultant in Gujarat, we work with
              transparency, ethical practices, and standardized processes to
              deliver dependable audit outcomes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Under the Companies Act, 2013, Secretarial Audit is defined as a
              structured review of a company’s compliance with corporate laws,
              rules, and regulations. Regular reviews help detect gaps, minimize
              errors, and ensure smooth functioning of organizational systems.
            </p>
          </div>

          {/* <!-- Risk & Compliance --> */}
          <div>
            <h3 className="text-lg md:text-lg font-medium text-gray-800 mb-2">
              Ensuring Legal Compliance and Reduced Risk
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Every company operates under multiple regulatory frameworks — and
              non-compliance can create serious legal and financial
              consequences. Through periodic inspection and documentation
              review, we help assess whether applicable laws are being followed
              and identify areas needing improvement.
            </p>
          </div>

          <img src={audit} alt="audit" />

          {/* <!-- Why Secretarial Audit Matters --> */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Why Secretarial Audit Matters
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Secretarial Audit services help management, regulators, and
              stakeholders ensure that all legal and regulatory requirements are
              properly followed. With compliance handled professionally,
              companies can focus on efficiency, growth, and strategic
              decision-making.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Under Section 204 of the Companies Act, 2013, specific categories
              of companies must obtain a Secretarial Audit Report from a
              practicing Company Secretary or authorized Secretarial Audit firm.
            </p>
          </div>

          {/* <!-- Companies Required --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Companies Required to Undergo Secretarial Audit
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All listed companies</li>
              <li>
                Public companies with paid-up share capital of ₹50 Crore or more
              </li>
              <li>Public companies with turnover of ₹250 Crore or more</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              Secretarial Audit also applies to private companies that are
              subsidiaries of public companies and fall within prescribed
              limits. Turnover refers to total revenue earned from goods and
              services during the financial year.
            </p>
          </div>

          {/* <!-- Scope --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Scope of Secretarial Audit
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Secretarial auditors review whether companies comply with
              applicable corporate and regulatory laws, including:
            </p>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Companies Act, 2013</li>
              <li>Securities Contracts (Regulation) Act</li>
              <li>Depositories Act, 1996</li>
              <li>Foreign Exchange Management Act, 1999</li>
              <li>SEBI rules and guidelines</li>
              <li>Secretarial Standards by ICSI</li>
              <li>Listing regulations and stock-exchange agreements</li>
              <li>Other laws specific to the company’s operations</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              The audit goes beyond corporate law and covers every law that may
              affect the company — making it difficult for owners to manage
              without expert assistance.
            </p>
          </div>

          {/* <!-- Support Across Gujarat --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Secretarial Audit Support Across Gujarat
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              Secretarial audit firms in Ahmedabad support businesses across
              Gujarat — an industrial hub where compliance needs are constant.
              Many firms specialize in handling annual mandatory compliances and
              filings for listed companies across India.
            </p>

            <p className="text-gray-600 leading-relaxed">
              A listed company is one that trades its securities on a recognized
              stock exchange, and must follow both Companies Act, 2013 and SEBI
              (LODR) Regulations, 2015.
            </p>
          </div>

          {/* <!-- Key Compliances --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Key Secretarial Compliances for Listed Companies
            </h3>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Registrar of Companies filings</li>
              <li>Tax-related compliance</li>
              <li>Corporate governance and management filings</li>
              <li>SEBI Listing Regulations and Secretarial Standards</li>
              <li>Labour, environmental, and statutory law compliance</li>
              <li>Event-based and periodic compliances</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mt-4">
              Since laws change frequently, Secretarial Audit professionals stay
              updated and guide companies to avoid penalties and legal
              complications.
            </p>
          </div>

          {/* <!-- Professional Guidance --> */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Professional Guidance You Can Rely On
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Secretarial Audit experts clearly explain compliance requirements
              and help organizations stay aligned with hundreds of applicable
              rules and regulations — ensuring accuracy, transparency, and peace
              of mind for management.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Audit;
