function darkMode() {

    var dark=document.getElementById("darkModeSwitch");


    if(dark.checked == true) {
        const back = document.getElementsByClassName("container-fluid mainDiv");
        back[0].style.backgroundColor = "rgba(0, 0, 0, 0.618)";

        document.getElementById("navigationBar").className = "navbar navbar-expand-lg navbar-dark bg-dark rounded";
        
        document.getElementById("navImg").src = "Images/Treble1(White).png";

        const navItems = document.getElementsByClassName("nav-item");
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].className="nav-item nav-darkText";
        }

        document.getElementById("searchTextField").className = "form-control mr-sm-2 bg-dark";
        document.getElementById("searchButton").className = "btn btn-outline-danger bg-dark";


        document.getElementById("jumbotron").className = "jumbotron bg-dark";
        document.getElementById("jumbotronTitle").className = "Display-1 text-light";
        

        document.getElementById("navbarSupportedContent").style.color = "white";

        document.getElementById("textOnImgID").className = "Display-2 textOnImgDark";

        
        
    } else {
        const back = document.getElementsByClassName("container-fluid mainDiv");
        back[0].style.backgroundColor = "rgba(76, 74, 74, 0.278)";

        document.getElementById("navigationBar").className = "navbar navbar-expand-lg navbar-light bg-light rounded";
        document.getElementById("navImg").src = "Images/Treble1.png";
        const navItems = document.getElementsByClassName("nav-item");
        for (let i = 0; i < navItems.length; i++) {
            //navItems[i].style.color = "white";
            navItems[i].className="nav-item";
        }
        document.getElementById("searchTextField").className = ("form-control mr-sm-2");
        document.getElementById("searchButton").className = ("btn btn-outline-danger");

        document.getElementById("jumbotron").className = "jumbotron bg-light";
        document.getElementById("jumbotronTitle").className = "Display-1 text-dark";
    }

}