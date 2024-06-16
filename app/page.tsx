import { FeaturedProjectsTable } from "@/components/featured-projects-table";
import { FeaturedArticlesList } from "@/components/featured-articles-list";

export default function HomePage() {
  return (
    <>
      {/* Intro  */}
      <div className="pb-6 lg:pb-8">
        <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
          Home
        </h1>

        <p className="mb-4 leading-7 lg:mb-6">
          Hello 👋 I'm Mathew Bushuru, a software engineer based in Vancouver,
          Canada. My interests span a broad variety of subjects, encompassing
          algorithm design, electronics, education, e-commerce, web and mobile
          development. Welcome to my personal website, where you get a behind
          the scenes look of what I'm currently learning, exploring and
          creating.
        </p>
      </div>

      {/* Featured projects  */}
      <div className="pb-6 lg:pb-8">
        <h1 className="mb-4 text-xl font-semibold sm:text-2xl lg:mb-6">
          Featured Projects
        </h1>
        <FeaturedProjectsTable />
      </div>

      {/* Featured articles  */}
      <div className="pb-6 lg:pb-8">
        <h1 className="mb-4 text-xl font-semibold sm:text-2xl lg:mb-6">
          Featured Articles
        </h1>
        <FeaturedArticlesList />
      </div>
    </>
  );
}
