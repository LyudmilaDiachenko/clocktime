import {Gallery} from "./utils/gallery"
import loadMoreBtn from "./utils/loadMoreBtn.js"
import fillTemplates from "./utils/fillTemplates.js"
import "./utils/auth.js"

new Gallery('.js-g1')
loadMoreBtn('.load_more_btn', fillTemplates)
fillTemplates()