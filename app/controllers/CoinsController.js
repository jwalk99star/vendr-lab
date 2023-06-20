import { AppState } from "../AppState.js"
import { coinsService } from "../services/CoinsService.js"
import { setText } from "../utils/Writer.js"

function _drawCoins() {

  let stringOfCoins = ''

  for (let i = 0; i < AppState.coins; i++) {
    stringOfCoins += '🪙'
  }
  setText(stringOfCoins)

}

export class CoinsController {
  constructor() {
    console.log('CoinsController works in CC.js')
    //listener  -LATER
  }


  addCoin() {
    console.log('addCoin works in CC.js')
    coinsService.addCoin()
    _drawCoins()
  }
}