
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import logic.Controller;
import logic.Person;


@WebServlet(name = "SvPerson", urlPatterns = {"/SvPerson"})
public class SvPerson extends HttpServlet {

    Controller cont = new Controller();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        
        List<Person> personList = cont.bringPersons();
        
        HttpSession mySession = request.getSession();
        mySession.setAttribute("personList", personList);
        
        response.sendRedirect("showPersons.jsp");
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
        
        Person pers = new Person(0, name, photo, title, address, tel, mail, about, skills);
        cont.CreatePerson(pers);
        
        response.sendRedirect("index.jsp");
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
