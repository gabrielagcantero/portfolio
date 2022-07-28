/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Gabriela
 */
@Getter @Setter
@Entity
public class Person {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idPerson;

    private String name;
    private String photo;
    private String banner;
    private String title;
    private String address;
    private String tel;
    private String mail;
    private String about;
    private String skills;
    
    public Person() {
    }

    public Person(Long idPerson, String name, String photo, String title, String address, String tel, String mail, String about, String skills) {
        this.idPerson = idPerson;
        this.name = name;
        this.photo = photo;
        this.title = title;
        this.address = address;
        this.tel = tel;
        this.mail = mail;
        this.about = about;
        this.skills = skills;
    }
}
