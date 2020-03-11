function toggleActive(x)
{
    x.classList.toggle("active");
    document.getElementById("window-menu").classList.toggle("active");
}

function keyToggleActive(x)
{
    if(event.key == "Enter")
    {
        x.classList.toggle("active");
        document.getElementById("window-menu").classList.toggle("active");
    }
}