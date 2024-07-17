import { notFound } from "next/navigation";
import { CalendarDaysIcon } from "lucide-react";

import { getBlogArticles } from "@/app/writing/writing-utils";
import { formatDate } from "@/lib/utils";

import CustomMDX from "@/components/custom-mdx";

export async function generateStaticParams() {
  const articles = getBlogArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: any) {
  const article = getBlogArticles().find(
    (article) => article.slug === params.slug,
  );

  if (!article) return { title: "Mathew Bushuru | Blog" };

  return {
    title: `Mathew Bushuru | Blog - ${article.blogMetadata.title}`,
    description: article.blogMetadata.summary,
  };
}

export default function ArticlePage({ params }: any) {
  const article = getBlogArticles().find(
    (article) => article.slug === params.slug,
  );

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="p-4 pb-8">
        <h3 className="text-xl font-semibold sm:text-2xl mb-2">
          {article.blogMetadata.title}
        </h3>
        <div className="flex items-center text-sm text-muted-foreground/75 mb-2">
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          {formatDate(article.blogMetadata.publishedAt, true)}
        </div>

        <article className="prose max-w-none dark:prose-invert">
          <CustomMDX source={article.content} />
        </article>
      </div>
    </>
  );
}
