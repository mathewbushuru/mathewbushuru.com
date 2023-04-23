import { FC } from "react";
import { cn } from "@/lib/utils";

interface PropTypes extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const H1: FC<PropTypes> = ({ children, className, ...props }) => {
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

export const H2: FC<PropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-3xl sm:text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H3: FC<PropTypes> = ({ children, className, ...props }) => {
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

export const H4: FC<PropTypes> = ({ children, className, ...props }) => {
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

export const H5: FC<PropTypes> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        "text-lg sm:text-xl font-normal tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H6: FC<PropTypes> = ({ children, className, ...props }) => {
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
