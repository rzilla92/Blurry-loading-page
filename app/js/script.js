const loadText  = document.querySelector('.loading-text')
const bg  = document.querySelector('.bg')
const overlay = document.querySelector('#overlay')

let load = 0

let int = setInterval(blurring, 30)

// function to map loading percentage unto others i.e opacity or blur
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    
    //percentage loading
    loadText.innerText= `${load}%`

    //map opacity to loading percentage
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    //map overlay to loading percentage
    overlay.style.opacity = scale(load, 0, 100, 1, 0)

    //map blur to loading percentage
    bg.style.filter = `blur(${scale(load, 0, 100, 15, 0)}px)`

    
}

