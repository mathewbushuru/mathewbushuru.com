import { ArticleLink } from "@/components/article-link";

import { getBlogArticles } from "@/app/writing/writing-utils";
import { formatDate } from "@/lib/utils";

export function FeaturedArticlesList() {
  const allArticles = getBlogArticles();

  return (
    <div className="flex flex-col gap-1">
      {allArticles
        .sort((a, b) => {
          if (
            new Date(a.blogMetadata.publishedAt) >
            new Date(b.blogMetadata.publishedAt)
          ) {
            return -1;
          } else {
            return 1;
          }
        })
        .map((post) =>
          post.blogMetadata.featured === "yes" ? (
            <ArticleLink
              key={post.slug}
              title={post.blogMetadata.title}
              href={`/writing/${post.slug}`}
              formattedDate={formatDate(post.blogMetadata.publishedAt, false)}
              contentPreview={post.blogMetadata.preview}
              published={post.blogMetadata.published === "yes"}
            />
          ) : null,
        )}
    </div>
  );
}
