import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

const components = {
  code: Code,
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
