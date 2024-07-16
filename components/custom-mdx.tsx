import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeLine } from "@/components/code-line";

const components = {
  code: Code,
  CodeLine: Code,
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
  return <pre><code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} /></pre>;
}
