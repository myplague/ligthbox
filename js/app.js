//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
var overlay = $("<div id='overlay'></div>")
var img = $("<img/>")
var caption = $("<p></p>")


//intentar juntar como un arreglo los .append
overlay.append(img)
overlay.append(caption)

$("body").append(overlay)
overlay.hide()

$('a').click(function(event){
event.preventDefault()
overlay.show()
var imageLocation = $(this).attr("href")
img.attr('src', imageLocation)
})


overlay.click(function(){
  overlay.hide()
})
