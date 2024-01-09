import {Gallery} from "./utils/gallery"
import loadMoreBtn from "./utils/loadMoreBtn.js"
import fillTemplates from "./utils/fillTemplates.js"
import searchInput from "./utils/searchInput.js"
import cart from "./utils/cart"
import "./utils/auth.js"

new Gallery('.js-g1')
new Gallery('.js-g2')
cart('card-btn-cart')
loadMoreBtn('.load_more_btn', fillTemplates)
searchInput('.search-input', fillTemplates)
fillTemplates()