var c = {
    width: 100,
    height: 100,
}

function setup() {
    createCanvas(c.width, c.height)
}

function draw() {
    background(0)

    fill(255)

    // we need to use new Date() so we can fetch the new Date() every loop od draw instead of putting it in setup and making it run once only!
    var hour = map(new Date().getHours(), 0, 12, 0, c.width)
    rect(0, 0, hour, 20)

    var minutes = map(new Date().getMinutes(), 0, 60, 0, c.width)
    rect(0, 20, minutes, 20)

    var seconds = map(new Date().getSeconds(), 0, 60, 0, c.width)
    rect(0, 40, seconds, 20)


    document.getElementById("hour").innerHTML = new Date().getHours()
    document.getElementById("minute").innerHTML = new Date().getMinutes()
    document.getElementById("seconds").innerHTML = new Date().getSeconds()
}