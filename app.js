//var
var robot = document.querySelector('.robot')
var point = document.querySelector('.point')
var wall = document.querySelector('.wall')
var helpText = document.querySelector('.helpText')
var main = document.querySelector('.main')
var error = document.querySelector('.error')
var x = 0
var color = ['rgb(57, 188, 228)', 'rgb(228, 202, 57)', 'rgb(222, 57, 228)', 'rgb(228, 57, 57)', 'rgb(90, 90, 90)', 'rgb(145, 57, 228)', 'rgb(57, 228, 80)']
//var


//update point
var poinUpdate= setInterval(() => {
    x += 1
    point.innerHTML = x
}, 2000)
//update point


//jump robot
saveAnime = () => {
    robot.classList.add('anime')
    setTimeout(() => {
        robot.classList.remove('anime')
    }, 700)
}
//jump robot


//red point
setInterval(() => {
    point.classList.add('color')
    setTimeout(() => {
        point.classList.remove('color')
    }, 2000)
}, 20000)
//red point


//wall random color
setInterval(() => {
    var random = Math.floor(Math.random() * 7)
    wall.style.backgroundColor = color[random]
}, 2000)
//wall random color


//help show and hide
showText = () => {
    helpText.style.display = "block"
}
hideText = () => {
    helpText.style.display = "none"
}
//help show and hide


//error is Comming
setInterval(() => {
    let r = parseInt(window.getComputedStyle(robot).getPropertyValue("bottom"));
    let w = parseInt(window.getComputedStyle(wall).getPropertyValue("right"));
    if(w>=600 && w<=610 && r<=35 && r>=-20){
        wall.remove()
        clearInterval(poinUpdate)
        main.style="filter:blur(10px)"
        error.style.display="block"
    }
},10)