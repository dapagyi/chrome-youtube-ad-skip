function kiixel(){
    console.log("egyszer");
    var skipButton = document.getElementsByClassName('videoAdUiSkipButton');
    var closeButton = document.getElementsByClassName('close-button');
    
    if (skipButton.length > 0){
        skipButton[0].click();
    }
    if (closeButton.length > 0){
        closeButton[0].click();
    }
}

window.onload = function() {
    setInterval(kiixel, 1000);
}