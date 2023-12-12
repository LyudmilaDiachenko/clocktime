export class Gallery {
    constructor(
        gallerySelector = '.gallery', 
        sliderSelector = '.slider', 
        slideSelector = '.slide', 
        prevSelector = '.prev', 
        nextSelector = '.next'
    ) {
        let i = 0,
            gallery = document.querySelector(gallerySelector),
            slider = gallery.querySelector(sliderSelector),
            prev = gallery.querySelector(prevSelector),
            next = gallery.querySelector(nextSelector),
            slideCount = slider.querySelectorAll(slideSelector).length,
            slideWidth = Math.floor(gallery.clientWidth),
            moveSlider = () => {
                if (i < 0) i = slideCount - 1;
                if (i > slideCount - 1) i = 0;
                slider.style.transform = `translateX(${-gallery.clientWidth * i}px)`
            },
            resize = () => {
                slideWidth = Math.floor(gallery.clientWidth)
                gallery.querySelectorAll(slideSelector)
                .forEach(slide => slide.style.width = `${slideWidth}px`)
            }
       
        prev.addEventListener('click', e => moveSlider(i--))
        next.addEventListener('click', e => moveSlider(i++))
        window.addEventListener("resize", resize);
        resize();
    }
}

