let leds = 12
let unit = 5
let remain = 0
let col = 0
let row = 0

function lights(disp: number) {
    col = disp / unit
    remain = leds

    for (let x = 0; x < col + 1; x++) {
        if (x < col) {
            for (let i = 0; i < 5; i++) {
                led.plot(x, i)
            }
        } else {
            let count = disp % unit
            for (let i = 0; i < count; i++) {
                led.plot(x, i)
            }
        }
        remain = remain - unit
    }
}

input.onButtonPressed(Button.A, () => {
    lights(7)
}) 
