/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Person;

/**
 *
 * @author Gabriela
 */
public interface IPersonService {

    public Person showPerson(Long i);

    public void editPerson(Person pers);
    
}
