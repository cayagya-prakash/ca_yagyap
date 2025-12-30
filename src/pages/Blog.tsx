import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "Understanding New ITR Forms for AY 2024-25", date: "Dec 15, 2024", category: "Income Tax", slug: "#" },
  { title: "GST Compliance Checklist for Businesses", date: "Dec 10, 2024", category: "GST", slug: "#" },
  { title: "Key Changes in Companies Act Amendment 2024", date: "Dec 5, 2024", category: "Corporate Law", slug: "#" },
  { title: "Tax Saving Options Under Section 80C", date: "Nov 28, 2024", category: "Tax Planning", slug: "#" },
];

export default function Blog() {
  return (
    <Layout>
      <PageHeader title="Blog & Resources" description="Educational updates on taxation and compliance matters." breadcrumbs={[{ label: "Blog" }]} />
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <article key={i} className="bg-card rounded-lg border border-border p-6 hover:shadow-elevated transition-all">
                <span className="text-xs font-medium text-accent uppercase">{post.category}</span>
                <h2 className="font-heading text-xl font-semibold mt-2 mb-3">{post.title}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4"><Calendar className="h-4 w-4" />{post.date}</div>
                <Link to={post.slug} className="inline-flex items-center text-sm font-medium text-primary hover:text-accent">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </article>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12">This section provides educational content only and does not constitute professional advice.</p>
        </div>
      </section>
    </Layout>
  );
}
