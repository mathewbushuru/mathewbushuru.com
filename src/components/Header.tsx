import { Code } from "@/components/ui/Typography";

import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex flex-col gap-0 sm:gap-1">
      <Code className="text-xs font-extralight sm:text-sm sm:font-light">
        Hi, my name is
      </Code>
      <Code className="text-xl font-normal tracking-wider sm:-mx-0.5 lg:text-2xl">
        Mathew Bushuru
      </Code>
    </div>
  );
};

export default Header;
