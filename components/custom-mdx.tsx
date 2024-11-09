import Link from "next/link";
import Image from "next/image";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeToc from "@jsdevtools/rehype-toc";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const components = {
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
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypeHighlight, [rehypeToc, { customizeTOC }]],
        },
      }}
      {...props}
    />
  );
}

const customizeTOC = (toc: any): any => {
  try {
    const { children } = toc;
    const childrenOfChildren = children?.[0]?.children;
    if (!children?.length || !childrenOfChildren?.length) return null;
  } catch (e) {}
  return {
    type: "element",
    tagName: "div",
    properties: { className: "toc" },
    children: [
      {
        type: "element",
        tagName: "p",
        properties: { className: "title" },
        children: [
          {
            type: "text",
            value: "Table of Contents",
          },
        ],
      },
      ...(toc.children || []),
    ],
  };
};
