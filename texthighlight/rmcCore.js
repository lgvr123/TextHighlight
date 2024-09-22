// Rouge: #aa0000
// Bleu: #0000ff
// Vert: #008d67
// Gris: #61696d
// Mauve: #99648f
function setColour(color) {

    var selection = curScore.selection;
    var rMarks = [];

    if (selection != null) {
        for (var i = 0; i < selection.elements.length; i++) {
            var element = selection.elements[i];
            if (element) {
                console.log("element " + i + " is " + element.userName());
                if (element.type == Element.REHEARSAL_MARK ||
                    element.type == Element.HARMONY ||
                    element.type == Element.SYSTEM_TEXT ||
                    element.type == Element.STAFF_TEXT ||
                    element.type == Element.TEMPO_TEXT) {
                    rMarks.push(element);
                }
            }

        }
    }

    if (rMarks.length === 0) {
        console.log("Couldn't find valid text elements");
        return;
    }

    var reset = false;
    
    console.log("Received color is :"+(typeof color));
    
    if (color == null) {
        console.log("No colour provided, resetting to black");
        reset = true;
        var fgColor = "#000000";
        var bgColor = "#00000000";

    } else if ((typeof color) === "string") {
        if (!color.startsWith("#")) {
            console.log("Invalid color name: \"" + color + "\". Expecting it to start with a \"#\"");
            return;
        }

        console.log("Colour provided: \"" + color + "\"");

        var fgColor = color.substring(0, 7);
        //var bgColor = "#33"+fgColor.substring(1,7); // alt: setting the color thru the "#aarrggbb" string

    } else {
        if (color.r === undefined|| color.g === undefined || color.b  === undefined || color.a  === undefined) {
            console.log("Invalid color object: \"" + color + "\". Expecting it .r, .g, .b, .a properties");
            JSON.stringify(color);
            return;
        }

        fgColor = "#" + 
            floatToHex(color.r) +
            floatToHex(color.g) +
            floatToHex(color.b);
    }

    console.log("Applying on foreground: \"" + fgColor + "\"");
    //console.log("Applying on background: \""+bgColor +"\"");


    curScore.startCmd();
    for (var r = 0; r < rMarks.length; r++) {
        var e = rMarks[r];
        if (e.frameType === 0) {
            // Si pas de cadre, alors on met un cadre de bord 0
            // Sinon on ne touche pas au cadre actif
            e.frameType = 1;
            e.frameWidth = 0;
            e.framePadding = 0.5
        }
        e.color = fgColor;
        e.color.a = 1;
        e.frameFgColor = fgColor;
        e.frameFgColor.a = 1;
        e.frameBgColor = fgColor;
        e.frameBgColor.a = reset ? 0 : 0.18;

    }
    curScore.endCmd();
    
}

function floatToHex(f) {
    var t=((f*255)|0).toString(16);
    t=t.padStart(2, "0");
    return t;
}

function debugO(label, element, excludes) {

    if (typeof element === 'undefined') {
        console.log(label + ": undefined");
    } else if (element === null) {
        console.log(label + ": null");

    } else if (Array.isArray(element)) {
        for (var i = 0; i < element.length; i++) {
            debugO(label + "-" + i, element[i], excludes);
        }

    } else if (typeof element === 'object') {

        var kys = Object.keys(element);
        for (var i = 0; i < kys.length; i++) {
            if (!excludes || excludes.indexOf(kys[i]) == -1) {
                debugO(label + ": " + kys[i], element[kys[i]], excludes);
            }
        }
    } else {
        console.log(label + ": " + element);
    }
}