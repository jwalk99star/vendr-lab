import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService";
import { setHTML } from "../utils/Writer.js";

function _drawSnacks() {
  const snacks = AppState.snacks

  let template = ''

  snacks.forEach(snack => template += snack.SnackSmallTemplate)

  setHTML('snackCatalog', template)
}

function _drawAvailableSnack() {
  const singleSnack = AppState.availableSnack
  console.log('draw available', singleSnack);
  setHTML('availableSnack', singleSnack.SnackLargeTemplate)
}

export class SnacksController {
  constructor() {

    // SECTION PAGE LOAD
    console.log('check out my snacks!', AppState.snacks)
    _drawSnacks()
    _drawMySnacks()

    // SECTION APPSTATE CHANGES
    // listener
    AppState.on('availableSnack', _drawAvailableSnack)
    // listener 
    AppState.on('mySnacks', _drawMySnacks )
  }

  showSnack(snackName) {
    console.log('am I showing snack name?', snackName)
    snacksService.showSnack(snackName)
    _drawAvailableSnack()
  }

  payForSnack() {
    snacksService.payForSnack()
  }

}