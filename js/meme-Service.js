'use strict'

var gCurrLine = 0;

var gKeywords = { 'happy': 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['crazy'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['cute', 'baby', 'animal'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['cute', 'baby', 'animal'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['cute', 'baby'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['cute', 'animal'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['whacky', 'happy'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['happy', 'baby'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['whacky'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['whacky'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['whacky', 'happy'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['whacky'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['happy', 'baby'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['crazy'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['happy', 'baby'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['whacky', 'baby', 'animal'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['whacky'] },
    { id: 19, url: 'imgs/19.jpg', keywords: ['happy'] },
    { id: 20, url: 'imgs/20.jpg', keywords: ['whacky'] },
    { id: 21, url: 'imgs/21.jpg', keywords: ['whacky', 'happy'] },
    { id: 22, url: 'imgs/22.jpg', keywords: ['whacky', 'happy'] },
    { id: 23, url: 'imgs/23.jpg', keywords: ['whacky', 'happy'] },
    { id: 24, url: 'imgs/24.jpg', keywords: ['crazy'] },
    { id: 25, url: 'imgs/25.jpg', keywords: ['happy', 'toy'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            fontFamily: 'Impact',
            yLine: 40,
            xLine: 250,
            align: 'center',
            strokeColor: 'black',
            fillColor: 'white'
        },
        {
            txt: '',
            size: 20,
            yLine: 400,
            xLine: 250,
            fontFamily: 'Impact',
            align: 'center',
            strokeColor: 'black',
            fillColor: 'white'
        }
    ]
}

function getYLine() {
    return gMeme.lines[gMeme.selectedLineIdx].yLine;

}

function getImgs() {
    return gImgs
}

function currCanvasImg(imgId) {
    gMeme.selectedImgId = gImgs.find(img => img.id == imgId);
}
function getImgUrl(){
    return gMeme.selectedImgId.url;
}

function getText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function getTextSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size
}

function txtInModel(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function fontSize(val) {
    if (val === 'increase') {
        gMeme.lines[gMeme.selectedLineIdx].size += 5
    } else gMeme.lines[gMeme.selectedLineIdx].size -= 5;
}

function getLineIdx() {
    return gMeme.selectedLineIdx
}

function textPosY(val) {
    (val === 'up') ? gMeme.lines[gMeme.selectedLineIdx].yLine -= 10 : gMeme.lines[gMeme.selectedLineIdx].yLine += 10;
}

function switchLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1;
    else gMeme.selectedLineIdx = 0;
}


function strokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
}
function fillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color;
}

function getStrokeColor() {
    return gMeme.lines[gMeme.selectedLineIdx].strokeColor
}
function getFillColor() {
    return gMeme.lines[gMeme.selectedLineIdx].fillColor
}
function fontFamily(val) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = val;
}
function getFontFamily() {
    return gMeme.lines[gMeme.selectedLineIdx].fontFamily
}
function textAlign(val) {
    if (val === 'L') {
        gMeme.lines[gMeme.selectedLineIdx].align = 'left';
        gMeme.lines[gMeme.selectedLineIdx].xLine = 10;
    }
    if (val === 'C') {
        gMeme.lines[gMeme.selectedLineIdx].align = 'center';
        gMeme.lines[gMeme.selectedLineIdx].xLine = 250;
    }
    if (val === 'R') {
        gMeme.lines[gMeme.selectedLineIdx].align = 'right';
        gMeme.lines[gMeme.selectedLineIdx].xLine = 490;
    }

}
function getTextAlign() {
    return gMeme.lines[gMeme.selectedLineIdx].align
}
function getXLine() {
    return gMeme.lines[gMeme.selectedLineIdx].xLine
}

