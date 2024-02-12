var lightMode = ["rgb(255,255,255)", "rgb(255,250,250)", "rgb(240,255,240)", "rgb(245,255,250)", "rgb(240,248,255)"];
var colors = ["#121212", "#2f2b3a", "#76737e", "#46424f", "#5e5a66"];
var bodyBg = document.getElementsByTagName("body");
var bodyColor = document.getElementById("bodyColor");
var colorCount = 0;
var intervalID;

function darkModeFn() {
    intervalID = setInterval(() => {
        if (colorCount >= colors.length) {
            colorCount = 0;
        }
        bodyBg[0].style.backgroundColor = colors[colorCount];
        colorCount++;
    }, 1000)
}

function lightModeFn() {
    intervalID = setInterval(() => {
        if (colorCount >= colors.length) {
            colorCount = 0;
        }
        bodyBg[0].style.backgroundColor = lightMode[colorCount];

        colorCount++;
    }, 1000)
}

const switchMode = (isDarkMode) => {

    if (isDarkMode) {
        console.log({ mode: isDarkMode })
        darkModeFn()
    }
    else {
        lightModeFn()

    };

}
bodyColor.onchange = function (e) {
    const isDarkMode = e.target.checked
    clearInterval(intervalID)

    switchMode(isDarkMode)
    console.log({ isDarkMode })

}

window.addEventListener("load", () => {

    switchMode(false)
})
