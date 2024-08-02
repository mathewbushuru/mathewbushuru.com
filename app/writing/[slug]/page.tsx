import { notFound } from "next/navigation";

import { getBlogArticles } from "@/app/writing/writing-utils";

import CustomMDX from "@/components/custom-mdx";
import DateComponent from "@/components/ui/date-component";

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
        <h3 className="mb-2 text-xl font-semibold sm:text-2xl">
          {article.blogMetadata.title}
        </h3>
        <DateComponent date={article.blogMetadata.publishedAt} />

        <article className="prose max-w-none dark:prose-invert">
          <CustomMDX source={article.content} />
        </article>
      </div>
    </>
  );
}
