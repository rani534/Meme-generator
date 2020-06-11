'use strict'

var gElCanvas;
var gCtx;
var gElImg;
var prevPosLine = {
    x: 0,
    y: 0
}


function onInit() {
    renderImg();
}

function onImgCanvas(imgId) {
    let elImages = document.querySelector('.images-container');
    elImages.style.display = 'none';
    let elEditor = document.querySelector('.editor-container');
    elEditor.style.display = 'block';
    currCanvasImg(imgId);
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    gElImg = new Image();
    gElImg.src = getImgUrl();
 
    gElCanvas.width = 500;
    gElCanvas.height = ((500 * gElImg.height) / gElImg.width);
    gElImg.onload = () => {
        gCtx.drawImage(gElImg, 0, 0 , gElCanvas.width, gElCanvas.height);
    }
}

function onDrawText() {

    let text = getText();
    gCtx.strokeStyle = getStrokeColor();
    gCtx.fillStyle = getFillColor();
    gCtx.lineWidth = '1';
    gCtx.font = `${getTextSize()}px ${getFontFamily()}`;
    gCtx.textAlign = getTextAlign();
    gCtx.fillText(text, getXLine(), getYLine());
    gCtx.strokeText(text, getXLine(), getYLine());
}

function inputVal(txt) {
    txtInModel(txt);
    onDrawCanvas();
}

function onDrawCanvas() {
    onDrawCurrImg();

    onDrawText();
}

function onDrawCurrImg() {
    gCtx.drawImage(gElImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

function renderImg() {
    var elImgContainer = document.querySelector('.images-container');
    let imgs = getImgs();
    let strHtmls = imgs.map(function (img) {
        return `
         <img onclick="onImgCanvas(${img.id})" src="${img.url}">
         `
    });
    let strHtml = strHtmls.join('');
    elImgContainer.innerHTML = strHtml;

}

function onFontSize(val) {
    fontSize(val);
    onDrawCanvas()
}
function onFontFamily(val) {
    fontFamily(val);
    onDrawCanvas();
}

function onTextPosY(val) {
    textPosY(val);
    onDrawCanvas();
}
function onSwitchLine() {
    let elInput = document.querySelector('[name=text]');
    elInput.value = '';
    gCtx.save();

}

function onStrokeColor(color) {
    strokeColor(color);
    onDrawCanvas();
}
function onFillColor(color) {
    fillColor(color);
    onDrawCanvas();
}
function onTextAlign(el) {
    const val = el.innerText;
    textAlign(val);
    onDrawCanvas();
}

function onDownloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'your memes';
}
