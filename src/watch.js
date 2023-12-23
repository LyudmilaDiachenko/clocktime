import getData from "./utils/getData";
import watchTpl from "./templates/watch.hbs";
import "./utils/auth.js"

let id = location.search.match(/id=([^&]+)/)[1] || 1

getData(`http://localhost:8000/goods?id=${id}`) 
.then(data => document.querySelector('#watch').innerHTML = watchTpl(data[0]))