
//muestra un formulario para agregar una eperiencia laboral
function addExp(){
    document.getElementById("addExpForm").style.display="block";
}

function addExp2(){
    document.getElementById("addExpForm").style.display="none";
}

//muestra un formulario para agregar una eperiencia laboral
function showEditExp(btn){
    let btns = Array.from(document.getElementsByClassName("btnEditExp"));
    let pos = btns.indexOf(btn);
    let forms = Array.from(document.getElementsByClassName("editExpForm"));
    forms[pos].style.display="block";
}

function hideEditProject(btn){
    let btns = Array.from(document.getElementsByClassName("btnEditExp2"));
    let pos = btns.indexOf(btn);
    let forms = Array.from(document.getElementsByClassName("editExpForm"));
    forms[pos].style.display="none";
}

//muestra un formulario para agregar una educacion formal
function addEdu(){
    document.getElementById("addEduForm").style.display="block";
}

//recupera los datos del input y agrega una educacion formal
function addEdu2(){
    event.preventDefault();//evita que refresque
    document.getElementById("addEduForm").style.display="none";//oculta el frmulario

    //guarda los valores
    let logo = document.getElementById("logoEdu").value;
    let nombre = document.getElementById("nombreEdu").value;
    let fecha = document.getElementById("fechaEdu").value;
    let titulo = document.getElementById("tituloEdu").value;
    let promedio = document.getElementById("promedioEdu").value;

    let edu = document.getElementById("edus"); //toma el elemento dende se va a agregrar 
    let art = document.createElement("article"); //crea el elemento a agregr
    art.className="row art artEdu"; //asigna clase al elemento creado
    //html del elemento creado
    art.innerHTML='<div class="col-2"><img class="logo logoEdu2"></div><div class="col info"><div class="edit"><p class="title nombreEdu2"></p><div class="buttons"><button class="btn-edit" style="display:block" onclick="deletes(this)"><img src="https://i.ibb.co/d07JS50/del.png" alt="edit" class="icon-edit"></button></div></div><p class="fechaEdu2"></p><p class="tituloEdu2"></p><p class="promedioEdu2"></p></div>';
    edu.appendChild(art); //agrega el elemento creado

    //pone valores en el elemento creado
    let l= document.getElementsByClassName("logoEdu2").length;
    document.getElementsByClassName("logoEdu2")[l-1].src=logo;
    document.getElementsByClassName("nombreEdu2")[l-1].innerText=nombre;
    document.getElementsByClassName("fechaEdu2")[l-1].innerText=fecha;
    document.getElementsByClassName("tituloEdu2")[l-1].innerText=titulo;
    document.getElementsByClassName("promedioEdu2")[l-1].innerText=promedio;

    //borra lo escrito en los campos para que se vean los placeholdres
    document.getElementById("logoEdu").value="";
    document.getElementById("nombreEdu").value="";
    document.getElementById("fechaEdu").value="";
    document.getElementById("tituloEdu").value="";
    document.getElementById("promedioEdu").value="";
}


//muestra un formulario para agregar un curso
function addCourse(){
    document.getElementById("addCourseForm").style.display="block";
}

//recupera los datos del input y agrega un curso
function addCourse2(){
    document.getElementById("addCourseForm").style.display="none";//oculta el frmulario
}

function showEditCourse(btn){
    let btns = Array.from(document.getElementsByClassName("btnEditCourse"));
    let pos = btns.indexOf(btn);
    let forms = Array.from(document.getElementsByClassName("editCourseForm"));
    forms[pos].style.display="block";
}

function editCourse2(btn){
    let btns = Array.from(document.getElementsByClassName("btnEditCourse2"));
    let pos = btns.indexOf(btn);
    let forms = Array.from(document.getElementsByClassName("editCourseForm"));
    forms[pos].style.display="none";
}

function showEditProject(btn){
    let btns = Array.from(document.getElementsByClassName("btnEditProject"));
    let pos = btns.indexOf(btn);
    let forms = Array.from(document.getElementsByClassName("editProjectForm"));
    forms[pos].style.display="block";
}

function hideEditProject(btn){
    let btns = Array.from(document.getElementsByClassName("btnHideProject"));
    let pos = btns.indexOf(btn);
    let forms = Array.from(document.getElementsByClassName("editProjectForm"));
    forms[pos].style.display="none";
}



//elimina el cuadro del boton seleccionado
function deletes(btn){
    btn.closest("article").remove();
}

//hace aparecer el formulario de login
function login(){
    document.getElementById("loginDiv").style.display="block";
}

//
function login2(){
    event.preventDefault();
    console.log("1");

    //guarda los valores del formulario
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");

    if ((user.value == "Gabriela") && (pass.value == "123456")){
        //hace aparecer todos los botones de edit
        let buttons = Array.from(document.getElementsByClassName("btn-edit"));
        buttons.forEach(element => element.style.display="block");

        //cambia el boton de login por el de logout
        document.getElementById("login").style.display="none";
        document.getElementById("logout").style.display="block";
    } else {
        alert("Usuario o contraseña incorrectos. Intente de nuevo.");
    }

    //oculta el formulario de login
    document.getElementById("loginDiv").style.display="none";
    user.value="";
    pass.value="";
}

function logout(){
    event.preventDefault();

    //hace desaparecer todos los botones de edit
    let buttons = Array.from(document.getElementsByClassName("btn-edit"));
    buttons.forEach(element => element.style.display="none");

    //cambia el boton de logout por el de login
    document.getElementById("login").style.display="block";
    document.getElementById("logout").style.display="none";
}