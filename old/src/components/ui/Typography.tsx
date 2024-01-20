import { FC } from "react";
import { cn } from "@/lib/utils";

// Types
interface HeadingPropTypes extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}
interface ParaPropTypes extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}
interface CodePropTypes extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
  className?: string;
}

// Components
export const H1: FC<HeadingPropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl font-extrabold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2: FC<HeadingPropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn("text-3xl sm:text-4xl font-bold tracking-tight", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H3: FC<HeadingPropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H4: FC<HeadingPropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-xl sm:text-2xl font-medium tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H5: FC<HeadingPropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn("text-lg sm:text-xl font-normal tracking-tight", className)}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H6: FC<HeadingPropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-base sm:text-lg font-normal tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const P: FC<ParaPropTypes> = ({ children, className, ...props }) => {
  return (
    <p className={cn("text-base sm:text-lg font-normal", className)} {...props}>
      {children}
    </p>
  );
};

export const Code: FC<CodePropTypes> = ({ children, className, ...props }) => {
  return (
    <pre
      className={cn("text-sm sm:text-base font-light font-mono tracking-wide", className)}
      {...props}
    >
      {children}
    </pre>
  );
};
