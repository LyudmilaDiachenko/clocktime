export default function loadMoreBtn(container, cb){
    const moreBtn = document.querySelector(container)
    const countElements = 4
    let page_Count = 4

    moreBtn.addEventListener('click', (e) => {
        page_Count = page_Count + countElements
        cb(page_Count)
    })
}