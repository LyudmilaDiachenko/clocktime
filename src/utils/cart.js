let cart = {};

export default cartClass => {
    document.addEventListener('click', e => {
        if (e.target.classList.contains(cartClass)){
            id = e.target.dataset.id | 0
            cart[id] = cart[id] ? cart[id] + 1 : 1
        }
    })
}