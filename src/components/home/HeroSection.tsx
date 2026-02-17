"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  Lock,
  AlertCircle,
  FileText,
  ClipboardList,
  ArrowRight,
  Play,
  PlaySquareIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { readData } from "@/helper";

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
  const [data, setData] = useState([]);
  const GetBlogbyid = async () => {
    try {
      const res = await readData(`/blog/getAllBlogs`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === true) {
        const result = res.blogs;
        setData(result);
      }
    } catch (error) {
      console.log("errorr", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetBlogbyid(); // ✔️ now state update happens asynchronously
    };

    fetchData();
  }, []);

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

        <div className="container relative z-10 p-5">
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
                className="font-heading text-foreground text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Professional Financial &
                <span className="block text-primary mt-2">
                  Compliance Services
                </span>
              </h1>

              {/* Subtext */}
              <p
                className="text-m text-muted-foreground mb-8 leading-relaxed max-w-xl animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                We provide structured tax, audit and advisory services with
                accuracy, transparency and strict client confidentiality.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
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
              className="lg:flex justify-center items-center animate-slide-in-right"
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
                      Current Affairs
                    </h3>
                  </div>

                  {/* Update Items */}
                  <div className="space-y-0">
                    
                    {data.length ? data.slice(0,4).filter((b)=>b.status === "publish").map((b) => (
                      <div className="py-4 border-b border-border">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                           {b.posttype ==="blog" ? <FileText className="h-4 w-4 text-primary" /> : <PlaySquareIcon className="h-4 w-4 text-primary" />} 
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground mb-1">
                              {b.title}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {b.publishdate}
                              </span>
                              <Link
                                to={b.posttype ==="blog" ? `/blog/${b._id}`: b.videoLink}
                                className="text-xs font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                              >
                              {b.posttype ==="blog"? <>Read More
                                <ArrowRight className="h-3 w-3" /></> : <>Watch Video <Play className="h-3 w-3"/></>}  
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )):<p className="text-center">No data</p>}

               
                  </div>
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
                  <p className="text-sm text-foreground font-medium">
                    ICAI Certified
                  </p>
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
                <span className="font-medium text-foreground">
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
