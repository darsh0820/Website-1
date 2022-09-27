const loadText = document.querySelector('.loading-text')
        const bg = document.querySelector('.bg')
        const Bar = document.querySelector('.bar')
        const loadBar = document.querySelector('.loading-bar')

        let load = 0

        let int = setInterval(blurring, 20)

        function blurring() {
            load++

            if (load > 99) {
                clearInterval(int)
            }

            //consle.log(load)
            loadText.innerText = `Loading ${load}%`
            loadText.style.opacity = scale(load, 0, 100, 1, 0)

            Bar.style.opacity = scale(load, 0, 100, 1, 0)
            loadBar.style.width = `${scale(load, 0, 100, 0, 200)}px`


            bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        }

        https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
        function scale(number, inMin, inMax, outMin, outMax) {
            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        }
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`


https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
},false);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var checkbox = document.getElementById('darkmode-toggle');
// let bgDark = document.getElementsByClassName('navbar');
// checkbox.addEventListener('change',function(){
//     document.getElementsByClassName('navbar').setAttributes("style",) = "black"
// })
