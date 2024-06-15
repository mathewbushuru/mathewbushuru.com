import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

import { favoriteProjects } from "@/lib/constants";

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
          algorithm design, electronics, education, web and mobile development.
        </p>

        <p className="mb-4 leading-7 lg:mb-6">
          I currently work on Point of Sales systems at the head office of
          Choices Markets which is a division of{" "}
          <a
            href="https://pattisonfoodgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline hover:underline-offset-4"
          >
            Pattison Food Group
          </a>
          . Previously, I have worked on a React Native mobile app at{" "}
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

      {/* Featured projects  */}
      <div>
        <h1 className="mb-4 text-xl font-semibold sm:text-2xl lg:mb-6">
          Featured Projects
        </h1>
        <Table>
          <TableCaption>
            See more in the All Projects page{" "}
            <span className="hidden font-mono lg:inline">
              [Quick Shortcut - Press 4]
            </span>
          </TableCaption>
          <TableHeader>
            <TableRow className="hover:bg-background">
              <TableHead className="pl-2 text-left lg:min-w-32">Name</TableHead>
              <TableHead className="pl-2 text-left">Description</TableHead>
              <TableHead className="pl-2 text-left sm:min-w-36">
                Links
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="group">
            {favoriteProjects.map((project, index) => (
              <TableRow
                key={index}
                className="hover:bg-background group-hover:opacity-70 group-hover:hover:opacity-100"
              >
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
