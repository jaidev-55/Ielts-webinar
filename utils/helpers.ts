/**
 * Scroll a horizontal container by a given offset
 * Positive = right, Negative = left
 */
export function scrollVideoContainer(
  containerId: string,
  offset: number,
  behavior: ScrollBehavior = "smooth",
) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(containerId);
  if (!el) return;

  el.scrollBy({
    left: offset,
    behavior,
  });
}

/**
 * Scroll a horizontal container to a specific item index
 */
export function scrollToVideoIndex(
  containerId: string,
  index: number,
  itemWidth = 300,
  gap = 20,
  behavior: ScrollBehavior = "smooth",
) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(containerId);
  if (!el) return;

  const scrollLeft = index * (itemWidth + gap);

  el.scrollTo({
    left: scrollLeft,
    behavior,
  });
}
