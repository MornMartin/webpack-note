import module_a from './component/a.html';
import './component/a.css';
let node_a = document.createElement('div');
    node_a.innerHTML = module_a;
document.body.appendChild(node_a);
