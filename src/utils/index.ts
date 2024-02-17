export const getDateTime = (currentDate: Date, withTime: boolean) => {
  // const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(currentDate.getFullYear());
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  return withTime
    ? `${day}/${month}/${year} ${hours}:${minutes}`
    : `${day}/${month}/${year}`;
};

export const animateSections = (key:string) => {

  const { gsap } = require('gsap/dist/gsap')
  const { ScrollTrigger } = require('gsap/dist/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger);

  const sections: Element[] = gsap.utils.toArray(key);
  sections.forEach((section, index) => {
    gsap.set(section, { y: 30, opacity: 0 });

    ScrollTrigger.create({
      id: index.toString(),
      toggleActions: "restart none restart none",
      trigger: section,
      start: () => `top-=${gsap.getProperty(section, "y")} bottom-=200`,
      end: () => `+=${section.clientHeight}`,
      onEnter: () => {
        gsap.to(section, { y: 0, opacity: 1 });
      },
    });
  });
};

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
