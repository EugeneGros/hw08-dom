class Popup {
  static CLASSES = {
    tabsColor: "tabs-color",
    fontColor: "font-color",
  };

  constructor(el) {
    this.el = el;
    this.el.classList.toggle("open");
    this.el.appendChild(menu);

    this.el.addEventListener("click", this.onTitleClick);
    this.arrTitles = [...el.children[0].children];
    this.setChildrenClass();
  }

  setChildrenClass() {
    this.arrTitles.forEach((e) => {
      e.classList.add(Popup.CLASSES.fontColor);
    });
  }

  onTitleClick = (event) => {
    const target = event.target;
    this.arrTitles.forEach((et) => {
      if (et === target) {
        et.classList.toggle(Popup.CLASSES.tabsColor);
      } else {
        et.classList.remove(Popup.CLASSES.tabsColor);
      }
    });
  };
}
