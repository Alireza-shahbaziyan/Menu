const icon = document.getElementById("menu_icon")
const menu = document.getElementById("main_menu")


function OnclickOpenIcon() {
    icon.style.display = 'none'
    menu.style.display = 'block'
}
function onclickCloseIcon() {
    menu.style.display = 'none'
    icon.style.display = 'block'
}