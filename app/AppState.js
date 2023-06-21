import { Snack } from "./models/Snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  
  coins = 0
  
  /** @type {import('./models/Snack.js').Snack[]} */
  snacks = [
    new Snack({ name: 'Candy', price: '$.25', emoji: '🍬' }),
    new Snack({ name: 'Cookie', price: '$.50', emoji: '🍪' }),
    new Snack({ name: 'Cupcake', price: '$.75', emoji: '🧁' }),
  ]
  
  /** @type {import('./models/Snack.js').Snack[]} */
  // mySnacks = [] not sure why this is commented out in Gachamon
  
  mySnacks = loadState('mySnacks', [Snack])

  
  /** @type {import('./models/Snack.js').Snack | null} */
  availableSnack = null


  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
