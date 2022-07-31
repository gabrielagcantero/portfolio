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
public class Institute {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idInstitute;
    
    private String logo;
    private String name;

    public Institute() {
    }

    public Institute(Long idInstitute, String logo, String name) {
        this.idInstitute = idInstitute;
        this.logo = logo;
        this.name = name;
    }
    
}
