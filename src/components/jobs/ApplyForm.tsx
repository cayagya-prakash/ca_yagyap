"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Layout } from "../layout/Layout";
import { PageHeader } from "../shared/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { createData } from "@/helper";

interface ApplyJobProps {
  jobTitlee?: string;
}

export default function ApplyForm({
  jobTitlee = "Article Assistant",
}: ApplyJobProps) {
  const router = useNavigate();
  const { _id, jobtitle } = useParams();
  const [loader, setLoader] = useState(false);
  const decodedJobTitle = decodeURIComponent(jobtitle);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      applyfor: decodedJobTitle,
      mobile: "",
      city: "",
      qualification: "",
      experience: "",
      status: "",
      resume: null as File | null,
      portfolio: "",
      reason: "",
      expectedSalary: "",
      noticePeriod: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter valid 10 digit mobile number")
        .required("Mobile number is required"),
      city: Yup.string().required("City is required"),
      qualification: Yup.string().required("Qualification is required"),
      experience: Yup.string().required("Experience is required"),
      status: Yup.string().required("Current status is required"),
      resume: Yup.mixed().required("Resume is required"),
      reason: Yup.string().required("This field is required"),
    }),

    onSubmit: async (values) => {
      try {
        setLoader(true);

        const formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("email", values.email);
        formData.append("applyfor", values.applyfor); // decoded job title
        formData.append("mobile", values.mobile);
        formData.append("city", values.city);
        formData.append("qualification", values.qualification);
        formData.append("experience", values.experience);
        formData.append("status", values.status);
        formData.append("portfolio", values.portfolio || "");
        formData.append("reason", values.reason);
        formData.append("expectedSalary", values.expectedSalary || "");
        formData.append("noticePeriod", values.noticePeriod || "");
        // ✅ append resume ONLY if File
        if (values.resume instanceof File) {
          formData.append("resume", values.resume);
        }

        // 🔑 jobId (foreign key) — VERY IMPORTANT
        formData.append("jobId", _id); // get from route params

        const res = await createData("", "/application/apply-job", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res?.status === 200 || res?.data?.status === true) {
          toast.success("Application submitted successfully");
          router("/");
        }
      } catch (error) {
        console.error("Apply Job Error:", error);
        toast.error("Something went wrong");
      } finally {
        setLoader(false);
      }
    },
  });

  return (
    <Layout>
      <PageHeader
        title={`Apply for ${jobTitlee}`}
        breadcrumbs={[
          { label: "Career", href: "/careers" },
          { label: jobTitlee },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-8 bg-white p-6 rounded-xl shadow"
        >
          {/* Personal Details */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium">Personal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input
                  name="fullName"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                />
                {formik.errors.fullName && (
                  <p className="text-sm text-red-500">
                    {formik.errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && (
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <Label>Mobile Number</Label>
                <Input
                  name="mobile"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                />
                {formik.errors.mobile && (
                  <p className="text-sm text-red-500">{formik.errors.mobile}</p>
                )}
              </div>

              <div>
                <Label>Current City</Label>
                <Input
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                {formik.errors.city && (
                  <p className="text-sm text-red-500">{formik.errors.city}</p>
                )}
              </div>
            </div>
          </section>

          {/* Professional Details */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium">Professional Details</h2>

            <div>
              <Label>Applying For</Label>
              <Input value={formik.values.applyfor} disabled />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Highest Qualification</Label>
                <Input
                  name="qualification"
                  onChange={formik.handleChange}
                  value={formik.values.qualification}
                />
              </div>

              <div>
                <Label>Years of Experience</Label>
                <Input
                  name="experience"
                  onChange={formik.handleChange}
                  value={formik.values.experience}
                />
              </div>

              <div>
                <Label>Current Status</Label>
                <Select
                  onValueChange={(value) =>
                    formik.setFieldValue("status", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Working Professional">
                      Working Professional
                    </SelectItem>
                    <SelectItem value="Fresher">Fresher</SelectItem>
                  </SelectContent>
                </Select>
                {formik.errors.status && (
                  <p className="text-sm text-red-500">{formik.errors.status}</p>
                )}
              </div>
            </div>
          </section>

          {/* Resume & Links */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium">Resume & Links</h2>

            <div>
              <Label>Upload Resume</Label>
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  formik.setFieldValue("resume", e.target.files?.[0])
                }
              />
              {formik.errors.resume && (
                <p className="text-sm text-red-500">
                  {formik.errors.resume as string}
                </p>
              )}
            </div>

            <div>
              <Label>Portfolio / LinkedIn URL (Optional)</Label>
              <Input
                name="portfolio"
                onChange={formik.handleChange}
                value={formik.values.portfolio}
              />
            </div>
          </section>

          {/* Additional Info */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium">Additional Information</h2>

            <div>
              <Label>Why should we hire you?</Label>
              <Textarea
                rows={4}
                name="reason"
                onChange={formik.handleChange}
                value={formik.values.reason}
              />
              {formik.errors.reason && (
                <p className="text-sm text-red-500">{formik.errors.reason}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="expectedSalary"
                placeholder="Expected Salary (Optional)"
                onChange={formik.handleChange}
                value={formik.values.expectedSalary}
              />
              <Input
                name="noticePeriod"
                placeholder="Notice Period (Optional)"
                onChange={formik.handleChange}
                value={formik.values.noticePeriod}
              />
            </div>
          </section>

          <Button type="submit" variant="accent">
            Apply Now
          </Button>
        </form>
      </div>
    </Layout>
  );
}
