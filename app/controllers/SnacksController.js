import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawSnacks() {
  const snacks = AppState.snacks

  let template = ''

  snacks.forEach(snack => template += snack.SnackSmallTemplate)

  setHTML('snackCatalog', template)
}

export class SnacksController {
  constructor() {

    // SECTION PAGE LOAD
    console.log('check out my snacks!', AppState.snacks)
    _drawSnacks()

    // SECTION APPSTATE CHANGES
    // listener - later
    // listener - later
  }

  showSnack(snackName) {
    console.log('am I showing snack name?', snackName)
    snacksService.showSnack(snackName)


  }
}