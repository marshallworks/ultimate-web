import { App } from './component/App.js';

const root = document.getElementById('root');
const app = App();
root.innerText = '';
root.appendChild(app.render());

