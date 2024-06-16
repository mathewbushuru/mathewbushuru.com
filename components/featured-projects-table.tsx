import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

import { featuredProjects } from "@/lib/constants";

export const FeaturedProjectsTable = () => {
  return (
    <Table>
      <TableCaption>
        See more in the All Projects page{" "}
        <span className="hidden font-mono lg:inline">
          [Quick Shortcut - Press 5]
        </span>
      </TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-background">
          <TableHead className="pl-2 text-left lg:min-w-32">Name</TableHead>
          <TableHead className="pl-2 text-left">Description</TableHead>
          <TableHead className="pl-2 text-left sm:min-w-36">Links</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="group">
        {featuredProjects.map((project, index) => (
          <TableRow
            key={index}
            className="transition-opacity duration-300 hover:bg-background group-hover:opacity-40 group-hover:hover:opacity-100"
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
  );
};
