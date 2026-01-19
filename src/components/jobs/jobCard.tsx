import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Job {
  _id: string;
  jobTitle: string;
  jobType: string;
  department: string;
  location: string;
  workMode: string;
  experience: string;
  qualification: string;
  requiredSkills: string;
  salaryRange: string;
  openings: number;
  deadline: string;
  status: string;
}

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{job.jobTitle}</CardTitle>
            <CardDescription className="mt-1">
              {job.department} • {job.location}
            </CardDescription>
          </div>

          <Badge variant={job.status === "active" ? "default" : "secondary"}>
            {job.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{job.jobType}</Badge>
          <Badge variant="outline">{job.workMode}</Badge>
          <Badge variant="outline">{job.experience}</Badge>
        </div>

        <p>
          <span className="font-medium">Qualification:</span>{" "}
          {job.qualification}
        </p>

        <p>
          <span className="font-medium">Skills:</span> {job.requiredSkills}
        </p>

        <p>
          <span className="font-medium">Salary:</span> ₹{job.salaryRange}
        </p>

        <p>
          <span className="font-medium">Openings:</span> {job.openings}
        </p>

        <p className="text-red-600">
          <span className="font-medium">Apply Before:</span> {job.deadline}
        </p>
      </CardContent>

      <CardFooter className="flex justify-end">
        <div>
          <Button variant="accent" className="w-full" asChild>
            <Link to={`/applyjob/${job._id}/${job.jobTitle}`}>Apply Now</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
