/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import logic.Controller;
import logic.Person;

/**
 *
 * @author Gabriela
 */
@WebServlet(name = "SvEditPerson", urlPatterns = {"/SvEditPerson"})
public class SvEditPerson extends HttpServlet {
    
    Controller cont = new Controller();


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        
        String name = request.getParameter("name");
        String photo = request.getParameter("photo");
        String title = request.getParameter("title");
        String address = request.getParameter("address");
        String tel = request.getParameter("tel");
        String mail = request.getParameter("mail");
        String about = request.getParameter("about");
        String skills = request.getParameter("skills");
        
        Person pers = new Person(1, name, photo, title, address, tel, mail, about, skills);
        cont.editPerson(pers);
        
        response.sendRedirect("index.jsp");
    }


    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
