import QtQuick 2.0
import MuseScore 3.0

import "rmcCore.js" as Core

MuseScore {
    menuPath: "Plugins.Text Highligting.Red"
    description: "Set the text highlight to red"
    version: "1.0"
    onRun: {
        Core.setColour("#aa0000"); // null pour reset
    }
    // Rouge: #aa0000
    // Bleu: #0000ff
    // Vert: #008d67
    // Gris: #61696d
    // Mauve: #99648f
}
