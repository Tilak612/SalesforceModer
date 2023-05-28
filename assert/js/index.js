
console.log(document.querySelector('body'));
var x = localStorage.getItem("mode");

if (x) {
    changeMode(x)
} else {
    changeMode('light')
}

let items = document.querySelectorAll('input[type="radio"]')
items.forEach((ele) => {
    ele.addEventListener('change', (event) => {
        changeMode(event.target.value)
    })
})

function changeMode(mode) {
    console.log('ddd--' + mode);
    let items = document.querySelectorAll('input[type="radio"]')
    if (mode == "light") {
        localStorage.setItem("mode", 'light');
        items[0].checked = true
        sendMessage('light')
    } else if (mode == "dark") {
        localStorage.setItem("mode", 'dark');
        items[1].checked = true
        sendMessage('dark')
    } else {
        localStorage.setItem("mode", 'grey');
        items[2].checked = true
        sendMessage('grey')
    }
}
async function sendMessage(mode) {
    console.log(mode);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // Send a message to the content script of the active tab
        chrome.tabs.sendMessage(tabs[0].id, { message: mode });
      });
}