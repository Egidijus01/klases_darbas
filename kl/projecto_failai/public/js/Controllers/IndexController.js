import {ControllerInterface} from "../app/ControllerInterface.js";
import Api from "../app/Api.js";

export class IndexController extends ControllerInterface {

    index() {
        console.log('Index index');

        let api = new Api();

        api.getText('index.html').then(data => {
            const mainContent = document.querySelector('main');
            mainContent.innerHTML = data;
        });
    }
}
