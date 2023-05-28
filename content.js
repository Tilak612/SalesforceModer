console.log('********************************************************88');
var x = localStorage.getItem("mode");

if(x){
    changeMode(x)
}else{
    changeMode('light')
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request.message);
    changeMode(request.message);
});
function changeMode(mode){
    let items=document.querySelectorAll('input')
    if(mode=="light"){
        document.querySelector('html').style.setProperty('filter', '', 'important');
        localStorage.setItem("mode", 'light');
    }else  if(mode=="dark"){
        document.querySelector('html').style.setProperty('filter', 'invert(100%) contrast(1.17) brightness(1.36) hue-rotate(180deg)', 'important');
        document.querySelector('html').style.setProperty('background', '#fff', 'important');
        localStorage.setItem("mode", 'dark');
    }else {
        document.querySelector('html').style.setProperty('filter', 'grayscale(100%)', 'important');
        localStorage.setItem("mode", 'grey');
      
    }
}