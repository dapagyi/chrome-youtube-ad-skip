//document.body.style.backgroundColor="purple"

var skipButton = document.getElementsByClassName('videoAdUiSkipButton')
var closeButton = document.getElementsByClassName('close-button')

if (skipButton.length > 0){
    skipButton[0].click()
}
if (closeButton.length > 0){
    closeButton[0].click()
}

alert('end')