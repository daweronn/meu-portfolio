export function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-background bg-[radial-gradient(circle_800px_at_100%_200px,hsl(var(--glow)),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--glow)),transparent)]"
    />
  );
}
