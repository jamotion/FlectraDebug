const getURL = typeof browser == 'object' ? chrome.extension.getURL : chrome.runtime.getURL; // Browser compatibility

const scriptEl = document.createElement('script');
scriptEl.src = getURL('pageScript.js');
(document.head || document.documentElement).appendChild(scriptEl);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getFlectraDebugInfo') {
        const body = document.getElementsByTagName('body')[0];
        if (body && body.hasAttribute('data-flectra-debug-mode')) {
            sendResponse({
                debugMode: body.getAttribute('data-flectra-debug-mode'),
            });
        } else {
            sendResponse();
        }
    }
});
