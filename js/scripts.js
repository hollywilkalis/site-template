function Album (cover, album, name) {
  this.cover = cover;
  this.album = album;
  this.name = name;
};



$(function() {
  $(".album-input").submit(function(event){
      event.preventDefault();
      var inputCover = $("input#cover-url").val();
      var inputAlbum = $("input#album-name").val();
      var inputName = $("input#artist-name").val();

      var newAlbum = new Album(inputCover, inputAlbum, inputName);
      console.log(newAlbum);

      $("section#display").append('<div class="gallery-item"><div class="front"></div><div class="back"></div></div>');
      $(".gallery-item:last-child .front").css('background-image', 'url(' + newAlbum.cover +')');
      $(".gallery-item:last-child .back").append("<h1>" + newAlbum.album + "</h1>");
      $(".gallery-item:last-child .back").append("<h2>" + newAlbum.name + "</h2>");
  });
});
