import MatchMedia from "@/modules/MatchMedia.js";

const rootSelector = '[data-js-ditails-card]'

class DitailsCard {
  stateClasses = {
    isCurrent: 'is-current',
    isVertical: 'ditails-card--vertical',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.isCurrent = this.rootElement.classList.contains(this.stateClasses.isCurrent)

    this.bindEvents()
    this.toggleClassVertical(MatchMedia.mobile.matches)
  }

  toggleClassVertical(isMobileDevice) {
    if (isMobileDevice) {
      this.rootElement.classList.remove(this.stateClasses.isVertical);
    } else if (this.isCurrent) {
      this.rootElement.classList.add(this.stateClasses.isVertical);
    }
  }

  onMobileMatchMediaChange = (event) => {
    this.toggleClassVertical(event.matches)
  }

  bindEvents() {
    MatchMedia.mobile.addEventListener('change', this.onMobileMatchMediaChange)
  }
}

class DitailsCardCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new DitailsCard(element)
    })
  }
}

export default DitailsCardCollection
