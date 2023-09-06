window.addEventListener("load", function ()
{
    let color = "rgba(112,112,112, 0.5)";
    let mode = "";
    const gridWrapper = document.querySelector(".grid__wrapper");
    // grid 48*48 square div
    const smallGridCount = 36 * 36;
    // grid 16*16 square div
    const mediumGridCount = 16 * 16;
    // grid 8*8 square div
    const largeGridCount = 8 * 8;

    populateGrid(mediumGridCount);
    // add class name on click
    
    const gridSizeBtn = document.querySelectorAll("#grid__size > .btn");
    for (i = 0; i < gridSizeBtn.length; i++)
    {
        gridSizeBtn[i].addEventListener("click", handleGridSizeEvt);
    }

    const colorMode = document.querySelectorAll("#colors__mode > .btn");
    for (i = 0; i < colorMode.length; i++)
    {
        colorMode[i].addEventListener("click", handleColorBtnEvt);
    }
    
    const eraser = document.querySelector(".eraser");
    eraser.addEventListener("click", handleEraserEvt);

    function populateGrid(count, size = "medium")
    {

        for (i = 0; i < count; i++)
        {
            let grid = document.createElement("div");
            grid.className = `grid grid__${size}`;
            grid.addEventListener("mouseover", handleColorModeEvt);
            gridWrapper.insertAdjacentElement("beforeend", grid);

        }
    }

    function resetGrid()
    {
        const grids = document.querySelectorAll(".grid");
        for (let i = 0; i < grids.length; i++)
        {
            grids[i].parentNode.removeChild(grids[i]);

        }
    }


    function getGridSize(evt)
    {
        const previousSelected = document.querySelector("#grid__size > .selected");
        const clickedBtn = evt.target;
        previousSelected.classList.remove("selected");

        setTimeout(() =>
        {
            clickedBtn.classList.add("selected");
        }, 30);
        return clickedBtn;
    }
    function getColorMode(evt)
    {
        const previousSelected = document.querySelector("#colors__mode > .selected");
        const clickedBtn = evt.target;
        previousSelected.classList.remove("selected");

        setTimeout(() =>
        {
            clickedBtn.classList.add("selected");
        }, 30);
        return clickedBtn;
    }

    function handleGridSizeEvt(evt)
    {
        const choice = getGridSize(evt);
        const size = choice.getAttribute("id");
        resetGrid();
        switch (size)
        {
            case "small":
                populateGrid(smallGridCount, "small");
                break;
            case "medium":
                populateGrid(mediumGridCount, "medium");
                break;
            case "large":
                populateGrid(largeGridCount, "large");
                break;
        }
    }
   
    function handleColorBtnEvt(evt)
    {
        const choice = getColorMode(evt);
        const colorMode = choice.getAttribute("id");
        switch (colorMode)
        {
            case "classic":
                mode = "classic";
                color = "hsla(0, 0%, 43.9%, 0.5)";
                break;
            case "modern":
                mode = modern;
                color = "hsla(0, 0%, 43.9%, 1)";
                break;
            case "rainbow":
                mode = colorMode;
                break;

        }

    }
    function calcColor(max, min, val)
    {
        const minHue = 240, maxHue = 0;
        const currentPercent = (val - min) / (max - min);
        return `hsla(${parseInt(Math.random(currentPercent*(maxHue-minHue)+minHue)*360)},100%, 50%, 1)`;
        
    }
    function handleColorModeEvt(evt)
    {
        if (mode === "rainbow"){
            color = calcColor(0, 9, 5);
        }
        evt.target.style.backgroundColor = color;
    }
    function handleEraserEvt(){
        color = "hsla(204, 8%, 76%, 1)";
    }
});


