import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Shield, Users, Target, Eye, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest standards of professional ethics and honesty in all our engagements.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Prioritizing client needs and delivering personalized solutions with dedication.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for excellence in service delivery through continuous improvement.",
  },
  {
    icon: Eye,
    title: "Confidentiality",
    description: "Maintaining strict confidentiality of all client information and business matters.",
  },
];

const milestones = [
  { year: "2010", event: "Firm establishment with a vision to provide quality professional services" },
  { year: "2013", event: "Expanded service offerings to include GST consulting" },
  { year: "2016", event: "Team expansion with addition of specialized professionals" },
  { year: "2019", event: "Digitization of processes for enhanced service delivery" },
  { year: "2023", event: "Continued growth with focus on technology-enabled services" },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        title="About the Firm"
        description="A professionally managed Chartered Accountancy firm committed to delivering quality financial and compliance services."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Firm Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Yagya Prakash Sharda & Co. is a Chartered Accountancy firm registered with the 
              Institute of Chartered Accountants of India (ICAI). Established with a vision to 
              provide comprehensive professional services, the firm has built a reputation for 
              quality, integrity, and client-focused approach.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our team comprises qualified Chartered Accountants and professionals with 
              diverse expertise across taxation, audit, accounting, and business advisory. 
              We serve clients ranging from individuals to small and medium enterprises, 
              providing tailored solutions to meet their specific requirements.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The firm operates with a commitment to maintaining the highest standards of 
              professional ethics, confidentiality, and quality. Our systematic approach 
              ensures timely delivery of services while maintaining accuracy and compliance 
              with applicable laws and regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-md flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide professional services of the highest quality with integrity, 
                helping our clients navigate complex regulatory requirements while 
                optimizing their financial position within the framework of applicable laws.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-md flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a trusted professional services firm known for 
                excellence, ethical practices, and value creation for our clients, 
                contributing positively to the profession and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            label="Our Values"
            title="Principles That Guide Us"
            description="Our practice is built on a foundation of strong values that define how we work with our clients and conduct our professional activities."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-lg border border-border transition-all duration-300 hover:shadow-elevated"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-surface">
        <div className="container">
          <SectionHeader
            label="Our Journey"
            title="Milestones"
            description="Key milestones in our journey of providing professional services."
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start gap-6 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <div className={`inline-block p-4 bg-background rounded-lg border border-border ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <p className="font-heading font-semibold text-accent mb-1">{milestone.year}</p>
                      <p className="text-sm text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-2" />
                  <div className="flex-1 pl-10 md:hidden">
                    <p className="font-heading font-semibold text-accent mb-1">{milestone.year}</p>
                    <p className="text-sm text-muted-foreground">{milestone.event}</p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Commitment */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Our Professional Commitment
              </h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                As members of the Institute of Chartered Accountants of India, we are bound 
                by the Code of Ethics and Professional Standards. We commit to:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Maintaining professional independence and objectivity</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Safeguarding client confidentiality at all times</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Continuous professional development and learning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span>Adhering to applicable laws and professional standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
