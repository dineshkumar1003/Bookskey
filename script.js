var popupButton=document.getElementById("add-popup-button")
var popBox=document.querySelector(".pop-box")
var popOverlay=document.querySelector(".pop-overlay")
popupButton.addEventListener("click",function()
{
    popOverlay.style.display="block"
    popBox.style.display="block"
})
var cancelpop=document.getElementById("cancel-popup")
cancelpop.addEventListener("click",function(event)
{
    event.preventDefault()
    popOverlay.style.display="none"
    popBox.style.display="none"
})
var bookcontainer=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktittle=document.getElementById("book-tittle-input")
var bookauthor=document.getElementById("book-author-input")
var description=document.getElementById("book-description-input")
addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktittle.value}</h2>
    <h5>${bookauthor.value}</h5><p>${description.value}</p><button onclick="deletebook(event)">Delete</button>`
    bookcontainer.append(div) 
    popOverlay.style.display="none"
    popBox.style.display="none"
    booktittle.value = ""
    bookauthor.value = ""
    description.value = ""
})
function deletebook(event) {
    var book = event.target.parentElement
    book.style.opacity = "0"
    setTimeout(function() {
        book.remove()
    }, 300)
}
