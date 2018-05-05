let unit = 5;
let col = 0;
let row = 0;

function lights(disp: number) {
    col = disp / unit;

    for (let x = 0; x < col + 1; x++) {
        if (x < col) {
            for (let i = 0; i < 5; i++) {
                led.plot(x, i);
            }
        } else {
            let count = disp % unit
            for (let i = 0; i < count; i++) {
                led.plot(x, i);
            }
        }
        disp -= unit;
    }
}

input.onButtonPressed(Button.A, () => {
    lights(12);
}) 
