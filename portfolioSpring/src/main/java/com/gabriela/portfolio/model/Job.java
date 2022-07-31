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
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Gabriela
 */
@Getter @Setter
@Entity
public class Job {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idJob;
    
    private String logo;
    private String name;
    private Date dateFrom;
    private Date dateTo;
    private String job;
    private String tasks;
    
    public Job(){
        
    }

    public Job(Long idJob, String logo, String name, Date dateFrom, Date dateTo, String job, String tasks) {
        this.idJob = idJob;
        this.logo = logo;
        this.name = name;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.job = job;
        this.tasks = tasks;
    }
    
    
}
