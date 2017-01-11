$(document).ready(function() {
  $("button#kitty").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bork Bork.</li>");
  });

  $("button#doggy").click(function(){
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").prepend("<li>Purrrrrrr.</li>");
  });

  $("button#puppysmut").click(function(){
    $("img#hiddendoggy").toggle();
  });

  $("button#kittyporn").click(function(){
    $("img#hiddenkitty").toggle();
  });
});
