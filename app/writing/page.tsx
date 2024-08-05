import Link from "next/link";
import { CalendarDaysIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { getBlogArticles } from "@/app/writing/writing-utils";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Mathew Bushuru | Blog",
};

export default function WritingPage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Writing
      </h1>

      <div className="flex flex-col gap-1">
        <AllArticlesList />
      </div>
    </div>
  );
}

function AllArticlesList() {
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
        .map((post) => (
          <ArticleLink
            key={post.slug}
            title={post.blogMetadata.title}
            href={`/writing/${post.slug}`}
            formattedDate={formatDate(post.blogMetadata.publishedAt, false)}
            contentPreview={post.blogMetadata.preview}
            published={post.blogMetadata.published === "yes"}
          />
        ))}
    </div>
  );
}

function ArticleLink({
  title,
  href,
  formattedDate,
  contentPreview,
  published
}: {
  title: string;
  href: string;
  formattedDate: string;
  contentPreview: string;
  published: boolean
}) {
  return (
    <Link href={href}>
      <div className="group rounded-sm py-4 transition-all duration-300 sm:hover:cursor-pointer sm:hover:bg-popover sm:hover:px-4 sm:hover:shadow-md">
        <h3 className="mb-1 text-lg font-semibold sm:text-xl lg:mb-2">
          {title}
        </h3>
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground group-hover:text-foreground lg:mb-2">
          {contentPreview}
        </p>
        <div className="flex items-center text-sm text-muted-foreground/75">
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          {formattedDate}
          {!published && <Badge className="ml-2">Draft</Badge>}
        </div>
      </div>
    </Link>
  );
}
