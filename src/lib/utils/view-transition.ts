export function runViewTransition(kind: string, update: () => void) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduceMotion) {
    update();
    return null;
  }
  const root = document.documentElement;
  root.dataset.transition = kind;
  const transition = document.startViewTransition(update);
  void transition.finished.finally(() => {
    delete root.dataset.transition;
  });
  return transition;
}
