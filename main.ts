input.onGesture(Gesture.Shake, function () {
    music.playMelody("G B A G C5 B A B ", 120)
    Color = randint(1, 10)
    if (Color == 1) {
        basic.showString("RED")
    }
    if (Color == 2) {
        basic.showString("ORANGE")
    }
    if (Color == 3) {
        basic.showString("YELLOW")
    }
    if (Color == 4) {
        basic.showString("GREEN")
    }
    if (Color == 5) {
        basic.showString("BLUE")
    }
    if (Color == 6) {
        basic.showString("INDIGO")
    }
    if (Color == 6) {
        basic.showString("PURPLE")
    }
    if (Color == 7) {
        basic.showString("PURPLE")
    }
    if (Color == 8) {
        basic.showString("BLACK")
    }
    if (Color == 9) {
        basic.showString("WHITE")
    }
    if (Color == 10) {
        basic.showString("GREY")
    }
    basic.showString("HAVE A BEAUTIFUL DAY!")
})
let Color = 0
basic.showString("HI")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
