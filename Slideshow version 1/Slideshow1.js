function slideLeft(){
  let temp = document.images[document.images.length - 1].src;
  for(let i = document.images.length - 1; i > 0; i--){
    document.images[i].src = document.images[i - 1].src
  }
  document.images[0].src = temp;
}
function slideRight(){
  let temp = document.images[0].src;
  for(let i = 0; i < document.images.length - 1; i++){
    document.images[i].src = document.images[i + 1].src
  }
  document.images[document.images.length - 1].src = temp;
}