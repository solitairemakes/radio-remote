input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("stop")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("reverse")
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("forward")
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
radio.setGroup(11)
radio.sendString("hi")
basic.showIcon(IconNames.Happy)
