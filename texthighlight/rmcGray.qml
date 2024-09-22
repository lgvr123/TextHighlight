import QtQuick 2.0
import MuseScore 3.0

import "rmcCore.js" as Core

MuseScore {
    menuPath: "Plugins.Text Highligting.Gray"
    description: "Set the text highlight to gray"
    version: "1.0"
    onRun: {
        Core.setColour("#61696d"); // null pour reset
    }
    // Rouge: #aa0000
    // Bleu: #0000ff
    // Vert: #008d67
    // Gris: #61696d
    // Mauve: #99648f
}
