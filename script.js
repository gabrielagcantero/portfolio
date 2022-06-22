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
    art.className="row art artExp"; //asigna clase al elemento creado
    //html del elemento creado
    art.innerHTML='<div class="col-2"><img class="logo logoExp2"></div><div class="col info"><div class="edit"><p class="title nombreExp2"></p><div class="buttons"><button class="btn-edit" onclick="deletes(this)"><img src="img/del.png" alt="edit" class="icon-edit"></button></div></div><p class="fechaExp2"></p><p class="puestoExp2"></p><p class="tareasExp2"></p></div>';
    exp.appendChild(art); //agrega el elemento creado

    //pone valores en el elemento creado
    let l= document.getElementsByClassName("logoExp2").length;
    document.getElementsByClassName("logoExp2")[l-1].src=logo;
    document.getElementsByClassName("nombreExp2")[l-1].innerText=nombre;
    document.getElementsByClassName("fechaExp2")[l-1].innerText=fecha;
    document.getElementsByClassName("puestoExp2")[l-1].innerText=puesto;
    document.getElementsByClassName("tareasExp2")[l-1].innerText=tareas;

    //borra lo escrito en los campos para que se vean los placeholdres
    document.getElementById("logoExp").value="";
    document.getElementById("nombreExp").value="";
    document.getElementById("fechaExp").value="";
    document.getElementById("puestoExp").value="";
    document.getElementById("tareasExp").value="";
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
    art.innerHTML='<div class="col-2"><img class="logo logoEdu2"></div><div class="col info"><div class="edit"><p class="title nombreEdu2"></p><div class="buttons"><button class="btn-edit" onclick="deletes(this)"><img src="img/del.png" alt="edit" class="icon-edit"></button></div></div><p class="fechaEdu2"></p><p class="tituloEdu2"></p><p class="promedioEdu2"></p></div>';
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
function addCurso(){
    document.getElementById("addCursoForm").style.display="block";
}

//recupera los datos del input y agrega un curso
function addCurso2(){
    event.preventDefault();//evita que refresque
    document.getElementById("addCursoForm").style.display="none";//oculta el frmulario

    //guarda los valores
    let logo = document.getElementById("logoCurso").value;
    let nombre = document.getElementById("nombreCurso").value;
    let fecha = document.getElementById("fechaCurso").value;
    let titulo = document.getElementById("tituloCurso").value;

    let curso = document.getElementById("cursos"); //toma el elemento dende se va a agregrar 
    let art = document.createElement("article"); //crea el elemento a agregr
    art.className="row art artCurso"; //asigna clase al elemento creado
    //html del elemento creado
    art.innerHTML='<div class="col-3"><img class="logo logoCurso2"></div><div class="col info"><div class="edit"><p class="title nombreCurso2"></p><div class="buttons"><button class="btn-edit"  onclick="deletes(this)"><img src="img/del.png" alt="edit" class="icon-edit"></button></div></div><p class="fechaCurso2"></p><p class="tituloCurso2"></p></div>';
    curso.appendChild(art); //agrega el elemento creado

    //pone valores en el elemento creado
    let l= document.getElementsByClassName("logoCurso2").length;
    document.getElementsByClassName("logoCurso2")[l-1].src=logo;
    document.getElementsByClassName("nombreCurso2")[l-1].innerText=nombre;
    document.getElementsByClassName("fechaCurso2")[l-1].innerText=fecha;
    document.getElementsByClassName("tituloCurso2")[l-1].innerText=titulo;

    //borra lo escrito en los campos para que se vean los placeholdres
    document.getElementById("logoCurso").value="";
    document.getElementById("nombreCurso").value="";
    document.getElementById("fechaCurso").value="";
    document.getElementById("tituloCurso").value="";
}

//muestra un formulario para modificar la imagen de las skills
function modifySkills(){
    document.getElementById("modifySkillsForm").style.display="block";
}

//recupera los datos del input y cambia la imagen de las skills
function modifySkills2(){
    event.preventDefault();//evita que refresque
    document.getElementById("modifySkillsForm").style.display="none";//oculta el frmulario

    //guarda los valores
    let img = document.getElementById("skillsImg").value;

    //reemplaza la imagen
    document.getElementById("skillsImg2").src=img;

    //borra lo escrito en los campos para que se vean los placeholdres
    document.getElementById("logoCurso").value="";
}

//muestra un formulario para agregar un proyecto
function addProyect(){
    document.getElementById("addProyectForm").style.display="block";
}

//recupera los datos del input y agrega un Proyect
function addProyect2(){
    event.preventDefault();//evita que refresque
    document.getElementById("addProyectForm").style.display="none";//oculta el frmulario

    //guarda los valores
    let img = document.getElementById("imgProyect").value;
    let nombre = document.getElementById("nombreProyect").value;
    let desc = document.getElementById("descProyect").value;
    let link = document.getElementById("linkProyect").value;

    let proyect = document.getElementById("proyects"); //toma el elemento dende se va a agregrar 
    let art = document.createElement("article"); //crea el elemento a agregr
    art.className="row art artProyect"; //asigna clase al elemento creado
    //html del elemento creado
    art.innerHTML='<iframe class="col-5 imgProyect2" src="" width="444" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><div class="col desc"><div class="edit"><p class="title nombreProyect2"></p><div class="buttons"><button class="btn-edit"  onclick="deletes(this)"><img src="img/del.png" alt="edit" class="icon-edit"></button></div></div><p class="descProyect2"></p><p>Puede verse el código <a class="linkProyect2" href="" >aquí</a></p></div>';
    proyect.appendChild(art); //agrega el elemento creado

    //pone valores en el elemento creado
    let l= document.getElementsByClassName("imgProyect2").length;
    document.getElementsByClassName("imgProyect2")[l-1].src=img;
    document.getElementsByClassName("nombreProyect2")[l-1].innerText=nombre;
    document.getElementsByClassName("descProyect2")[l-1].innerText=desc;
    document.getElementsByClassName("linkProyect2")[l-1].href=link;

    //borra lo escrito en los campos para que se vean los placeholdres
    document.getElementById("logoProyect").value="";
    document.getElementById("nombreProyect").value="";
    document.getElementById("fechaProyect").value="";
    document.getElementById("tituloProyect").value="";
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