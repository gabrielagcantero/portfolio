
package persistence;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import logic.Person;
import persistence.exceptions.NonexistentEntityException;


public class PersistenceController {
    
    PersonJpaController persJPA = new PersonJpaController();
    
    public void CreatePerson(Person pers){
        persJPA.create(pers);
    }
    
    public void editPerson(Person pers){
        try {
            persJPA.edit(pers);
        } catch (Exception ex) {
            Logger.getLogger(PersistenceController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void deletePerson(int id){
        try {
            persJPA.destroy(id);
        } catch (NonexistentEntityException ex) {
            Logger.getLogger(PersistenceController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void deletePerson(Person pers){
        try {
            persJPA.destroy(pers.getIdPerson());
        } catch (NonexistentEntityException ex) {
            Logger.getLogger(PersistenceController.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public List <Person> bringPersons(){
        return persJPA.findPersonEntities();
    }
}
