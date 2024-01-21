import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

export default function HomePage() {
  return (
    <>
      {/* Intro  */}
      <div className="pb-8">
        <h1 className="mb-6 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
          Home
        </h1>

        <p className="mb-6 leading-7">
          Hello 👋 I'm Mathew Bushuru, a software engineer based in Vancouver,
          Canada. My interests span a broad variety of subjects, encompassing
          algorithm design, electronics, education, web and mobile development.
        </p>

        <p className="mb-6 leading-7">
          I am currently working on Point of Sales systems at the head office of
          Choices Markets which is a division of{" "}
          <a
            href="https://pattisonfoodgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline hover:underline-offset-4"
          >
            Pattison Food Group
          </a>
          . Previously, I have worked on a React Native mobile app for{" "}
          <a
            href="https://www.linkedin.com/company/getamelia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline hover:underline-offset-4"
          >
            Amelia
          </a>
          , built a web-based lab management system for the Molecular and
          Advanced Pathology Core (MAPCore) lab at{" "}
          <a
            href="https://www.bccrc.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline hover:underline-offset-4"
          >
            BC Cancer
          </a>
          , and worked on a machine learning recommender system at{" "}
          <a
            href="https://www.cellulant.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline hover:underline-offset-4"
          >
            Cellulant
          </a>
          .
        </p>

        <p className="leading-7">
          I am always open to working on new project ideas so please feel free
          to connect with me.
        </p>
      </div>

      {/* Favorite projects  */}
      <div>
        <h1 className="mb-6 text-xl font-semibold sm:text-2xl">
          Favourite Projects
        </h1>
        <Table>
          <TableCaption>See more in the Journey page</TableCaption>
          <TableHeader>
            <TableRow className="hover:bg-background">
              <TableHead className="pl-2 text-left lg:min-w-32">Name</TableHead>
              <TableHead className="pl-2 text-left">Description</TableHead>
              <TableHead className="pl-2 text-left lg:min-w-36">
                Links
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {favoriteProjects.map((project, index) => (
              <TableRow key={index} className="hover:bg-background">
                <TableCell className="pl-2 text-left align-top">
                  {project.name}
                </TableCell>
                <TableCell className="pl-2 text-left align-top">
                  {project.description}
                </TableCell>
                <TableCell className="pl-2 text-left align-top">
                  {project.websiteLink && (
                    <>
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline hover:underline-offset-4"
                      >
                        Website
                      </a>
                      <span>, </span>
                    </>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:underline hover:underline-offset-4"
                    >
                      GitHub
                    </a>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

const favoriteProjects = [
  {
    name: "Design System",
    description: "My personal design system",
    websiteLink: "https://design.mathewbushuru.com/",
    githubLink: "https://github.com/mathewbushuru/design-system",
  },
  {
    name: "Todoist Monorepo",
    description:
      "A production ready application template built with React, React Native, TypeScript, Express and MySQL in a monorepo powered by Turborepo (Todoist clone).",
    websiteLink: "https://todoist.mathewbushuru.com/",
    githubLink: "https://github.com/mathewbushuru/todoist-monorepo",
  },
  {
    name: "Algorithms",
    description:
      "Repository of computer science algorithms and data structures implemented in JavaScript, Java, C++, Python, TypeScript and C.",
    websiteLink: null,
    githubLink: "https://github.com/mathewbushuru/algorithms",
  },
  {
    name: "Soma Offline",
    description:
      "An EdTech company providing access to educational resources to communities with limited or no internet access",
    websiteLink: "https://www.somaoffline.com/",
    githubLink: "https://github.com/soma-offline",
  },
  {
    name: "ProSearchX",
    description:
      "A wrapper around Google Search with additional features to make it more effective and powerful.",
    websiteLink: "https://pro-search-x.vercel.app/",
    githubLink: "https://github.com/mathewbushuru/ProSearchX",
  },
];
