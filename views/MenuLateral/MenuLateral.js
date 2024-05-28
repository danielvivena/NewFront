
//Dropdown do menu lateral
//************************
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

//Esconder/Exibir menu lateral
//****************************
//function MenuToggle() {
//  var menu = document.getElementById("menu_lateral");
//  var botao = document.getElementsByClassName("menu-toggle");

//  if (menu.style.left == "-220px") {
//      menu.style.left = "0px";
//  } else {
//      menu.style.left = "-220px";
//  }
//}

//ToolTips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

