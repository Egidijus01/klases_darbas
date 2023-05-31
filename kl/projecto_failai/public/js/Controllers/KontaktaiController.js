import {ControllerInterface} from "../app/ControllerInterface.js";
import Render from "../app/Render.js";
import Api from "../app/Api.js";

export class KontaktaiController extends ControllerInterface {

    
    constructor() {
        super();
        this.api = new Api();
        this.render = new Render();
    }

    index() {
        this.api.get('/api/cv').then(data => {
            this.render.renderView('kontaktai.html', data);
        });
    }
}