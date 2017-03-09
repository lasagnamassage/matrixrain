var body = document.body;
var startY = 0;
var endY = 25;
var startX = 0;
var endX = 97;
var vMin = 5;
var vMax = 20;
var letterbag = [];
/*
 * Key listeners, fam
 */
document.addEventListener('keydown', function(e) {
     console.log(e.keyCode);
    switch (e.keyCode) 
    {
        case 48: //0
            spawn("0");
            break;
        case 49:
            spawn("1");
            break;
        case 50:
            spawn("2");
            break;
        case 51:
            spawn("3");
            break;
        case 52:
            spawn("4");
            break;
        case 53:
            spawn("5");
            break;
        case 54:
            spawn("6");
            break;
        case 55:
            spawn("7");
            break;
        case 56:
            spawn("8");
            break;
        case 57:
            spawn("9");
            break;
        case 65:
            spawn("a");
            break;
        case 66:
            spawn("b");
            break;
        case 67:
            spawn("c");
            break;
        case 68:
            spawn("d");
            break;
        case 69:
            spawn("e");
            break;
        case 70:
            spawn("f");
            break;
        case 71:
            spawn("g");
            break;
        case 72:
            spawn("h");
            break;
        case 73:
            spawn("i");
            break;
        case 74:
            spawn("j");
            break;
        case 75:
            spawn("k");
            break;
        case 76:
            spawn("l");
            break;
        case 77:
            spawn("m");
            break;
        case 78:
            spawn("n");
            break;
        case 79:
            spawn("o");
            break;
        case 80:
            spawn("p");
            break;
        case 81:
            spawn("q");
            break;
        case 82:
            spawn("r");
            break;
        case 83:
            spawn("s");
            break;
        case 84:
            spawn("t");
            break;
        case 85:
            spawn("u");
            break;
        case 86:
            spawn("v");
            break;
        case 87:
            spawn("w");
            break;
        case 88:
            spawn("x");
            break; 
        case 89:
            spawn("y");
            break;
        case 90:
            spawn("z");
            break;
        default:
            console.log("Error input");
            break;
    }

});

function spawn(symbol) {
	xPos = Math.floor((Math.random()*endX)+startX);	     
    velocity = Math.floor((Math.random()*vMax)+vMin);
	var letter = new Letter(symbol,xPos,velocity);
	letterbag.push(letter);
	letter.draw();
}

var Letter = function(symbol,xPos,velocity)
{
	this.symbol=symbol;
	this.xPos=xPos;
	this.yPos=startY;
	this.velocity=velocity;
	this.draw = function() {
		var node = document.createElement("DIV");
		node.style.position="absolute";
		node.style.marginLeft = this.xPos + "%";
		node.style.marginTop = this.yPos + "px";
		var textnode = document.createTextNode(symbol);
		node.appendChild(textnode);
		document.body.appendChild(node);
	};
	this.update = function() {
		this.yPos+=velocity;
	}
}

function clearScreen() {
	body.innerHTML = '';
}
function draw() {
	letterbag.forEach(function(letter) {
		letter.draw();
		letter.update();
	});
	console.log("intervalworking");
}

setInterval(draw,20);
