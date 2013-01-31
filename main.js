chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, {method: "getSelectionText"}, function(res) {
        chrome.tts.getVoices(
            function (voices) {
                for (var i = 0; i < voices.length; i++) {
                    console.log('Voice ' + i + ':');
                    console.log('  name: ' + voices[i].voiceName);
                    console.log('  lang: ' + voices[i].lang);
                    console.log('  gender: ' + voices[i].gender);
                    console.log('  extension id: ' + voices[i].extensionId);
                    console.log('  event types: ' + voices[i].eventTypes);
                }
            });
        var txt = res.data || '今アクティブなタブは<break />' + tab.title + 'です';
        chrome.tts.speak(
            '<?xml version="1.0"?><speak>' + txt + '</speak>',
            {
                'lang':'ja-JP',
                'rate':2.0,
                'onEvent':function (event) {
                    console.log(event.type);
                    console.log(event.charIndex);
                    console.log(event);
                }
            },
            function () {
                console.log('Error: ' + chrome.extension.lastError);
           });
    });
});

chrome.extension.onMessage.addListener(function(req, sender, sendResponse) {
console.log('onMessage');
        chrome.tts.getVoices(
            function (voices) {
                for (var i = 0; i < voices.length; i++) {
                    console.log('Voice ' + i + ':');
                    console.log('  name: ' + voices[i].voiceName);
                    console.log('  lang: ' + voices[i].lang);
                    console.log('  gender: ' + voices[i].gender);
                    console.log('  extension id: ' + voices[i].extensionId);
                    console.log('  event types: ' + voices[i].eventTypes);
                }
            });
        var txt = req.data || '今アクティブなタブは<break />' + tab.title + 'です';
        chrome.tts.speak(
            '<?xml version="1.0"?><speak>' + txt + '</speak>',
            {
                'lang':'ja-JP',
                'rate':2.0,
                'onEvent':function (event) {
                    console.log(event.type);
                    console.log(event.charIndex);
                    console.log(event);
                }
            },
            function () {
                console.log('Error: ' + chrome.extension.lastError);
           });
    });