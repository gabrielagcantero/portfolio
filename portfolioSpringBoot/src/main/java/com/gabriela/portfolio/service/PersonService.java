/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Person;
import com.gabriela.portfolio.repository.PersonRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class PersonService implements IPersonService{
    
    @Autowired
    public PersonRepository persRepo;

    @Override
    public List<Person> showPersons() {
        return persRepo.findAll();
    }

    @Override
    public void createPerson(Person per) {
        persRepo.save(per);
    }

    @Override
    public void deletePerson(int id) {
        persRepo.deleteById(id);
    }

    @Override
    public Person searchPerson(int id) {
        return persRepo.findById(id).orElse(null);
    }
    
    @Override
    public void editPerson(Person pers){
        persRepo.save(pers);
    }
    
    }
