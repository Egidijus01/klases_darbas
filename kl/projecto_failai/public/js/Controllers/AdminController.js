import {ControllerInterface} from "../app/ControllerInterface.js";
import Api from "../app/Api.js";

export class AdminController extends ControllerInterface {

    index() {
        console.log('Admin index');

        let api = new Api();

        api.getText('admin.html').then(data => {
            const mainContent = document.querySelector('main');
            mainContent.innerHTML = data;
        });
    }
}
