import MuseScore 3.0
import QtQuick 2.2
import QtQuick.Dialogs 1.0

import "rmcCore.js" as Core

MuseScore {
    menuPath: "Plugins.Text Highligting.Custom"
    description: "Select and set the text highlight color"
    version: "1.0"

    ColorDialog {
        id: colorDialog
        //selectedColor: document.color
        onAccepted: {
            var c = colorDialog.color;
                        console.log("JSON: "+JSON.stringify(c));
                        console.log("R as HEX: "+(c.r*255).toString(16));

            Core.setColour(c);
            
        }
        Component.onCompleted: visible = true
    }

}
