import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Play } from "lucide-react";
import { BlogPost, extractYouTubeId, getYouTubeThumbnail } from "@/hooks/useBlogPosts";

interface BlogCardProps {
  post: BlogPost;
  onVideoClick?: (post: BlogPost) => void;
}

export function BlogCard({ post, onVideoClick }: BlogCardProps) {
  const isVideo = post.type === "video";
  
  // Get thumbnail: use provided thumbnail, or generate from YouTube for videos
  const getThumbnail = (): string | null => {
    if (post.thumbnail) return post.thumbnail;
    if (isVideo && post.link) {
      const videoId = extractYouTubeId(post.link);
      if (videoId) return getYouTubeThumbnail(videoId);
    }
    return null;
  };

  const thumbnail = getThumbnail();

  const handleClick = (e: React.MouseEvent) => {
    if (isVideo && onVideoClick) {
      e.preventDefault();
      onVideoClick(post);
    }
  };

  const CardWrapper = isVideo ? "button" : Link;
  const cardProps = isVideo 
    ? { onClick: handleClick, type: "button" as const }
    : { to: post.slug ? `/blog/${post.slug}` : "#" };

  return (
    <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-all group">
      {/* Thumbnail Section */}
      {thumbnail && (
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={thumbnail} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {isVideo && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 text-white fill-white ml-1" />
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-accent uppercase">{post.tag}</span>
          {isVideo && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">Video</span>
          )}
        </div>
        
        <h2 className="font-heading text-xl font-semibold mt-2 mb-3 line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          
          {isVideo ? (
            <button 
              onClick={handleClick}
              className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Watch Video <Play className="ml-2 h-4 w-4" />
            </button>
          ) : (
            <Link 
              to={post.slug ? `/blog/${post.slug}` : "#"} 
              className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
