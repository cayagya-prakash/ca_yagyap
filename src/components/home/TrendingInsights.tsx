import { Link } from "react-router-dom";
import { Calendar, ArrowRight, FileText, AlertCircle, BookOpen, ClipboardList } from "lucide-react";

const insights = [
  {
    icon: AlertCircle,
    category: "GST Update",
    title: "Important GST Filing Reminders for January 2025",
    description: "Key dates and deadlines for GSTR-1, GSTR-3B, and annual returns that businesses must remember.",
    date: "Dec 28, 2024",
    slug: "/blog",
  },
  {
    icon: FileText,
    category: "Income Tax",
    title: "Common Mistakes to Avoid While Filing ITR",
    description: "A guide to the most frequent errors taxpayers make and how to ensure accurate return filing.",
    date: "Dec 22, 2024",
    slug: "/blog",
  },
  {
    icon: ClipboardList,
    category: "Compliance",
    title: "Important Compliance Dates for Businesses in 2025",
    description: "Annual compliance calendar covering ROC filings, tax deadlines, and statutory requirements.",
    date: "Dec 18, 2024",
    slug: "/blog",
  },
  {
    icon: BookOpen,
    category: "Audit",
    title: "Understanding Statutory Audit Requirements",
    description: "A simplified explanation of audit applicability, process, and documentation requirements.",
    date: "Dec 12, 2024",
    slug: "/blog",
  },
];

export function TrendingInsights() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Latest Insights
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Trending Tax & Compliance Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with educational updates on taxation, compliance requirements, and regulatory changes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl border border-border p-6 card-hover animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Icon & Category */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <insight.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-accent uppercase tracking-wide">
                  {insight.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {insight.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {insight.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {insight.date}
                </div>
                <Link
                  to={insight.slug}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group"
          >
            View All Resources
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          The above content is for educational purposes only and does not constitute professional advice.
        </p>
      </div>
    </section>
  );
}
