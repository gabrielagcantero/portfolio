/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.controller;

import com.gabriela.portfolio.model.Person;
import com.gabriela.portfolio.service.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Gabriela
 */
@RestController
public class Controller {
    
    @Autowired
    private IPersonService persServ;
    
    @GetMapping("/show/person")
    @ResponseBody
    public Person showPerson(){
        Long id = Long.parseLong("1");
        return persServ.showPerson(id);
    }
    
    @PutMapping("/edit/person")
    public void editPerson(@RequestBody Person pers){
        persServ.editPerson(pers);
    }
    
}
