
package logic;

import java.util.List;
import persistence.PersistenceController;


public class Controller {
    PersistenceController persisCont = new PersistenceController();
    
    public void CreatePerson(Person Pers){
        persisCont.CreatePerson(Pers);
    }
    
    public void editPerson(Person Pers){
        persisCont.editPerson(Pers);
    }
    
    public void deletePerson(int id){
        persisCont.deletePerson(id);
    }
    
    public void deletePerson(Person pers){
        persisCont.deletePerson(pers);
    }
    
    public List <Person> bringPersons(){
        return persisCont.bringPersons();
    }
}
