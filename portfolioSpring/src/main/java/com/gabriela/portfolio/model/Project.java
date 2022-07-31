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
public class Project {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idProject;
    
    private String iframe;
    private String title;
    private String description;
    private String link;

    public Project() {
    }

    public Project(Long idProject, String iframe, String title, String description, String link) {
        this.idProject = idProject;
        this.iframe = iframe;
        this.title = title;
        this.description = description;
        this.link = link;
    }

}
