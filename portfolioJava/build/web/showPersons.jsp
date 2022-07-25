

<%@page import="java.util.List"%>
<%@page import="logic.Person"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ver Personas</title>
    </head>
    <body>
        <h1>Lista de Personas</h1>
        <% 
            List <Person> personList = (List)request.getSession().getAttribute("personList"); 

            for (Person per : personList){
        %>
        
        <p>Nombre: <%=per.getName()%></P>
        <p>Título: <%=per.getTitle()%></P>
        <p>----------------------</P>
        
        <%
            }  
        %>
        
    </body>
</html>
