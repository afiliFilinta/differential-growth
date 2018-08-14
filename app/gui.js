define(() => {


    function createSideBar(enableControls, disableControls, startPuseButton, cleanButton, addLineButton, animateButton, resetButton) {

        var sidebarDiv = document.getElementById("sidebar");
        sidebarDiv.className = "sidebar";
        var divCanvas = document.getElementById("canvas");
        divCanvas.className = "pad";

        //fill window
        var windowHeight = window.innerHeight;
        var divCanvasHeight = windowHeight;

        //set sidebar and pad sizes and store in 
        divCanvas.setAttribute("style", "height:" + divCanvasHeight + "px;");
        sidebarDiv.setAttribute("style", "min-height:" + divCanvasHeight + "px;");

        var e = document.createElement("SPAN");
        e.className = "title";
        e.innerHTML = "Differential Growth";
        e.innerHTML += '<span class="n">ITU</span>';
        sidebarDiv.appendChild(e);

        e = document.createElement("DIV");
        e.className = "divSeparator";
        sidebarDiv.appendChild(e);


        // Radius
        e = document.createElement("BR");
        sidebarDiv.appendChild(e);

        e = document.createElement("SPAN");
        e.className = "letterLabel";
        e.innerHTML = "Radius";
        sidebarDiv.appendChild(e);

        e = document.createElement("INPUT");
        e.className = "number";
        e.setAttribute("type", "number");
        e.setAttribute("value", defaultSettings.radius);
        e.setAttribute("id", "radius");
        sidebarDiv.appendChild(e);

        e = document.createElement("DIV");
        e.className = "divSeparator";
        sidebarDiv.appendChild(e);


        // Desired Separation
        e = document.createElement("BR");
        sidebarDiv.appendChild(e);

        e = document.createElement("SPAN");
        e.className = "letterLabel";
        e.innerHTML = "Desired Separation";
        sidebarDiv.appendChild(e);

        e = document.createElement("INPUT");
        e.className = "number";
        e.setAttribute("type", "number");
        e.setAttribute("value", defaultSettings.desiredSeparation);
        e.setAttribute("id", "desiredSeparation");
        sidebarDiv.appendChild(e);

        e = document.createElement("DIV");
        e.className = "divSeparator";
        sidebarDiv.appendChild(e);

        // Max Edge Length
        e = document.createElement("BR");
        sidebarDiv.appendChild(e);

        e = document.createElement("SPAN");
        e.className = "letterLabel";
        e.innerHTML = "Max Edge Length";
        sidebarDiv.appendChild(e);

        e = document.createElement("INPUT");
        e.className = "number";
        e.setAttribute("type", "number");
        e.setAttribute("value", defaultSettings.maxEdgeLen);
        e.setAttribute("id", "maxEdgeLen");
        sidebarDiv.appendChild(e);

        e = document.createElement("DIV");
        e.className = "divSeparator";
        sidebarDiv.appendChild(e);

        // Start/Pause BUTTON

        var button = makeButton("startPause", "startPuse", false, "Start");
        sidebarDiv.appendChild(button);
        button.addEventListener("click", startPuseButton);

        sidebarDiv.addEventListener('mousedown', disableControls, false);
        sidebarDiv.addEventListener('mouseup', enableControls, false);

        e = document.createElement("DIV");
        e.className = "divSeparator";
        sidebarDiv.appendChild(e);


        // Clean BUTTON

        var button = makeButton("clean", "clean", false, "Clean");
        sidebarDiv.appendChild(button);
        button.addEventListener("click", cleanButton);

        sidebarDiv.addEventListener('mousedown', disableControls, false);
        sidebarDiv.addEventListener('mouseup', enableControls, false);

        e = document.createElement("DIV");
        e.className = "divSeparator";
        sidebarDiv.appendChild(e);

        // Add Line Button

        var button = makeButton("addLine", "small", "add line", false);
        var image = makeImage("addLineIcon", "edit", "img/line.png");
        button.appendChild(image);
        sidebarDiv.appendChild(button);
        button.addEventListener("click", addLineButton);

        // Animate Button

        var button = makeButton("animate", "small", "animation", false);
        var image = makeImage("animateIcon", "edit", "img/camera.png");
        button.appendChild(image);
        sidebarDiv.appendChild(button);
        button.addEventListener("click", animateButton);

        // Reset Button 

        var button = makeButton("reset", "small", "reset", false);
        var image = makeImage("resetIcon", "edit", "img/reset.png");
        button.appendChild(image);
        sidebarDiv.appendChild(button);
        button.addEventListener("click", resetButton);

    }


    function makeButton(id, className, title, text) {
        var button = document.createElement("BUTTON");
        if (className) {
            button.setAttribute("class", className);
        }
        if (id) {
            button.setAttribute("id", id);
        }
        if (title) {
            button.setAttribute("title", title);
        }
        if (text) {
            button.innerHTML = text;
        }
        return button;
    }

    function makeImage(id, className, src) {
        var i = document.createElement("IMG");
        if (className) {
            i.setAttribute("class", className);
        }
        if (id) {
            i.setAttribute("id", id);
        }
        if (src) {
            i.setAttribute("src", src);
        }
        return i;
    }

    return {
        createSideBar,
    };
});