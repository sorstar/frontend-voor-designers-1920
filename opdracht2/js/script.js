var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
<!-- Slideshow container -->
<
div class = "slideshow-container" >

    <!-- Full-width images with number and caption text -->
    <
    div class = "mySlides fade" >
    <
    div class = "numbertext" > 1 / 3 < /div> <
    img src = "img/a0JttcY5QE6PRlJ6pxDiqQ_thumb_2e70.jpg" >
    <
    div class = "text" > Palmboom < /div> <
    /div>

<
div class = "mySlides fade" >
    <
    div class = "numbertext" > 2 / 3 < /div> <
    img src = "img/UNADJUSTEDNONRAW_thumb_30a5.jpg" >
    <
    div class = "text" > Gebouw in Jardin Majorelle < /div> <
    /div>

<
div class = "mySlides fade" >
    <
    div class = "numbertext" > 3 / 3 < /div> <
    img src = "img/UNADJUSTEDNONRAW_thumb_30df.jpg" >
    <
    div class = "text" > Ik in Jardin Marjorelle < /div> <
    /div>

<!-- Next and previous buttons -->
<
a class = "prev"
onclick = "plusSlides(-1)" > & #10094;</a>
    <a class= "next"
onclick = "plusSlides(1)" > & #10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style= "text-align:center" >
    <
    span class = "dot"
onclick = "currentSlide(1)" > < /span> <
    span class = "dot"
onclick = "currentSlide(2)" > < /span> <
    span class = "dot"
onclick = "currentSlide(3)" > < /span> <
    /div>