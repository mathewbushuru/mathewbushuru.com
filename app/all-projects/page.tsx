import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Mathew Bushuru | Projects",
};

export default function AllProjectsPage() {
  return (
    <div>
      <h1 className="mb-6 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        All Projects
      </h1>

      {allProjectItems.map((project, index) => (
        <div className="mb-12" key={index}>
          <div className="rounded-md bg-primary/20 p-2 dark:bg-primary/10 lg:flex lg:items-center lg:justify-center lg:gap-4 lg:py-8">
            <img
              src={project.ipadPhotoLink}
              alt=""
              className="mx-auto  w-80 sm:h-80 sm:w-[26rem] lg:mx-0"
            />
            <img
              src={project.iphonePhotoLink}
              alt=""
              className="hidden h-72 w-[10rem] lg:inline "
            />
          </div>
          <h3 className="mt-4  text-lg font-semibold sm:text-2xl ">
            {project.title}
          </h3>
          {project.descriptionSectionsArr.map((section, index) => (
            <p className="mt-2 leading-7" key={index}>
              {section}
            </p>
          ))}
          <div className="mt-2 space-x-2">
            {project.techStackArr.map((tech, index) => (
              <Badge variant="secondary" key={index}>
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-3 space-x-2">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <span>GitHub</span>
                <ArrowUpRightIcon className="ml-1 h-4 w-4" />
              </Button>
            </a>
            {project.liveLinkArr.map((linkInfo, index) => (
              <a href={linkInfo.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <span>
                    Live {linkInfo.linkDesc && `(${linkInfo.linkDesc})`}
                  </span>
                  <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const allProjectItems = [
  {
    title: "Design System",
    ipadPhotoLink: "/mockups/ipad/component_library_ipad.png",
    iphonePhotoLink: "/mockups/iphone/component_library_iphone.png",
    descriptionSectionsArr: [
      "This is my personal design system based on a book by Brad Frost called Atomic Design. This includes my theme and colour palette (used on this website), component primitives built on top of React Aria and RadixUI, and component composites which combine multiple primitives.",
      "I then use these component primitives and composites to build websites for example companies. An example is LearnCo which is inspired by Coursera.",
    ],
    techStackArr: ["TypeScript", "ReactJS", "TailwindCSS", "Vite"],
    githubLink: "https://github.com/mathewbushuru/design-system",
    liveLinkArr: [
      {
        linkDesc: "current version",
        link: "https://design.mathewbushuru.com/",
      },
      {
        linkDesc: "initial version",
        link: "https://matt-components.vercel.app/",
      },
    ],
  },
  {
    title: "ProSearchX",
    ipadPhotoLink: "/mockups/ipad/prosearchx_ipad.png",
    iphonePhotoLink: "/mockups/iphone/prosearchx_iphone.png",
    descriptionSectionsArr: [
      "A wrapper around Google Search with additional features to make it more effective and powerful. It is for power users and professionals who require an easier and faster way to unlock Google Search capabilities.",
      "My motivation for this project is I usually end up modifying my Google searches for a second search, for example, adding StackOverflow to a  programming question, or searching for an error in a version of a library from last month but getting results from years ago. This  project attempts to solve this.",
    ],
    techStackArr: ["JavaScript", "ReactJS", "Vanilla CSS"],
    githubLink: "https://github.com/mathewbushuru/ProSearchX",
    liveLinkArr: [{ linkDesc: null, link: "https://pro-search-x.vercel.app/" }],
  },
];
