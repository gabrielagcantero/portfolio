
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Person;
import java.util.List;


public interface IPersonService {
    
    public List<Person> showPersons();
    
    public void createPerson(Person per);
    
    public void deletePerson(int id);
    
    public Person searchPerson(int id);
    
    public void editPerson(Person pers);
    
    
}
