"use strict";

/* initialize all canvases */
function start() {
    /* get WebGL context and load required extensions */
    for (var i in IDS) {
        var id = IDS[i];
        SPECTROGRAMS[id] = new Spectrogram(id);
    }
}

function updateSpectrogramStartTimes() {
    for (var i in IDS) {
        var id = IDS[i];
        SPECTROGRAMS[id].updateStartRequestTime();
    }
}
