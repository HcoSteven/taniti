var faqHeader = document.getElementsByClassName("faq-header");
var index;

for (index = 0; index < faqHeader.length; index ++) {
    faqHeader[index].addEventListener("click", function() {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    })
}