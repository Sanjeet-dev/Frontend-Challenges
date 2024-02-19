const images = [
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];
const img = document.querySelector("#carouselImg");

function updateImage(){
    if(images.length>0){
    img.src=images[0];
    }
}
updateImage();

let currIndex = 0;
function nextImg(){
    try{
        
    if(currIndex>=0 && currIndex<images.length-1) {
        currIndex++;
        console.log("clicked:"+currIndex);}
    else{
        currIndex=0;
    }
    img.src=images[currIndex];
}
    catch(err){
        console.log("something went wrong: "+err);
    }
}
  


  