window.onload = function init() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(0, 0, 350, 300);
    
    pincel.fillStyle = 'black';
    pincel.fillRect(50, 60, 90, 90);
    pincel.fillRect(210, 60, 90, 90);
    
    pincel.fillRect(140, 150, 70, 100);
    
    pincel.fillRect(100, 190, 40, 110);
    pincel.fillRect(210, 190, 40, 110);
}