/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Person;
import com.gabriela.portfolio.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gabriela
 */
@Service
public class PersonService implements IPersonService{
    
    @Autowired
    public PersonRepository persRepo;
    
    @Override
    public Person showPerson(Long i){
        return persRepo.findById(i).orElse(null);
    }

    @Override
    public void editPerson(Person pers) {
        persRepo.save(pers);
    }
}
