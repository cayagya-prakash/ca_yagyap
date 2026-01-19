import { readData } from "@/helper";
import { useQuery } from "@tanstack/react-query";

export interface ImageFile {
  name: string;
  url: string;
}

export interface BlogPost {
  id: string;
  _id: string;
  posttype: "blog" | "video";
  title: string;
  content: string;
  publishdate: string;
  tag: string;
  summry: string;
  status: string;
  featuredImage?: ImageFile; // ✅ fixed
  thumbnail?: ImageFile; // ✅ already correct
  videoLink?: string; // YouTube link
  slug?: string; // Blog detail page
}

// Extract YouTube video ID from various URL formats
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Generate YouTube thumbnail URL
export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// Mock data - replace with actual API call when backend is ready
// const mockPosts: BlogPost[] = [
//   {
//     id: "1",
//     type: "blog",
//     title: "Understanding New ITR Forms for AY 2024-25",
//     description:
//       "A comprehensive guide to the latest changes in Income Tax Return forms and how they affect individual taxpayers.",
//     date: "Dec 15, 2024",
//     tag: "Income Tax",
//     slug: "understanding-new-itr-forms-ay-2024-25",
//   },
//   {
//     id: "2",
//     type: "video",
//     title: "GST Filing Step-by-Step Tutorial",
//     description:
//       "Learn the complete process of filing GST returns with this educational walkthrough.",
//     date: "Dec 12, 2024",
//     tag: "GST",
//     link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: "3",
//     type: "blog",
//     title: "Key Changes in Companies Act Amendment 2024",
//     description:
//       "Important updates to corporate law that businesses need to be aware of for compliance.",
//     date: "Dec 5, 2024",
//     tag: "Corporate Law",
//     slug: "key-changes-companies-act-2024",
//   },
//   {
//     id: "4",
//     type: "video",
//     title: "Tax Saving Options Under Section 80C Explained",
//     description:
//       "Educational video explaining various tax-saving instruments available under Section 80C.",
//     date: "Nov 28, 2024",
//     tag: "Tax Planning",
//     link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: "5",
//     type: "blog",
//     title: "GST Compliance Checklist for Businesses",
//     description:
//       "Essential compliance requirements every business must follow under the GST regime.",
//     date: "Nov 20, 2024",
//     tag: "GST",
//     slug: "gst-compliance-checklist-businesses",
//   },
//   {
//     id: "6",
//     type: "video",
//     title: "Understanding TDS Provisions",
//     description:
//       "A detailed explanation of Tax Deducted at Source provisions and compliance requirements.",
//     date: "Nov 15, 2024",
//     tag: "Income Tax",
//     link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
// ];

async function fetchBlogPosts(): Promise<BlogPost[]> {
  // TODO: Replace with actual API endpoint when backend is ready
  const res = await readData(`/blog/getAllBlogs`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.blogs;

  // Simulating API delay
  // await new Promise((resolve) => setTimeout(resolve, 300));
  // return mockPosts;
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
  });
}
