function darkMode() {

    var dark=document.getElementById("darkModeSwitch");


    if(dark.checked == true) {
        //BG
        const back = document.getElementsByClassName("container-fluid mainDiv");
        back[0].style.backgroundColor = "rgba(0, 0, 0)";


        //NAVIGATION BAR
        {
            document.getElementById("navigationBar").className = "navbar navbar-expand-lg navbar-dark bg-dark rounded";        
            document.getElementById("navImg").src = "Images/Treble1(White).png";

            const navItems = document.getElementsByClassName("nav-item");
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].className="nav-item nav-darkText";
            }

            document.getElementById("searchTextField").className = "form-control mr-sm-2 bg-dark";
            document.getElementById("searchButton").className = "btn btn-outline-danger bg-dark";
        }
        

        //JUMBOTRON
        {
            document.getElementById("jumbotron").className = "jumbotron bg-dark";
            document.getElementById("jumbotronTitle").className = "Display-1 text-light";
            document.getElementById("jumbotronTitleAbt").className = "Display-3 text-light";
            document.getElementById("darkModeSwitchLabel").style.color = "white";
        }
        
        

        //document.getElementById("navbarSupportedContent").style.color = "white";

        
        document.getElementById("textOnImg1").className="Display-2 textOnImgDark";
        document.getElementById("textOnImg2").className="Display-2 textOnImgDark";

        const myDivs = document.getElementsByClassName("container-fluid rounded myDiv");
        for (let i = 0 ; i < myDivs.length ; i++) {
            myDivs[i].className="container-fluid rounded myDiv bg-dark";
        }

        document.getElementById("musicText").className="Display-4 text-light";
        document.getElementById("aboutText").className="container Display-5 text-light";
        document.getElementById("aboutPageTxt").className="container Display-5 text-light";
        

        //CARDS
        {
            const cardsBG = document.getElementsByClassName("card myCard");
            for (let i = 0 ; i < cardsBG.length ; i++) {
                cardsBG[i].className="card myCard bg-dark";
            }

            const cardsText = document.getElementsByClassName("card-text");
            for (let i = 0 ; i < cardsText.length ; i++) {
                cardsText[i].className="card-text text-light";
            }
        }


        //STATISTICS
        {
            const statsText = document.getElementsByClassName("display-3");
            for (let i = 0 ; i < statsText.length ; i++) {
                statsText[i].className="display-3 text-light";
            }

            document.getElementById("statsRow").style.backgroundColor = "rgba(50, 50, 50, 0.73)";
        }

        const hr = document.getElementsByClassName("myHR");
        hr[0].className="myHRDark";
        
    } else {
        //BG
        const back = document.getElementsByClassName("container-fluid mainDiv");
        back[0].style.backgroundColor = "rgba(76, 74, 74, 0.278)";


        //NAVIGATION BAR
        {
            document.getElementById("navigationBar").className = "navbar navbar-expand-lg navbar-light bg-light rounded";
            document.getElementById("navImg").src = "Images/Treble1.png";
            const navItems = document.getElementsByClassName("nav-item");
            for (let i = 0; i < navItems.length; i++) {
                //navItems[i].style.color = "white";
                navItems[i].className="nav-item";
            }
            document.getElementById("searchTextField").className = ("form-control mr-sm-2");
            document.getElementById("searchButton").className = ("btn btn-outline-danger");
        }
        

        //JUMNOTRON
        {
            document.getElementById("jumbotron").className = "jumbotron bg-light";
            document.getElementById("jumbotronTitle").className = "Display-1 text-dark";
            document.getElementById("darkModeSwitchLabel").style.color = "black";
        }
        
        document.getElementById("textOnImg1").className="Display-2 textOnImg";
        document.getElementById("textOnImg2").className="Display-2 textOnImg";


        const myDivs = document.getElementsByClassName("container-fluid rounded myDiv");
        for (let i = 0; i < myDivs.length; i++) {
            myDivs[i].className="container-fluid rounded myDiv";
        }

        document.getElementById("musicText").className="Display-4";
        document.getElementById("aboutText").className="container Display-5";


        //CARDS
        {
            const cardsBG = document.getElementsByClassName("card myCard");
            for (let i = 0 ; i < cardsBG.length ; i++) {
                cardsBG[i].className="card myCard";
            }

            const cardsText = document.getElementsByClassName("card-text");
            for (let i = 0 ; i < cardsText.length ; i++) {
                cardsText[i].className="card-text";
            }
        }

        //STATISTICS
        {
            const statsText = document.getElementsByClassName("display-3");
            for (let i = 0 ; i < statsText.length ; i++) {
                statsText[i].className="display-3";
            }

            document.getElementById("statsRow").style.backgroundColor = "rgba(135, 135, 135, 0.73)";
        }

        const hr = document.getElementsByClassName("myHR");
        hr[0].className="myHR";
    }

}