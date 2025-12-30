import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { TeamMemberCard } from "@/components/shared/TeamMemberCard";
import { ContactCTA } from "@/components/shared/ContactCTA";

const team = [
  { name: "CA Yagya Prakash Sharda", designation: "Founding Partner", qualifications: "B.Com, FCA, DISA" },
  { name: "CA Rajesh Kumar", designation: "Partner", qualifications: "B.Com, ACA" },
  { name: "CA Priya Sharma", designation: "Senior Manager", qualifications: "M.Com, ACA" },
  { name: "CA Amit Verma", designation: "Manager - Taxation", qualifications: "B.Com, ACA" },
];

export default function Team() {
  return (
    <Layout>
      <PageHeader title="Our Team" description="Qualified professionals committed to delivering quality services." breadcrumbs={[{ label: "Team" }]} />
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => <TeamMemberCard key={i} {...member} />)}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            Our team members are bound by the Code of Ethics prescribed by ICAI and maintain professional competence through continuous learning.
          </p>
        </div>
      </section>
      <ContactCTA />
    </Layout>
  );
}
