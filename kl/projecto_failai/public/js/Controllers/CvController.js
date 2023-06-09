import ControllerInterface from "../app/ControllerInterface.js";
import Api from "../app/Api.js";
import Render from "../app/Render.js";

export class CvController extends ControllerInterface {
    constructor() {
        super();
        this.api = new Api();
        this.render = new Render();
    }

    index() {
        this.api.get('/api/cv').then(data => {
            this.render.renderView('cv.html', data);
        });
    }
}


// Export the Cv class as the default export
export default CvController;
