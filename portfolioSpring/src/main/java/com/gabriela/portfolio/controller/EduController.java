/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.controller;

import com.gabriela.portfolio.model.Education;
import com.gabriela.portfolio.service.IEduService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Gabriela
 */
@RestController
public class EduController {
    
    @Autowired
    private IEduService eduServ;
    
    @GetMapping("/show/edus")
    @ResponseBody
    public List<Education> showJobs(){
        return eduServ.showEdus();
    }
    
    @PostMapping("/add/education")
    public void addEducation(@RequestBody Education edu){
        eduServ.addEdu(edu);
    }
}
