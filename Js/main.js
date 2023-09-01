
function changeImage(){
    let displayImage = document.getElementById('img')
    if(displayImage.src.match('./pic/pic1.jpg')){
        displayImage.src = './pic/pic2.jpg'
    } else {
        displayImage.src.match('./pic/pic2.jpg')
        displayImage.src = './pic/pic1.jpg';
    }
}