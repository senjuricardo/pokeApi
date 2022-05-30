const h2 = function (text, classList = []) {
  const h2Events = document.createElement("h2");
  h2Events.textContent = text;
  classList.forEach((classe) => h2Events.classList.add(classe));
  return h2Events;
};

export { h2 };
