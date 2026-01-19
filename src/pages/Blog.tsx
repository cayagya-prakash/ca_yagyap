import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { BlogCard } from "../components/blogs/BlogCard";
import { VideoModal } from "../components/blogs/VideoModal";
import { useBlogPosts, BlogPost } from "../hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { data: posts, isLoading, error } = useBlogPosts();
  const [selectedVideo, setSelectedVideo] = useState<BlogPost | null>(null);
  console.log("selectedVideo", selectedVideo);
  const handleVideoClick = (post: BlogPost) => {
    console.log("handleVideoClick", post);
    setSelectedVideo(post);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const getYouTubeVideoId = (url: string): string | null => {
    try {
      if (url.includes("youtu.be")) {
        return url.split("/").pop() || null;
      }

      const parsedUrl = new URL(url);
      return parsedUrl.searchParams.get("v");
    } catch {
      return null;
    }
  };
  {
    console.log("posts", posts);
  }
  return (
    <Layout>
      <PageHeader
        title="Blog & Resources"
        description="Educational updates on taxation and compliance matters."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding">
        <div className="container">
          {isLoading && (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg border border-border overflow-hidden"
                >
                  <Skeleton className="aspect-video w-full" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Unable to load posts. Please try again later.
              </p>
            </div>
          )}

          {posts && (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <>
                 {post.status === "publish" ? 
                  <BlogCard
                    key={post.id}
                    post={post}
                    onVideoClick={handleVideoClick}
                  />:""}
                </>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={closeVideoModal}
          videoId={getYouTubeVideoId(selectedVideo.videoLink)}
          title={selectedVideo.title}
        />
      )}
    </Layout>
  );
}
