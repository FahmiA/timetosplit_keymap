# Time to Split

My personal [QMK](https://github.com/qmk/qmk_firmware) keymap for the [Let's Split](https://github.com/nicinabox/lets-split-guide) keyboard.

The default keymap with a few minor changes.

 - Add `{` and `}` keys to the `upper` layer. The default mapping does not include these keys at all.
 - Assign arrow keys to home, end, page up, and page down keys in the `lower` layer.
 - Remove audio support.
 - Add RGB support (10 LEDs by default).
 - Add RGB control to the `adjust` layer.
 - EE_HANDS enabled.s

## Flash Firmware

From the `keyboards/lets_split` directory:

    avrdude -p atmega32u4 -P PORT -c avr109 -U eeprom:w:eeprom-lefthand.eep
    avrdude -p atmega32u4 -P PORT -c avr109 -U eeprom:w:eeprom-righthand.eep

`PORT` looks something like: `/dev/ttyACM0`

From the root QMK directory:

    # apt install avr-libc
    make lets_split-rev2-timetosplit-avrdude

## Keymap Preview

*Qwerty*

```
,-----------------------------------------------------------------------------------.
| Tab  |   Q  |   W  |   E  |   R  |   T  |   Y  |   U  |   I  |   O  |   P  | Bksp |
|------+------+------+------+------+-------------+------+------+------+------+------|
| Esc  |   A  |   S  |   D  |   F  |   G  |   H  |   J  |   K  |   L  |   ;  |  "   |
|------+------+------+------+------+------|------+------+------+------+------+------|
| Shift|   Z  |   X  |   C  |   V  |   B  |   N  |   M  |   ,  |   .  |   /  |Enter |
|------+------+------+------+------+------+------+------+------+------+------+------|
|Adjust| Ctrl | Alt  | GUI  |Lower |Space |Space |Raise | Left | Down |  Up  |Right |
`-----------------------------------------------------------------------------------'
```

*Colemak*

```
,-----------------------------------------------------------------------------------.
| Tab  |   Q  |   W  |   F  |   P  |   G  |   J  |   L  |   U  |   Y  |   ;  | Bksp |
|------+------+------+------+------+-------------+------+------+------+------+------|
| Esc  |   A  |   R  |   S  |   T  |   D  |   H  |   N  |   E  |   I  |   O  |  "   |
|------+------+------+------+------+------|------+------+------+------+------+------|
| Shift|   Z  |   X  |   C  |   V  |   B  |   K  |   M  |   ,  |   .  |   /  |Enter |
|------+------+------+------+------+------+------+------+------+------+------+------|
|Adjust| Ctrl | Alt  | GUI  |Lower |Space |Space |Raise | Left | Down |  Up  |Right |
`-----------------------------------------------------------------------------------'
```

*Dvorak*

```
,-----------------------------------------------------------------------------------.
| Tab  |   "  |   ,  |   .  |   P  |   Y  |   F  |   G  |   C  |   R  |   L  | Bksp |
|------+------+------+------+------+-------------+------+------+------+------+------|
| Esc  |   A  |   O  |   E  |   U  |   I  |   D  |   H  |   T  |   N  |   S  |  /   |
|------+------+------+------+------+------|------+------+------+------+------+------|
| Shift|   ;  |   Q  |   J  |   K  |   X  |   B  |   M  |   W  |   V  |   Z  |Enter |
|------+------+------+------+------+------+------+------+------+------+------+------|
|Adjust| Ctrl | Alt  | GUI  |Lower |Space |Space |Raise | Left | Down |  Up  |Right |
`-----------------------------------------------------------------------------------'
```

*Lower*

```
,-----------------------------------------------------------------------------------.
|   ~  |   !  |   @  |   #  |   $  |   %  |   ^  |   &  |   *  |   (  |   )  | Bksp |
|------+------+------+------+------+-------------+------+------+------+------+------|
| Del  |  F1  |  F2  |  F3  |  F4  |  F5  |  F6  |   _  |   +  |   {  |   }  |  |   |
|------+------+------+------+------+------|------+------+------+------+------+------|
|      |  F7  |  F8  |  F9  |  F10 |  F11 |  F12 |ISO ~ |ISO | |      |      |Enter |
|------+------+------+------+------+------+------+------+------+------+------+------|
|      |      |      |      |      |             |      | Home |PageDn|PageUp| End  |
`-----------------------------------------------------------------------------------'
```

*Raise*

```
,-----------------------------------------------------------------------------------.
|   `  |   1  |   2  |   3  |   4  |   5  |   6  |   7  |   8  |   9  |   0  | Bksp |
|------+------+------+------+------+-------------+------+------+------+------+------|
| Del  |  F1  |  F2  |  F3  |  F4  |  F5  |  F6  |   -  |   =  |   [  |   ]  |  \   |
|------+------+------+------+------+------|------+------+------+------+------+------|
|      |  F7  |  F8  |  F9  |  F10 |  F11 |  F12 |ISO # |ISO / |      |      |Enter |
|------+------+------+------+------+------+------+------+------+------+------+------|
|      |      |      |      |      |             |      | Next | Vol- | Vol+ | Play |
`-----------------------------------------------------------------------------------'
```

*Adjust (Lower + Raise)*

```
,-----------------------------------------------------------------------------------.
|      | Reset|      |      |      |      |      |      |      |      |      |  Del |
|------+------+------+------+------+-------------+------+------+------+------+------|
|      |      |      |Aud on|Audoff|AGnorm|AGswap|Qwerty|Colemk|Dvorak|      |      |
|------+------+------+------+------+------|------+------+------+------+------+------|
|      |RGB ON| MODE | HUE+ | HUE- | SAT+ | SAT- | VAL+ | VAL- |      |      |      |
|------+------+------+------+------+------+------+------+------+------+------+------|
|      |      |      |      |      |             |      |      |      |      |      |
`-----------------------------------------------------------------------------------'
```

