export const scrollToMain = () => {
  const mainSection = document.getElementById("main");
  if (mainSection) {
    const yOffset = window.screen.width >= 1024 ? -80 : -60; // Ajusta esta cantidad según tus necesidades
    const y =
      mainSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
