function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("patrick.jpeg")) {
      image.src = "spongebob.jpeg";
    } else {
      image.src = "patrick.jpeg";
    }
  }
 