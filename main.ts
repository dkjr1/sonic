namespace SpriteKind {
    export const Slope = SpriteKind.create()
    export const Motobug = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnTile(Sensor, location)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ThePlayer.isHittingTile(CollisionDirection.Bottom)) {
        music.pewPew.play()
        hasjumped = true
        ThePlayer.vy = -110
    }
})
function get_music_track (num: number) {
    return [
    "hillG:d=4,o=5,b=0:1p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8e7,d7,8c7,b6,8c7,b6,1g6,384p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8a6,f6,8a6,g6,8a6,g6,1c6,384p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8e7,d7,8c7,b6,8c7,b6,1g6,384p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8a6,f6,8a6,g6,8a6,g6,c6,8e6,1d.6,8c6,8d6,1e6,8c6,8c6,8e6,1d#.6,8c6,8d#6,1d6,1p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8e7,d7,8c7,b6,8c7,b6,1g6,384p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8a6,f6,8a6,g6,8a6,g6,1c6,384p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8e7,d7,8c7,b6,8c7,b6,1g6,384p,8c7,384a6,p,8c7,b6,8c7,b6,2g.6,8a6,8a6,f6,8a6,g6,8a6,g6,c6,8e6,1d.6,8c6,8d6,1e6,8c6,8c6,8e6,1d#.6,8c6,8d#6,1d6",
    "battery:d=4,o=5,b=150:1p.,1a.7,192p,17g7,192p,17e7,192p,17d7,192p,17e7,192p,17d7,192p,17c7,192p,17a6,192p,38d7,192p,17d#.7,192p,8a6,1p,17d7,192p,17d#7,192p,17d7,192p,17d#7,192p,17g7,192p,17a7,192p,17c8,192p,17a7,8p,1a.7,192p,17g7,192p,17e7,192p,17d7,192p,17e7,192p,17d7,192p,17c7,192p,17a6,192p,38d7,192p,17d#.7,192p,8a6,2p.,17e6,192p,17g6,192p,17e6,192p,17g6,192p,17a6,192p,17g6,192p,17a6,192p,17c7,192p,17d#7,192p,17e7,192p,17d7,192p,17c7,192p,17a7,192p,17g7,192p,17e7,192p,17c7,1p,1a.7,192p,17g7,192p,17e7,192p,17d7,192p,17e7,192p,17d7,192p,17c7,192p,17a6,192p,38d7,192p,17d#.7,192p,8a6,1p,17d7,192p,17d#7,192p,17d7,192p,17d#7,192p,17g7,192p,17a7,192p,17c8,192p,17a7,8p,1a.7,192p,17g7,192p,17e7,192p,17d7,192p,17e7,192p,17d7,192p,17c7,192p,17a6,192p,38d7,192p,17d#.7,192p,8a6,2p.,17e6,192p,17g6,192p,17e6,192p,17g6,192p,17a6,192p,17g6,192p,17a6,192p,17c7,192p,17d#7,192p,17e7,192p,17d7,192p,17c7,192p,17a7,192p,17g7,192p,17e7,192p,17c7",
    "launch:d=4,o=5,b=120:1p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,2p.,17d3,240p,8g3,240p,8d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c2,240p,8c3,2p.,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,2p.,17d3,240p,8g3,240p,8d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8g.2,240p,8d.3,240p,3a3,240p,17d3,240p,8g3,240p,8d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c3,240p,8c3,240p,17a#2,240p,8a#2,240p,17a2,2p,17a2,240p,8f2,240p,8f2,240p,17f#2,240p,8f#2,240p,17g2,p,8d3,240p,17g3,240p,17d3,240p,8c2,240p,8c3",
    "egg:d=4,o=5,b=150:16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16g2,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16g2,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16c3,16c3,16a#3,16c4,16f3,16g3,16c3,16a#2,16c3,16a#2,16c3,16c3,16p,16c3,16p,16c3,16c3,16p,16c3,2p.,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16c3,16c3,16a#3,16c4,16f3,16g3,16c3,16a#2,16c3,16a#2,16c3,16c3,16p,16c3,16p,16c3,16c3,16p,16c3,2p.,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16g2,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16g2,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16a#2,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16a#2,16p,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16c3,16c3,16a#3,16c4,16f3,16g3,16c3,16a#2,16c3,16a#2,16c3,16c3,16p,16c3,16p,16c3,16c3,16p,16c3,2p.,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16g#2,16p,16g#2,16p,16g#2,16g#3,16g#2,16g#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16a#2,16p,16a#2,16p,16a#2,16a#3,16a#2,16a#3,16c3,16c3,16a#3,16c4,16f3,16g3,16c3,16a#2,16c3,16a#2,16c3,16c3,16p,16c3,16p,16c3,16c3,16p,16c3,2p.,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16g2,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2,16p,16g2,16p,16g2,16p,16g2,16p,16f3,16g3,16g2,16p,16g2,16p,16c3,16d3,16g2",
    "boss:d=4,o=5,b=155:8e6,8p,16g,16p,8p,16g,16p,8p,8g,8p,16e,16p,8p,16e,16p,8p,8e,8p,16e,16p,8p,16e,16p,8p,g.,p.,2f#,2p,8e6,8p,16g,16p,8p,16g,16p,8p,8g,8p,16e,16p,8p,16e,16p,8p,8e,8p,16e,16p,8p,16e,16p,8p,g.,p.,2f#,1p,1p,8e6,8p,16g,16p,8p,16g,16p,8p,8g,8p,16e,16p,8p,16e,16p,8p,8e,8p,16e,16p,8p,16e,16p,8p,g.,p.,2f#,2p,8e6,8p,16g,16p,8p,16g,16p,8p,8g,8p,16e,16p,8p,16e,16p,8p,8e,8p,16e,16p,8p,16e,16p,8p,g.,p.,2f#"
    ][num]
}
function Level_init () {
    scene.setBackgroundColor(9)
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        motobug = sprites.create(assets.image`motobugleft`, SpriteKind.Motobug)
        tiles.placeOnTile(motobug, value)
    }
}
function get_music_speed (num: number) {
    return [
    185,
    135,
    135,
    180,
    140
    ][num]
}
let motobug: Sprite = null
let hasjumped = false
let Sensor: Sprite = null
let ThePlayer: Sprite = null
ThePlayer = sprites.create(assets.image`player`, SpriteKind.Player)
Sensor = sprites.create(assets.image`slope`, SpriteKind.Slope)
tiles.loadMap(tiles.createMap(tilemap`level1`))
scene.cameraFollowSprite(ThePlayer)
ThePlayer.ay = 100
tiles.placeOnRandomTile(ThePlayer, assets.tile`myTile1`)
Level_init()
forever(function () {
    if (controller.right.isPressed()) {
        ThePlayer.vx += 1
    } else if (controller.left.isPressed()) {
        ThePlayer.vx += -1
    } else if (!(controller.left.isPressed() || controller.right.isPressed())) {
        ThePlayer.vx = ThePlayer.vx / 1.1
    }
    ThePlayer.vx = Math.constrain(ThePlayer.vx, -120, 120)
})
forever(function () {
    music.playMelody(music.convertRTTTLToMelody(get_music_track(4)), get_music_speed(4))
})
forever(function () {
    while (ThePlayer.overlapsWith(Sensor)) {
        ThePlayer.y += -1
        ThePlayer.vy = Math.constrain(ThePlayer.vy, -9223372036854776000, 0)
        hasjumped = false
        if (controller.A.isPressed()) {
            music.pewPew.play()
            hasjumped = true
            ThePlayer.vy = -110
        }
    }
})
