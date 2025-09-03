import MatchMedia from "@/modules/MatchMedia.js"

const rootSelector = "[data-js-details-card]"

class DetailsCard {
  stateClasses = {
    isCurrent: "is-current",
    isVertical: "details-card--vertical",
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.isCurrent = this.rootElement.classList.contains(
      this.stateClasses.isCurrent,
    )

    this.bindEvents()
    this.toggleClassVertical(MatchMedia.mobile.matches)
  }

  toggleClassVertical(isMobileDevice) {
    if (isMobileDevice) {
      this.rootElement.classList.remove(this.stateClasses.isVertical)
    } else if (this.isCurrent) {
      this.rootElement.classList.add(this.stateClasses.isVertical)
    }
  }

  onMobileMatchMediaChange = (event) => {
    this.toggleClassVertical(event.matches)
  }

  bindEvents() {
    MatchMedia.mobile.addEventListener("change", this.onMobileMatchMediaChange)
  }
}

class DetailsCardCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new DetailsCard(element)
    })
  }
}

export default DetailsCardCollection
