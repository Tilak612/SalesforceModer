// chrome.tabs.onActivated.addListener((tab)=>{
//     console.log('ckkll',tab);
//     chrome.tabs.get(tab.tabId,(currentTabData)=>{
//       console.log(currentTabData.url);
//       const origin = '.force.com';
//       if (currentTabData.url.includes(origin)) {
//         console.log('*************************************************************')
//         }else{
//             chrome.action.disable();

//         } 
//     })
// })
chrome.action.onClicked.addListener((tab) => {
    console.log('checkkkkkkkkllll'+JSON.stringify(tab));
    let url=tab.url
    if(url.includes('.force.com')||url.includes('.salesforce.com')||url.includes('.cloudforce.com')||url.includes('.visualforce.com')){
    chrome.action.setPopup({
        tabId: tab.id,          // Set the new popup for this tab.
        popup: 'index.html'   // Open this html file within the popup.
      });
    }else{
        chrome.action.setPopup({
            tabId: tab.id,          // Set the new popup for this tab.
            popup: 'popup.html'   // Open this html file within the popup.
          });
    }
  
})