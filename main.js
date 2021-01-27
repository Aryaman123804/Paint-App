var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var mouseevent= "empty";
var last_position_of_x, last_position_of_y;
var color= "black";
var width= 1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color= document.getElementById("colour").value;
    width= document.getElementById("width_of_line").value;
    mouseevent="mouseDown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
mouseevent= "mouseUP";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
mouseevent= "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        console.log("last position of X and Y")
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of X and Y")
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
 
    }
    last_position_of_x= current_position_of_x;
    last_position_of_y= current_position_of_y;
}