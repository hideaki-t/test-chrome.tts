chrome.browserAction.onClicked.addListener(function (tab) {
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
    chrome.tts.speak(
        '<?xml version="1.0"?><speak>今アクティブなタブは<break />' + tab.title + 'です</speak>',
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