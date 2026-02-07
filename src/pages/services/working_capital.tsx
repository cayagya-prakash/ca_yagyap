import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import React from "react";
import workingcapital from "../../../src/assests/workingcapital.jpg";

function WorkingCapital() {
  return (
    <Layout>
      <PageHeader
        title="Working Capital Loan"
        description="Quick funding support to manage daily operations and keep your business running smoothly."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Working Capital Loan" },
        ]}
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 space-y-6" >
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-2">
            The Most Reliable and Trusted Working Capital Loan Consultant in
            Ahmedabad, Gujarat
          </h2>

          <p className="text-gray-600 leading-relaxed mb-2" >
            We are a leading working capital loan consultant in Ahmedabad,
            helping businesses secure the funds they need to manage daily
            operations smoothly. Working capital support is essential for every
            company, especially small businesses facing cash-flow challenges. As
            a trusted consultant in Gujarat, we arrange suitable working capital
            loans that help businesses stabilize operations and continue growth
            without interruption.
          </p>

          <p className="text-gray-600 leading-relaxed mb-2">
            If you are searching for a dependable working capital loan
            consultant in Ahmedabad, Gujarat — you’re in the right place. We
            work with reliable lenders and help clients obtain loans quickly, at
            competitive interest rates. Over the years, we have assisted
            numerous small businesses in securing affordable and secure working
            capital finance.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With our experience and expertise, we make the process simple,
            transparent, and accessible for all types of businesses. Get in
            touch with us today to explore the best working capital loan options
            for your business in Gujarat.
          </p>

          <img src={workingcapital} alt="workingcapital"/>
        </div>
      </section>
    </Layout>
  );
}

export default WorkingCapital;
