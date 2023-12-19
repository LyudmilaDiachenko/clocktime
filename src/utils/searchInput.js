export default function searchInput(container, cb){
    const searchInput = document.querySelector(container)

    searchInput.addEventListener('keyup', (e) => {
        cb(0, e.target.value)
    })
}