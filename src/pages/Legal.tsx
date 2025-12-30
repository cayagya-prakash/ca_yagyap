import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";

export default function Legal() {
  return (
    <Layout>
      <PageHeader title="Legal Disclaimer" description="Important legal information and ICAI compliance notice." breadcrumbs={[{ label: "Legal Disclaimer" }]} />
      <section className="section-padding">
        <div className="container max-w-3xl prose prose-slate">
          <h2 className="font-heading text-xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-muted-foreground mb-6">The information on this website is for general guidance only. It does not constitute professional advice. Before making any decisions, consult with qualified professionals. Yagya Prakash Sharda & Co. shall not be liable for any loss arising from reliance on this information.</p>
          
          <h2 className="font-heading text-xl font-semibold mb-4" id="privacy">Privacy Policy</h2>
          <p className="text-muted-foreground mb-6">We are committed to protecting client confidentiality. Personal information collected is used solely for service delivery and is not shared with third parties except as required by law.</p>
          
          <h2 className="font-heading text-xl font-semibold mb-4" id="terms">ICAI Compliance</h2>
          <p className="text-muted-foreground mb-6">This website is published in compliance with the guidelines issued by the Institute of Chartered Accountants of India (ICAI) regarding websites of Chartered Accountants. The content is informative and does not solicit work or make promotional claims.</p>
          
          <div className="bg-surface rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground"><strong>Firm Registration:</strong> FRN 123456N | ICAI Registered</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
