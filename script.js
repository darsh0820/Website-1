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
            loadBar.style.width = `${scale(load, 0, 100, 0, 400)}px`

            bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        }

        https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
        function scale(number, inMin, inMax, outMin, outMax) {
            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        }