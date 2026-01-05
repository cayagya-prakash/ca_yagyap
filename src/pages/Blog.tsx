import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { BlogCard } from "@/components/blog/BlogCard";
import { VideoModal } from "@/components/blog/VideoModal";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { data: posts, isLoading, error } = useBlogPosts();
  const [selectedVideo, setSelectedVideo] = useState<BlogPost | null>(null);

  const handleVideoClick = (post: BlogPost) => {
    setSelectedVideo(post);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

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
                <div key={i} className="bg-card rounded-lg border border-border overflow-hidden">
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
              <p className="text-muted-foreground">Unable to load posts. Please try again later.</p>
            </div>
          )}

          {posts && (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  onVideoClick={handleVideoClick}
                />
              ))}
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-12">
            Content is for general information only and does not constitute professional advice.
          </p>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && selectedVideo.link && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={closeVideoModal}
          videoUrl={selectedVideo.link}
          title={selectedVideo.title}
        />
      )}
    </Layout>
  );
}
