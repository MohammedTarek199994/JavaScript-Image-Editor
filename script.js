let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast") ; 
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur= document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let img = document.getElementById("img") ;
let imgBox = document.getElementById("img-box");

let upload = document.getElementById("upload"); 
let download = document.getElementById("download") ; 
let reset = document.getElementById("reset") ; 

let canvas = document.getElementById("canvas") ; 
let ctx  = canvas.getContext("2d") ; 

//---------------------------------------------------------------------------------
// console.log(saturate);
// console.log(contrast);
// console.log(brightness);
// console.log(sepia);
// console.log(grayscale);
// console.log(blur);
// console.log(hueRotate);
//-------------------------------
//console.log(img);
// console.log(imgBox);
//-------------------------------
// console.log(upload);
// console.log(download);
// console.log(reset);
//-------------------------------
//console.log(canvas);
//---------------------------------------------------------------------------------
window.onload = function (){
    download.style.display ='none' ; 
    reset.style.display = 'none' ; 
    imgBox.style.display = 'none' ;
}
//---------------------------------------------------------------------------------
upload.onchange = function(){
    
    resetValue();

    download.style.display ='block' ; 
    reset.style.display = 'block' ; 
    imgBox.style.display = 'block' ;

    let file = new FileReader(); 
    // read the image file as a data URL.
    file.readAsDataURL(this.files[0]);
      // file.readAsDataURL(upload.file[0]) ; 
    file.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("img").src = e.target.result;
    };

    
    img.onload = function (){
        canvas.width = img.width ; 
        canvas.height = img.height ; 
        ctx.drawImage(img,0,0,canvas.width , canvas.height) ;
        canvas.style.display = 'none';
    }
    imgBox.style.display ='none';
}
let filters = document.querySelectorAll(".range");
//console.log(filters);
//---------------------------------------------------------------------------------
filters.forEach (filter => {
    filter.addEventListener('input' , function(){
        ctx.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%) 
            brightness(${brightness.value}%) 
            sepia(${sepia.value}%)  
            grayscale(${grayscale.value}) 
            blur(${blur.value}px) 
            hue-rotate(${hueRotate.value}deg) 
            
        `;
        //-----------------------------------------------
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%) 
            brightness(${brightness.value}%) 
            sepia(${sepia.value}%)  
            grayscale(${grayscale.value}) 
            blur(${blur.value}px) 
            hue-rotate(${hueRotate.value}deg) 
            
        `;

        ctx.drawImage(img,0,0,canvas.width , canvas.height);
       
    })

})
//---------------------------------------------------------------------------------
function resetValue(){
    img.style.filter = 'none' ; 
   //-------------------------------------------
    saturate.value = '100' ; 
    contrast.value = '100' ; 
    brightness.value = '100'; 
    sepia.value = '0'  
    grayscale.value = '0'; 
    blur.value = '0' ; 
    hueRotate.value = '0' ;
}

download.onclick = function(){
    
download.href = canvas.toDataURL();
    console.log("downlosssss");
    canvas.toDataURL("image/png");
    console.log();

;}
//--------------------------------------------------------------------
function downloadImage(url) {
    var image = new Image();
    image.src = url;
    //var a = document.createElement('a');
    a.href = image.src;
    a.download = 'image';
    document.body.appendChild(a);
    a.click();
  }





