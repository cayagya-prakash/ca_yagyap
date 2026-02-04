import { JobCard } from "@/components/jobs/jobCard";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { readData } from "@/helper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const GetBlogbyid = async () => {
    try {
      const res = await readData(`/career/getAlljobs`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.message === "Get Jobs Scussfully!!!") {
        const result = res.jobs;
        setData(result);
        setLoader(false);
      }
    } catch (error) {
      console.log("errorr", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetBlogbyid(); // ✔️ now state update happens asynchronously
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Careers"
        description="Join our team of professionals."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="section-padding space-y-5">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data
              .filter((job) => job.status === "active")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </div>

        <div className="container max-w-3xl text-center">
          <p className="text-muted-foreground mb-8">
            We are always looking for talented professionals to join our team.
            If you are a qualified Chartered Accountant or accounting
            professional seeking growth opportunities, we would like to hear
            from you.
          </p>
          <div className="bg-card rounded-lg border border-border p-8">
            <h2 className="font-heading text-xl font-semibold mb-4">
              How to Apply
            </h2>
            <p className="text-muted-foreground mb-6">
              Send your resume to{" "}
              <a
                href="mailto:cayagya@gmail.com"
                className="text-accent hover:underline"
              >
                cayagya@gmail.com
              </a>{" "}
              with the position you are interested in.
            </p>
            <Button variant="accent" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
