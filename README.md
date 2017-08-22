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

