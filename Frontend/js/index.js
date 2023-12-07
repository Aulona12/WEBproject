let i = 0;
let imgArray = [
    './img/TheCars/m240i xdrive coupe.webp',
    './img/TheCars/530i drive sedan.webp',
    './img/TheCars/740i sedan.webp',
    './img/TheCars/bmw i5 m60.webp',
    './img/TheCars/cosy.webp',
    './img/TheCars/m3 sedan.webp',
    './img/TheCars/m4 coupe.webp',
    './img/TheCars/m8 convertible.webp',
    './img/TheCars/m8 coupe.webp',
    './img/TheCars/m8 gran coupe.webp',
    './img/TheCars/m240i xdrive coupe.webp',
    './img/TheCars/m440i gran coupe.webp',
    './img/TheCars/x4 m.webp',
    './img/TheCars/x6 m competiton.webp',
];
        function changeImg(){
            document.getElementById('slideshow').src = imgArray[i];

            if(i< imgArray.length -1){
                i++;
            }
            else{
                i=0;
            }
            //setTimeout("changeImg()", 2600);
        }
        document.addEventListener(onload, changeImg());