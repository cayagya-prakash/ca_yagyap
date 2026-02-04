import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Play } from "lucide-react";
import {
  BlogPost,
  extractYouTubeId,
  getYouTubeThumbnail,
} from "../../hooks/useBlogPosts";

interface BlogCardProps {
  post: BlogPost;
  onVideoClick?: (post: BlogPost) => void;
}

export function BlogCard({ post, onVideoClick }: BlogCardProps) {
  const isVideo = post.posttype === "video";

const handleClick = (e: React.MouseEvent) => {
  if (post.posttype === "video" && onVideoClick) {
    e.preventDefault();
    onVideoClick(post);
  }
};

  const CardWrapper = isVideo ? "button" : Link;
  const cardProps = isVideo
    ? { onClick: handleClick, type: "button" as const }
    : { to: post.id ? `/blog/${post.id}` : "#" };

  return (
    <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-all group">
      {/* Thumbnail Section */}
      {post.thumbnail && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={post.thumbnail.url}
            alt={post.thumbnail.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* {isVideo && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 text-white fill-white ml-1" />
              </div>
            </div>
          )} */}
        </div>
      )}

      <div>
        {post.featuredImage && (
          <img src={post.featuredImage.url} alt={post.featuredImage.name} />
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-accent uppercase">
            {post.tag}
          </span>
          {isVideo && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
              Video
            </span>
          )}
        </div>

        <h2 className="font-heading text-xl font-semibold mt-2 mb-3 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.summry}
        </p>
{/* <div className="text-sm text-muted-foreground mb-4 line-clamp-2"
      dangerouslySetInnerHTML={{__html: post.content}}
    /> */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {post.publishdate}
          </div>

          {isVideo ? (
            <Link
              to={post.videoLink}
              target="_blank"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Watch Video <Play className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <Link
              to={post._id ? `/blog/${post._id}` : "#"}
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
