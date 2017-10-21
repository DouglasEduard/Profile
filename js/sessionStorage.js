function LoadHeaderInSession(nbh , imgS, CoH, Ftr) {
    sessionStorage.setItem("navbarHeader", nbh);
    sessionStorage.setItem("imgsmall", imgS);
    sessionStorage.setItem("collapnav", CoH);
    sessionStorage.setItem("pnlFooter", Ftr);
}

function SetHeaderInSession(nbh, imgS, CoH, footer) {

    if ((sessionStorage.getItem("navbarHeader") == null) ||
        (sessionStorage.getItem("imgsmall") == null) ||
        (sessionStorage.getItem("collapnav") == null) ||
        (sessionStorage.getItem("pnlFooter") == null)) {
        window.location.href = "/";
    }    

    nbh.innerHTML = sessionStorage.getItem("navbarHeader");
    imgS.innerHTML = sessionStorage.getItem("imgsmall");
    CoH.innerHTML = sessionStorage.getItem("collapnav");
    footer.innerHTML = sessionStorage.getItem("pnlFooter");
}