import CvController from "../Controllers/CvController.js";
import { IndexController } from "../Controllers/IndexController.js";
import { PortfolioController } from "../Controllers/PortfolioController.js";
import { AdminController } from "../Controllers/AdminController.js";
import { KontaktaiController } from "../Controllers/KontaktaiController.js";
import Api from "../app/Api.js";


export class Router {
    constructor() {
        this.path = window.location.pathname;
        this.api = new Api();
        console.info('Router loaded: ', this.path);
    }

    // Funkcija, kuri apdoroja maršrutus
    handleRoutes() {
        if (this.path === '/') {
            let controller = new IndexController();
            controller.index();
        } else if (this.path === '/cv') {
            let controller = new CvController();
            controller.index();
        } else if (this.path === '/kontaktai') {
            let controller = new KontaktaiController();
            controller.index();
        } else if (this.path === '/portfolio') {
            let controller = new PortfolioController();
            controller.index();
        } else if (this.path === '/admin') {
            let controller = new AdminController();
            controller.index();
        } else {
            this.api.loadPage('404');
        }
    }
}
export default Router;