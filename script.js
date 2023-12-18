window.addEventListener("load",start);

var drawingArea;

class Canva{
    constructor(id, width, height){
        var html = "<canvas id='"+ id +"' width='"+ width +"px' height='"+ height +"px'></canvas>";
        return createHTML(html);
    }
}

async function createCanva(id, width, height, context){
    drawingArea = document.getElementById("drawingArea");
    html = new Canva(id, width, height);
    drawingArea.appendChild(html);
    var element = document.getElementById(id);
    window[id] = element;
    window[id].ctx = element.getContext(context);
    return element;
}


async function start(){
    await createCanva("test", 300, 300, "2d");
    test.style.border = "4px solid black";
    test.style.borderRadius = "10px";
    var l1 = test.ctx;
    l1.moveTo(0, 0);
    l1.lineTo(200, 100);
    l1.stroke();
}
