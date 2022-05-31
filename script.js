var state = Boolean;

//funcion que cambia el valor del input a visible
function editAbout(){
    if (document.getElementById("aboutCamp").style.display=="none") { 
        document.getElementById("aboutCamp").style.display="block";
        let editMyAbout = document.getElementById("aboutText");
        document.getElementById("titleCamp").style.display="block";
        let editMyTitle = document.getElementById("titleText");
        document.getElementById("mailCamp").style.display="block";
        let editMyMail = document.getElementById("mailText");
        document.getElementById("telCamp").style.display="block";
        let editMyTell = document.getElementById("telText");
        document.getElementById("dirCamp").style.display="block";
        let editMyDir = document.getElementById("dirText");
    } else {
        document.getElementById("aboutCamp").style.display="none";
        document.getElementById("titleCamp").style.display="none";
        document.getElementById("mailCamp").style.display="none";
        document.getElementById("telCamp").style.display="none";
        document.getElementById("dirCamp").style.display="none";
    }
};


//cambia el valor de mi texto por el input
function editAbout2(valor){
    document.getElementById("aboutText").innerText=valor;
};

function editTitle2(valor){
    document.getElementById("titleText").innerText=valor;
};

function editMail2(valor){
    document.getElementById("mailText").innerText=valor;
};

function editTel2(valor){
    document.getElementById("telText").innerText=valor;
};

function editDir2(valor){
    document.getElementById("dirText").innerText=valor;
};

/*controla si se presionó enter
function logMessage(message){
    console.log(message + "<br>");
}

var textarea;


textarea = document.getElementById("dirCamp")
textarea.addEventListener('keyup', (e) => {
    logMessage('key "${e.key}" released [event: keyup]');
    if (e.key=="Enter") {
        document.getElementById("dirCamp").style.display="none"
    }
});*/