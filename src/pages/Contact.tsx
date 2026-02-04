import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createData } from "@/helper";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const router = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),

    subject: Yup.string().trim().required("Subject is required"),

    message: Yup.string().trim().required("Message is required"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setLoading(true);
      const data = {
        ...values
      };

      try {
        const res = await createData("", "/inquery/addinquery", data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.data.status === true) {
          setLoading(false);
          setInitialValues({
            name: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          });
          toast({
            title: "Message Sent",
            description: "We will get back to you shortly.",
          });

          router("/");
        }
      } catch (error) {
        console.log("error", error);
        setLoading(false);
      }
    },
  });
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for professional assistance."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-6">
                Send Us a Message
              </h2>
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  required
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name ? (
                  <span className="text-red-500 ms-3 text-sm font-bold">
                    {formik.errors.name}
                  </span>
                ) : (
                  ""
                )}
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />{" "}
                {formik.touched.email ? (
                  <span className="text-red-500 ms-3 text-sm font-bold">
                    {formik.errors.email}
                  </span>
                ) : (
                  ""
                )}
                <Input
                  placeholder="Phone Number"
                  name="phone"
                  type="number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.touched.phone ? (
                  <span className="text-red-500 ms-3 text-sm font-bold">
                    {formik.errors.phone}
                  </span>
                ) : (
                  ""
                )}
                <Input
                  placeholder="Subject"
                  required
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                />{" "}
                {formik.touched.subject ? (
                  <span className="text-red-500 ms-3 text-sm font-bold">
                    {formik.errors.subject}
                  </span>
                ) : (
                  ""
                )}
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.touched.message ? (
                  <span className="text-red-500 ms-3 text-sm font-bold">
                    {formik.errors.message}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <Button
                type="submit"
                variant="accent"
                className="mt-4"
                disabled={loading || !formik.dirty}
                onClick={() => formik.handleSubmit()}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-sm text-muted-foreground">
                      Suyojan Tower, 803, Chimanlal Girdharlal Rd, Vasant Vihar,
                      Navrangpura, Ahmedabad, Gujarat, 380009
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+919978480401"
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      +91 99784 80401
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:cayagya@gmail.com"
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      cayagya@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-accent shrink-0" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sat: 10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-4  flex items-center justify-center text-muted-foreground">
                <iframe
                  className="map-container"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3671.671186310534!2d72.55550567531421!3d23.035842279164395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAyJzA5LjAiTiA3MsKwMzMnMjkuMSJF!5e0!3m2!1sen!2sin!4v1756805809578!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  width="600"
                  height="450"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
