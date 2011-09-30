var canvas = null;
var context = null;
var position = [50,50];
var image1 = null;
var image2 = null;
jQuery(function(){
    image1 = $('#image1').get(0);
    image2 = $('#image2').get(0);
    draw();
    context.drawImage(image2,position[0],position[1],80,40);
    $('input').click(function(event){
        var button = $(this).attr('id');
        switch(button){
            case 'button1':
                move_left();
                break;
            case 'button2':
                move_up();
                break;
            case 'button3':
                move_right();
                break;
            case 'button4':
                move_down();
                break;
            default:
                break;
        }
    });
    $(this).keypress(function(event_key){
        switch(event_key.keyCode){
            case 37:
                move_left();
                break;
            case 38:
                move_up();
                break;
            case 39:
                move_right();
                break;
            case 40:
                move_down();
                break;
            default:
                break;
        }
    });
});
function draw(){
    canvas = $('#myCanvas').get(0);
    context = canvas.getContext('2d');
    context.drawImage(image1,0,0,canvas.width,canvas.height);
}
function move_left(){
    draw();
    if(position[0] > 5){
        position[0] =  position[0] - 5;
    }
    context.drawImage(image2,position[0],position[1],80,40);
}
function move_right(){
    draw();
    if(position[0] < canvas.width - 85){
        position[0] =  position[0] + 5;
    }
    context.drawImage(image2,position[0],position[1],80,40);
}
function move_up(){
    draw();
    if(position[1] > 5){
        position[1] = position[1] - 5;
    }
    context.drawImage(image2,position[0],position[1],80,40);
}
function move_down(){
    draw();
    if(position[1] < canvas.height - 45){
        position[1] = position[1] + 5;
    }
    context.drawImage(image2,position[0],position[1],80,40);
}
