import { AboutController } from "./controllers/AboutController.js";
import { CoinsController } from "./controllers/CoinsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SnacksController } from "./controllers/SnacksController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [CoinsController, SnacksController],
    view: ''
    // /*html*/`
    // <div class="card">
    //   <div class="card-body">
    //     <p>Home Page</p>
    //     <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
    //   </div>
    // </div>
    // `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]