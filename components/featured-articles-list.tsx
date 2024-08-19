import { ArticleLink } from "@/components/article-link";

import { getBlogArticles } from "@/app/writing/writing-utils";
import { formatDate } from "@/lib/utils";

export function FeaturedArticlesList() {
  const allArticles = getBlogArticles();

  return (
    <div className="flex flex-col gap-1">
      <ArticleLink
        title="Data Structures and Algorithms"
        href="https://dsa.mathewbushuru.com"
        formattedDate={"2024 (Updated constantly)"}
        contentPreview={
          "This article contains in-depth explanations to key computer science concepts, algorithms and data structures. They are implemented in `JavaScript`, `Java`, `C++`, `Python`, `TypeScript`, `C` and `C#`. This repository is intended to be my online reference / notes as I learn these topics and I hope you find this information valuable."
        }
        published={true}
        targetBlank
      />
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
