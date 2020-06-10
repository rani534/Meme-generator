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
    gElImg.src = gMeme.selectedImgId.url;
    gElImg.onload = () => {
        gCtx.drawImage(gElImg, 0, 0, gElCanvas.width, gElCanvas.height);
    }
}


function onDrawText(x) {
    var text = getText();
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white'
    gCtx.lineWidth = '1';
    gCtx.font = `${getTextSize()}px Impact`;
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, getLineIdx());
    gCtx.strokeText(text, x, getLineIdx());
}


function inputVal(txt) {
    txtInModel(txt);
    onDrawCanvas();
}

function onDrawCanvas() {
    onDrawCurrImg();
    onDrawText(gElCanvas.width / 2);
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

function onFontSize(el){
    const val = el.innerText;
      fontSize(val);
      onDrawCanvas()
}

function onTextPosY(el){
    const val = el.innerText;
    textPosY(val);
    onDrawCanvas();
}
function onSwitchLine(){
  var elInput =  document.querySelector('[name=text]');
    elInput.value = '';
    // const data = gElCanvas.toDataURL();

    // switchLine();

    
}