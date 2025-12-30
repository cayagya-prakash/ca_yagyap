import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Lock, AlertCircle, FileText, ClipboardList, ArrowRight } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    text: "Ethical & Transparent Practice",
  },
  {
    icon: CheckCircle,
    text: "Accurate & Timely Compliance",
  },
  {
    icon: Lock,
    text: "Confidential Client Handling",
  },
];

export function HeroSection() {
  return (
    <>
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F5FAFF] via-[#EBF4FF] to-[#E0EFFF]">
        {/* Decorative Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--primary) / 0.03) 1px, transparent 1px),
                linear-gradient(180deg, hsl(var(--primary) / 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating shapes */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
          <div
            className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-up">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent tracking-wide uppercase">
                  ICAI Registered Chartered Accountant Firm
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-heading text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Professional Financial &<span className="block text-primary mt-2">Compliance Services</span>
              </h1>

              {/* Subtext */}
              <p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                We provide structured tax, audit and advisory services with accuracy, transparency and strict client
                confidentiality.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button
                  variant="accent"
                  size="lg"
                  className="rounded-full px-8 shadow-glow hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            {/* Right - Trending Updates Card */}
            <div
              className="hidden lg:flex justify-center items-center animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative w-full max-w-md">
                {/* Main Card */}
                <div className="relative bg-card rounded-2xl p-6 border border-border shadow-elevated">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Trending Tax & Compliance Updates
                    </h3>
                  </div>

                  {/* Update Items */}
                  <div className="space-y-0">
                    {/* Item 1 */}
                    <div className="py-4 border-b border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground mb-1">
                            Upcoming GST Return Deadlines
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Dec 28, 2024</span>
                            <Link 
                              to="/blog" 
                              className="text-xs font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                            >
                              Read More
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="py-4 border-b border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground mb-1">
                            Recent Income Tax Notifications
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Dec 22, 2024</span>
                            <Link 
                              to="/blog" 
                              className="text-xs font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                            >
                              Read More
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <ClipboardList className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground mb-1">
                            Important ROC Compliance Reminders
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Dec 18, 2024</span>
                            <Link 
                              to="/blog" 
                              className="text-xs font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                            >
                              Read More
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View All Button */}
                  <Link
                    to="/blog"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    View All Insights
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-4 shadow-lg animate-float">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <div
                  className="absolute -bottom-4 -left-4 bg-card backdrop-blur rounded-lg px-4 py-2 border border-border shadow-soft animate-float"
                  style={{ animationDelay: "3s" }}
                >
                  <p className="text-sm text-foreground font-medium">ICAI Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-card border-y border-border">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-center md:text-left animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <point.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium text-foreground">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
