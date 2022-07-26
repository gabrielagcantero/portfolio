/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.controller;

import com.gabriela.portfolio.model.Person;
import com.gabriela.portfolio.service.IPersonService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    @Autowired
    private IPersonService persServ;
    
    @PostMapping("/new/person")
    public void addPerson(@RequestBody Person pers){
        persServ.createPerson(pers);
    }
    
    @GetMapping("/show/persons")
    @ResponseBody
    public List <Person> showPersons(){
        return persServ.showPersons();
    }
    
    @DeleteMapping("delete/{idPerson}")
    public void deletePerson(@PathVariable int idPerson){
        persServ.deletePerson(idPerson);
    }
    
    @PutMapping("/edit/person")
    public void editPerson(@RequestBody Person pers){
        pers.setIdPerson(1);
        persServ.editPerson(pers);
    }
}
