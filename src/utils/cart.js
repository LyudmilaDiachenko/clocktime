import cartTemplate from '../templates/cart.hbs'
import getData from "./getData";

let cart = JSON.parse(localStorage.getItem('cart')) || {};
let closePopupTimeout;

let save2LS = cart => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default {
    showCart: selector => {
        document.querySelector(selector).addEventListener('click', _ => {
            getData(`http://localhost:8000/goods?_page=1&_limit=1000`)
            .then(data => {
                data = data.map(el => {
                    if (cart[el.id|0]){
                        el.cnt = cart[el.id|0]
                        el.totalPrice = `${el.finalPrice.replaceAll(/\D/g, '') * el.cnt}`.split('').reverse().join('').replace(/(.{3})/g, '$1.').split('').reverse().join('')
                        return el   
                    }
                }).filter(e=>e)
                document.querySelector('.label-cart').innerHTML = cartTemplate(data)
                document.querySelector('.js-show-cart').checked = true
            })
        })
        document.querySelector(selector).addEventListener('mouseenter', _ => {
            clearTimeout(closePopupTimeout)
        })
        document.querySelector(selector).addEventListener('mouseleave', _ => {
            closePopupTimeout = setTimeout(_ => document.querySelector('.js-show-cart').checked = false, 500)
        })
        document.addEventListener('click', e => {
            if (e.target.classList.contains('js-delete-cart')){
                delete cart[e.target.dataset.id | 0]
                save2LS(cart)
            }
        })
        document.addEventListener('click', e => {
            if (e.target.classList.contains('js-plus-cart')){
                cart[e.target.dataset.id | 0] = ++cart[e.target.dataset.id | 0]
                save2LS(cart)
            }
        })
        document.addEventListener('click', e => {
            if (e.target.classList.contains('js-minus-cart')){
                if (cart[e.target.dataset.id | 0]==1)
                    delete cart[e.target.dataset.id | 0]
                else
                    cart[e.target.dataset.id | 0] = --cart[e.target.dataset.id | 0]
                save2LS(cart)
            }
        })
    },
    onClick: cartClass => {
        document.addEventListener('click', e => {
            if (e.target.classList.contains(cartClass)){
                id = e.target.dataset.id | 0
                cart[id] = cart[id] ? cart[id] + 1 : 1
                save2LS(cart)
            }
        })
    }
}