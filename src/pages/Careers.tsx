import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <Layout>
      <PageHeader title="Careers" description="Join our team of professionals." breadcrumbs={[{ label: "Careers" }]} />
      <section className="section-padding">
        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground mb-8">We are always looking for talented professionals to join our team. If you are a qualified Chartered Accountant or accounting professional seeking growth opportunities, we would like to hear from you.</p>
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="font-heading text-xl font-semibold mb-4">How to Apply</h2>
            <p className="text-muted-foreground mb-6">Send your resume to <a href="mailto:careers@ypsca.com" className="text-accent hover:underline">careers@ypsca.com</a> with the position you are interested in.</p>
            <Button variant="accent" asChild><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
