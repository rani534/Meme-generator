'use strict'

var gCurrLine = 0;

var gKeywords = { 'happy': 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['happy'] }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 40,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getImgs() {
    return gImgs
}

getImgById(1)
function getImgById(imgId) {
    gMeme.selectedImgId = gImgs.find(img => img.id == imgId);
    return gMeme.selectedImgId;
}

function getText() {
    return gMeme.lines[gCurrLine].txt
}
function getTextSize() {
    return gMeme.lines[gCurrLine].size
}

function txtInModel(txt) {
    gMeme.lines[gCurrLine].txt = txt;
}

function fontSize(val) {
    (val === 'increase') ? gMeme.lines[gCurrLine].size += 5 : gMeme.lines[gCurrLine].size -= 5;
    console.log(gMeme.lines[gCurrLine].size)

}

function getLineIdx() {
    return gMeme.selectedLineIdx
}

function textPosY(val) {
    (val === 'up') ? gMeme.selectedLineIdx -= 10 : gMeme.selectedLineIdx += 10;
}

function switchLine(){
    // gCurrLine +=1 ;
}