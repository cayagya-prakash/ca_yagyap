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
