import type { ReactNode } from "react";

// Shared page width and gutters, matching the header.
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
