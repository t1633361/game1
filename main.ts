controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    TuXing = 2
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    TuXing = 3
})
function BiJiao () {
	
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    TuXing = 1
})
let TuXing = 0
let Bu = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . d d d . . . . . . . . . . . 
    . . d 1 d . . . . . . . . . . . 
    . . d . d . . . . . . . . . . . 
    d d d . d . d d d d . . . . . . 
    d . . . d . d 2 3 d . . . . . . 
    d . . . d . d 3 2 d . d d d . . 
    d . . . d d d . . d . d 5 d . . 
    d . . . . . . . . d d d . d . . 
    d . . . . . . . . . . . . d . . 
    d . . . . . . . . . . . . d . . 
    d d d d d d . . d d d d d d . . 
    . . . . . d d d d . . . . . . . 
    `, SpriteKind.Player)
Bu.setPosition(120, 94)
let ChuiTou = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . d . d . d . d . . . . . 
    . . . d d d d d d d d d . . . . 
    . . . d . . . . . . . d . . . . 
    . . . d . . . . . . . d . . . . 
    . . . d . . . . . . . d . . . . 
    . . . d . . . . . . . d . . . . 
    . . . d . . . . . . . d . . . . 
    . . . d . . . . . . . d . . . . 
    . . . d d d 6 7 d d d d . . . . 
    . . . . . d 7 4 d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
ChuiTou.setPosition(24, 94)
let JianDao = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . d d d . d d d . . . . 
    . . . . . d 9 d . d b d . . . . 
    . . d d d d 8 d d d a d d d . . 
    . . d . . . . . . . . . . d . . 
    . . d . . . . . . . . . . d . . 
    . . d . . . 3 3 . . . . . d . . 
    . . d d d d c e d d d d d d . . 
    . . . . . d e c d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    `, SpriteKind.Player)
JianDao.setPosition(74, 94)
if (TuXing == 1) {
    Bu.destroy()
    JianDao.destroy()
} else if (TuXing == 2) {
    ChuiTou.destroy()
    Bu.destroy()
} else if (TuXing == 3) {
    JianDao.destroy()
    ChuiTou.destroy()
} else {
	
}
forever(function () {
	
})
