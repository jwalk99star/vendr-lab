export class Snack{

  constructor(data){
    console.log("snack class exists in Snack.js")
    // debugger
    this.name = data.name
    this.price = data.price
    this.emoji = data.emoji
  }

  get SnackSmallTemplate () {
    return `
    <div class="col-2 p-1">
    <div onclick="app.SnacksController.showSnack('${this.name}')" class="bg-secondary selectable text-center elevation-4" title="${this.name}">
      <p class="fs-1">${this.emoji}</p>
    </div>
  </div>
  `
  }

  get SnackLargeTemplate () {
    return `
    <div class="col-8 m-auto">
    <div class="bg-primary text-center p-5">
      <p class="available-snack">${this.emoji}</p>
      <div class="d-flex justify-content-between text-light fs-2">
        <p>Name: ${this.name}</p>
        <p>Price: ${this.price}</p>
      </div>
    </div>
  </div>
  `
  }


}