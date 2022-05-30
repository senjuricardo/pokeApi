const img = function (link, classList = []) {
    const pEvents = document.createElement("img");
    pEvents.src = link;
    classList.forEach((classe) => pEvents.classList.add(classe));
    return pEvents;
  };
  
  export { img };
  