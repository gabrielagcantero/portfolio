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

//muestra un formulario para agregar una eperiencia laboral
function addExp(){
    document.getElementById("addExpForm").style.display="block";
}

//recupera los datos del input y agrega una experiencia
function addExp2(){
    event.preventDefault();//evita que refresque
    document.getElementById("addExpForm").style.display="none";//oculta el frmulario

    //guarda los valores
    let logo = document.getElementById("logoExp").value;
    let nombre = document.getElementById("nombreExp").value;
    let fecha = document.getElementById("fechaExp").value;
    let puesto = document.getElementById("puestoExp").value;
    let tareas = document.getElementById("tareasExp").value;

    let exp = document.getElementById("exps"); //toma el elemento dende se va a agregrar 
    let art = document.createElement("article"); //crea el elemento a agregr
    art.className="row art"; //asigna clase al elemento creado
    //html del elemento creado
    art.innerHTML='<div class="col-2"><img class="logo logoExp2"></div><div class="col info"><div class="edit"><p class="title nombreExp2"></p><div class="buttons"><button class="btn-edit"><img src="img/del.png" alt="edit" class="icon-edit"></button><button class="btn-edit"><img src="img/edit.png" alt="edit" class="icon-edit"></button></div></div><p class="fechaExp2"></p><p class="puestoExp2"></p><p class="tareasExp2"></p></div>';
    exp.appendChild(art); //agrega el elemento creado

    //pone valores en el elemento creado
    let l= document.getElementsByClassName("logoExp2").length;
    document.getElementsByClassName("logoExp2")[l-1].src=logo;
    document.getElementsByClassName("nombreExp2")[l-1].innerText=nombre;
    document.getElementsByClassName("fechaExp2")[l-1].innerText=fecha;
    document.getElementsByClassName("puestoExp2")[l-1].innerText=puesto;
    document.getElementsByClassName("tareasExp2")[l-1].innerText=tareas;

    document.getElementById("logoExp").value="";
    document.getElementById("nombreExp").value="";
    document.getElementById("fechaExp").value="";
    document.getElementById("puestoExp").value="";
    document.getElementById("tareasExp").value="";
}

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