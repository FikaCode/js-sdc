/**
 * js-sdc 
 * a simple html same domain communication by localStorage storage event
 */
//prifix random num
var SDCFingerPrinter = "SDC_prefix_rdm_7591_";

//store channle and hanle
var SDCHandleMap = [];

/**
 * init addEventListener 'storage' event
 */
function init() {
    window.addEventListener("storage", function (e) {
        for (kh of SDCHandleMap) {
            if (kh.key === e.key) {
                kh.handle(e.newValue);
                window.localStorage.setItem(kh.key, SDCFingerPrinter);
            }
        }

    });
}

/**
 * minitor channel message
 * @param  channel  
 * @param  handle 
 */
function onSDCMessage(channel, handle) {
    if (channel === '' || typeof handle !== 'function') {
        console.error('SDCMessage failure: channel is "" or handle is not a function');
        return;
    }
    window.localStorage.setItem(SDCFingerPrinter + channel, SDCFingerPrinter);
    SDCHandleMap.push({ key: SDCFingerPrinter + channel, handle: handle });
}

/**
 * send messsage to channle，if onSDCMessage and sendSDCMessage is on same Page, isSamePage need to be true
 * @param  channel 
 * @param  message 
 */
function sendSDCMessage(channel, message, isSamePage) {
    window.localStorage.setItem(SDCFingerPrinter + channel, message);
    if (isSamePage === true) {
        var event = new Event("storage");
        event.key = SDCFingerPrinter + channel;
        event.newValue = message
        window.dispatchEvent(event);
    }
}
init();
