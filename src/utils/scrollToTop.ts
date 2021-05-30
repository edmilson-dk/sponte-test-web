export function scrollToTop(toTop: boolean) {
  const htmlBodyElemet = document.querySelector("body");

  if (!htmlBodyElemet) return;

  if (toTop) {
    htmlBodyElemet.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}