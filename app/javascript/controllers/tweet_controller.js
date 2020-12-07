// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "field", "output" ]

  static classes = [ "overLimit" ]

  static values = {
    characterCount: Number,
  }

  connect() {
    this.change()
  }

  change() {
    let length = this.fieldTarget.value.length
    this.outputTarget.textContent = `${length} characters`

    if (length > this.characterCountValue) {
      this.outputTarget.classList.add(this.overLimitClass)
    } else {
      this.outputTarget.classList.remove(this.overLimitClass)
    }
  }
}
