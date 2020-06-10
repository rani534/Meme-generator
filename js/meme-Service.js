'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['happy'] }
];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getImgs(){
   return gImgs
}

function getUrl() {
    var img = getImgById(1);
   return img.url
}


function getImgById(imgId) {
    return gImgs.find(img => img.id == imgId);
}

function getText(){
   return gMeme.lines[0].txt
}

function txtInModel(txt){
    gMeme.lines[0].txt = txt;
}