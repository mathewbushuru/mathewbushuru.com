import Link from "next/link";
import Image from "next/image";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const components = {
  code: Code,
  Image,
  Link,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
};

export default function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      components={{ ...components, ...(props.components || {}) }}
      {...props}
    />
  );
}

function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(`${children}`);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
