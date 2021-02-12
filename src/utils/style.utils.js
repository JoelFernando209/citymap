export const windowScrollEvent = () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
};

export const scrollEventTo = elementToGo => {
  elementToGo.scrollIntoView({ behavior: 'smooth', block: 'center' });
};