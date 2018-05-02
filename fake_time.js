let time = 0
function initTime()  {
    time = 2
    basic.showNumber(time)
}
input.onButtonPressed(Button.A, () => {
    initTime()
    for (let カウンター = 0; カウンター <= time - 1; カウンター++) {
        for (let i = 0; i < 120; i++) {
            led.toggle(4, 4)
            basic.pause(500)
        }
        basic.showNumber(time - 1 - カウンター)
    }
    basic.showIcon(IconNames.Heart)
    music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
})
input.onButtonPressed(Button.B, () => {
    music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showIcon(IconNames.Ghost)
})
basic.showIcon(IconNames.Happy)
