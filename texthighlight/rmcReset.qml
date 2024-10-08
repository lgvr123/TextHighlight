import QtQuick 2.0
import MuseScore 3.0

import "rmcCore.js" as Core

MuseScore {
    menuPath: "Plugins.Text Highligting.Reset"
    description: "Reset the text highlight"
    version: "1.0"
    onRun: {
        Core.setColour(); // null pour reset
    }
    // Rouge: #aa0000
    // Bleu: #0000ff
    // Vert: #008d67
    // Gris: #61696d
    // Mauve: #99648f
}
