/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.model;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Gabriela
 */
@Getter @Setter
@Entity
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idCourse;
    
    @ManyToOne
    @JoinColumn(name="idInstitute")
    public Institute inst;
    
    private Date dateFrom;
    private Date dateTo;
    private String title;

    public Course() {
    }

    public Course(Long idCourse, Institute inst, Date dateFrom, Date dateTo, String title) {
        this.idCourse = idCourse;
        this.inst = inst;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.title = title;
    }
    
    
}
