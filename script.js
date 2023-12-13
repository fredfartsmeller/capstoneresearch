function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("Squidward.png")) {
      image.src = "Mr.Krabs.png";
    } else {
      image.src = "Squidward.png";
    }
  }
 