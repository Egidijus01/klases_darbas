import {ControllerInterface} from "../app/ControllerInterface.js";
import Api from "../app/Api.js";
import Render from "../app/Render.js";

export class PortfolioController extends ControllerInterface {

    constructor() {
        super();
        this.api = new Api();
        this.render = new Render();
    }

    index() {
        this.api.get('/api/cv').then(data => {
            this.render.renderView('portfolio.html', data);
        });
    }
}
export default PortfolioController;