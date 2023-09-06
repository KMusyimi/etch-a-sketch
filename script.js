window.addEventListener("load", function ()
{
    const gridWrapper = document.querySelector(".grid__wrapper");
    gridWrapper.style.gridTemplateColumns = "repeat(16, 1fr)";
    gridWrapper.style.gridTemplateRows = "repeat(16, 1fr)";
    // const gridMedium = document.querySelector(".grid__medium");
    for (i = 0; i < 256; i++)
    {
        let square = document.createElement("div");
        // square.style.backgroundColor = "blue";
        square.className = "grid";
        gridWrapper.insertAdjacentElement("beforeend", square)
    }
});