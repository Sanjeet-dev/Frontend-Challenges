const images = [
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];
const img = document.querySelector("#carouselImg");
let currIndex = 0;
let isManualNavigation=false;
let timeoutId;

function updateImage(){
    if(images.length>0){
    img.src=images[0];
    }
}


function nextImg(){
    if(currIndex>=0 && currIndex<images.length-1) {
        currIndex++;
        console.log("clicked:"+currIndex);}
    else{
        currIndex=0;
    }
    img.src=images[currIndex];
    stopAutoSlide(); // Stop auto-sliding when manually navigating
    isManualNavigation = true; // Set manual navigation flag
    setTimeout(autoScheduleSlide, 3000);
}

function previousImg(){
    if(currIndex>0){
        currIndex--;
    }
    else{
        currIndex=images.length-1;
    }
    img.src=images[currIndex];
    console.log("clicked PreviousBtn:"+currIndex);
    stopAutoSlide(); // Stop auto-sliding when manually navigating
    isManualNavigation = true; // Set manual navigation flag
    setTimeout(autoScheduleSlide, 3000);
}

// auto sliding feature
function autoScheduleSlide(){
    console.log("auto slide working");
    if(!isManualNavigation){
   timeoutId= setTimeout(()=>{
        nextImg();
        autoScheduleSlide();
    },3000);
}
    
}

// stop the sliding feature on manually sliding
function stopAutoSlide(){
    
    clearTimeout(timeoutId);
    isManualNavigation=false;
}


//initially updating images with first images
updateImage();

// auto sliding the images in next manner
autoScheduleSlide();
  
  


  