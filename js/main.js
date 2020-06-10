'use strict'



var gElCanvas;
var gCtx;
var gElImg;

function onInit() {
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    onResizeCanvas();
    gCtx.fillStyle = 'white';
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);
    renderImg()
    onDrawImg()
}

function onResizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}


function onDrawImg() {
    gElImg = new Image();
    gElImg.src = `./${getUrl()}`;
    gElImg.onload = () => {
        gCtx.drawImage(gElImg, 0, 0, gElCanvas.width, gElCanvas.height);
    }
}


function onDrawText(x, y) {
    console.log(x, y);
    var text = getText();
    console.log(text);
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white'
    gCtx.lineWidth = '1';
    gCtx.font = '50px Impact';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}



function inputVal(txt) {
    txtInModel(txt);
    onDrawCanvas();
}

function onDrawCanvas() {
    onDrawCurrImg();
    onDrawText(gElCanvas.width / 2, 100);
}

function onDrawCurrImg() {
    gCtx.drawImage(gElImg, 0, 0, gElCanvas.width, gElCanvas.height);
}


function renderImg() {
    var elImgContainer = document.querySelector('.images-container');
    console.log('container', elImgContainer)
    let imgs = getImgs();
    let strHtmls = imgs.map(function(img){
         return `
         <img src="${img.url}">
         `
    });
    console.log(strHtmls);
    let strHtml = strHtmls.join('');
    console.log(strHtml);
    elImgContainer.innerHTML =  strHtml;
    
}