let myImage = document.querySelector('.space1');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/space.png') {
      myImage.setAttribute('src', 'images/space2.png');
    } else {
      myImage.setAttribute('src', 'images/space.png');
    }
});




