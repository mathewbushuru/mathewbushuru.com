import { cn } from "@/lib/utils";

export function CodeLine({
  notChanged = false,
  inset = 0,
  children,
}: {
  inset?: number;
  notChanged?: boolean;
  children?: React.ReactNode;
}) {
  const SPACES_IN_TAB = 2;

  const insetSpaces = new Array(inset * SPACES_IN_TAB)
    .fill(null)
    .map((_, index) => <span key={index}>&nbsp;</span>);

  return (
    <pre className={cn("", notChanged && "opacity-60")}>
      {children ? (
        <>
          {...insetSpaces}
          {children}
        </>
      ) : (
        <>&nbsp;</>
      )}
    </pre>
  );
}
