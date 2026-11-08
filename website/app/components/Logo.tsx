type LogoProps = {
  /** "light" = white letters (for blue backgrounds), "dark" = navy letters (for light backgrounds) */
  variant?: "light" | "dark";
  className?: string;
};

const LETTER_COLOR = {
  light: "#ffffff",
  dark: "#131347",
} as const;

// VI. wordmark, traced from the brand logo files.
export default function Logo({ variant = "light", className }: LogoProps) {
  const letters = LETTER_COLOR[variant];

  return (
    <svg
      viewBox="287 164 1427 797"
      role="img"
      aria-label="Vici"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        fill={letters}
        points="287,164 484,164 720,720 960,164 1143,164 804,947 623,947"
      />
      <rect fill={letters} x="1207" y="164" width="183" height="783" />
      <rect fill="#f98513" x="1503" y="754" width="211" height="207" />
    </svg>
  );
}
