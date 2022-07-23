
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulario prueba</title>
    </head>
    <body>
        <form action="SvPerson" method="POST">
            <input type="text" name="name" placeholder="Nombre y apellido"><br>
            <input type="text" name="photo" placeholder="Url de la foto"><br>
            <input type="text" name="title" placeholder="Título"><br>
            <input type="text" name="address" placeholder="Domicilio"><br>
            <input type="text" name="tel" placeholder="Teléfono"><br>
            <input type="text" name="mail" placeholder="E-mail"><br>
            <input type="text" name="about" placeholder="Sobre mí"><br>
            <input type="text" name="skills" placeholder="Url de la imagen con habilidades"><br>
            <button type="submit">Actualizar</button>
        </form>
           
        <p>Ver lista</p>
        <form action="SvPerson" method="GET">
            <button type="submit">Mostrar</button>
        </form>
        
        <p>Borrar Persona</p>
        <form action="SvDelPerson" method="POST">
            <input type="text" name="idPerson" placeholder="Id de la persona a borrar">
            <button type="submit">Mostrar</button>
        </form>
        
        <p>Actualizar persona existente</p>
        <form action="SvEdit m45rPerson" method="POST">
            <input type="text" name="name" placeholder="Nombre y apellido"><br>
            <input type="text" name="photo" placeholder="Url de la foto"><br>
            <input type="text" name="title" placeholder="Título"><br>
            <input type="text" name="address" placeholder="Domicilio"><br>
            <input type="text" name="tel" placeholder="Teléfono"><br>
            <input type="text" name="mail" placeholder="E-mail"><br>
            <input type="text" name="about" placeholder="Sobre mí"><br>
            <input type="text" name="skills" placeholder="Url de la imagen con habilidades"><br>
            <button type="submit">Actualizar</button>
        </form>
    </body>
</html>
