class Tabs {
  static CLASSES = {
    titleCont: "tabs-title-conteiner",
    bodyCont: "tabs-body-conteiner",
    title: "tabs-title",
    body: "tabs-body",
    display: "display",
  };

  constructor(el) {
    this.el = el;
    this.el.addEventListener("click", this.onTitleClick);
    this.arrTitles = [...el.children[0].children];
    this.arrBodies = [...el.children[1].children];

    console.log(this.arrTitles);
    console.log(this.arrBodies);
    this.setChildrenClass();
  }

  setChildrenClass() {
    this.arrTitles.forEach((e) => {
      e.classList.add(Tabs.CLASSES.title);
    });
    this.arrBodies.forEach((e) => {
      e.classList.add(Tabs.CLASSES.body);
    });
    console.log(this.arrTitles);
    console.log(this.arrBodies);
  }

  onTitleClick = (event) => {
    const target = event.target;

    this.arrTitles.forEach((et, it) => {
      if (et === target) {
        this.arrBodies.forEach((eb, ib) => {
          if (it === ib) {
            eb.classList.toggle(Tabs.CLASSES.display);
          } else {
            eb.classList.remove(Tabs.CLASSES.display);
          }
        });
      }
    });
  };
}
