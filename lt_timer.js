let unit = 5;
let remain = 12;

function clearpanel() {
  basic.showLeds(`
  . . . . .
  . . . . .
  . . . . .
  . . . . .
  . . . . .
  `)
}

function lights(disp: number) {
    let col = disp / unit;

    for (let x = 0; x < col + 1; x++) {
        if (x < col) {
            for (let i = 0; i < unit; i++) {
                led.plot(x, i);
            }
        } else {
            let count = disp % unit
            for (let i = 0; i < count; i++) {
                led.plot(x, i);
            }
            for (let i = count; i < unit; i++) {
                led.unplot(x, i)
            }
        }
        disp -= unit;
    }
}

input.onButtonPressed(Button.A, () => {
    clearpanel()

    for (let count = 0; count < remain; count++) {
      lights(remain - count)
      for (let i = 0; i < 20; i++) {
            led.toggle(4, 4)
            basic.pause(500)
        }
    }
    basic.showIcon(IconNames.Heart)
    music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
})
input.onButtonPressed(Button.B, () => {
    music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showIcon(IconNames.Ghost)
})
basic.showIcon(IconNames.Happy)
