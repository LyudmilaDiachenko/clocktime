import getData from "./getData";
import addTemplates from "./addTemplates";
import card from "../templates/card.hbs";

const cartBox = document.querySelector('.card-container')

export default function fillTemplates(value = 4, q = '') {
        getData(`http://localhost:8000/goods?_page=1&_limit=${value || 4}&q=${q}`)
        .then(data => addTemplates(card, cartBox, data))
}