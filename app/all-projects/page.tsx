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
              className="mx-auto  w-80 sm:h-96 sm:w-[32rem] lg:mx-0"
            />
            <img
              src={project.iphonePhotoLink}
              alt=""
              className="hidden h-[22rem] lg:inline "
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
                <span className="">GitHub</span>
                <ArrowUpRightIcon className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <span className="">Live</span>
                <ArrowUpRightIcon className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

const allProjectItems = [
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
    liveLink: "https://pro-search-x.vercel.app/",
  },
  {
    title: "ProSearchX 2",
    ipadPhotoLink: "/mockups/ipad/prosearchx_ipad.png",
    iphonePhotoLink: "/mockups/iphone/prosearchx_iphone.png",
    descriptionSectionsArr: [
      "A wrapper around Google Search with additional features to make it more effective and powerful. It is for power users and professionals who require an easier and faster way to unlock Google Search capabilities.",
      "My motivation for this project is I usually end up modifying my Google searches for a second search, for example, adding StackOverflow to a  programming question, or searching for an error in a version of a library from last month but getting results from years ago. This  project attempts to solve this.",
    ],
    techStackArr: ["JavaScript", "ReactJS", "Vanilla CSS"],
    githubLink: "https://github.com/mathewbushuru/ProSearchX",
    liveLink: "https://pro-search-x.vercel.app/",
  },
];
