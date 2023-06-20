import { AppState } from "../AppState.js"

class CoinsService {

  addCoin() {
    AppState.coins++

    console.log('Did coins increase?', AppState.coins);
  }

}

export const coinsService = new CoinsService()