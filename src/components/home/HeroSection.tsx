import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Lock, TrendingUp, BarChart3, PieChart } from "lucide-react";

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
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(210 100% 20%) 0%, hsl(210 80% 28%) 50%, hsl(210 70% 32%) 100%)",
          }}
        />
        
        {/* Decorative Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, white 1px, transparent 1px),
                linear-gradient(180deg, white 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          
          {/* Floating circles */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-float" />
          <div className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="text-primary-foreground">
              {/* Tag */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6 animate-fade-up"
              >
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent tracking-wide uppercase">
                  ICAI Registered Chartered Accountant Firm
                </span>
              </div>

              {/* Headline */}
              <h1 
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                Professional Financial & 
                <span className="block text-accent mt-2">Compliance Services</span>
              </h1>

              {/* Subtext */}
              <p 
                className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-xl animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                We provide structured tax, audit and advisory services with accuracy, 
                transparency and strict client confidentiality.
              </p>

              {/* Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="rounded-full px-8 shadow-glow hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link to="/contact">Book Consultation</Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="rounded-full px-8 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
                  asChild
                >
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            {/* Right - Financial Illustration */}
            <div className="hidden lg:flex justify-center items-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-full max-w-md">
                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-intense">
                  {/* Abstract Chart Visualization */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">Financial Growth</p>
                          <p className="text-lg font-semibold text-white">Compliance Status</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-accent text-sm font-medium">100%</p>
                        <p className="text-xs text-white/60">Compliant</p>
                      </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="flex items-end gap-3 h-32">
                      {[40, 60, 35, 80, 55, 70, 90].map((height, i) => (
                        <div 
                          key={i}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-accent/40 to-accent transition-all duration-500 hover:from-accent/60 hover:to-accent"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${0.5 + i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <BarChart3 className="h-5 w-5 text-accent mx-auto mb-1" />
                        <p className="text-xs text-white/60">Tax Filing</p>
                      </div>
                      <div className="text-center">
                        <PieChart className="h-5 w-5 text-accent mx-auto mb-1" />
                        <p className="text-xs text-white/60">Audit</p>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="h-5 w-5 text-accent mx-auto mb-1" />
                        <p className="text-xs text-white/60">Advisory</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-4 shadow-lg animate-float">
                  <CheckCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur rounded-lg px-4 py-2 border border-white/20 animate-float" style={{ animationDelay: '3s' }}>
                  <p className="text-sm text-white font-medium">ICAI Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-surface border-y border-border">
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