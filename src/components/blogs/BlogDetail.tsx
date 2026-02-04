import React, { useEffect, useState } from "react";
import { PageHeader } from "../shared/PageHeader";
import { Layout } from "../layout/Layout";
import { useParams } from "react-router-dom";
import { readData } from "@/helper";
import { format, isValid, parseISO } from "date-fns";
import { Loader } from "lucide-react";

interface BlogData {
  publishDate?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function BlogDetails() {
  const params = useParams();
  const blogId = params?.id || null;
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState<BlogData>({});

  const GetBlogbyid = async () => {
    try {
      const res = await readData(`/blog/getBlogbyId/${blogId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.message === "Get Blog details successfully!") {
        const result = res.result;
        setData(result);
        setLoader(false);
      }
    } catch (error) {
      console.log("errorr", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (blogId) {
      const fetchData = async () => {
        await GetBlogbyid(); // ✔️ now state update happens asynchronously
      };

      fetchData();
    }
  }, []);
  const date = new Date(data.publishdate);

  const formattedDate = isValid(date)
    ? format(date, "LLLL d, yyyy")
    : "Invalid date";

  return (
    <Layout>
      <PageHeader
        title={data.title}
        description= {formattedDate}
        breadcrumbs={[
          { label: "Blog", href: "/services" },
          { label: data.title },
        ]}
      />
      <div className="container">
        <div className="blogDetail ">
          {/* <h1 className="sub-title mb-0 fs-1 mt-5 text-lg lh-1 ">
            {data.title}
          </h1> */}
          {loader ? (
            <Loader />
          ) : (
            <>
              <div>
                {/* <p style={{ fontSize: "12px", color: "gray" }} className="mb-5">
                  {" "}
                  {formattedDate}
                </p> */}
              </div>
              <div className="mt-5">
                <img
                  src={data.featuredImage?.url}
                  alt={data.featuredImage?.name}
                  className="w-full"
                />

                <div
                  className="mt-5 blogdetail-desc space-y-5 p-5"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                ></div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
