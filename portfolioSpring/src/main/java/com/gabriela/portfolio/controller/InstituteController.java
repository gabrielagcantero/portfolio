/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.controller;

import com.gabriela.portfolio.model.Institute;
import com.gabriela.portfolio.service.IInstService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Gabriela
 */
@RestController
public class InstituteController {
    
    @Autowired
    private IInstService instServ;
    
    @GetMapping("/show/institutes")
    @ResponseBody
    public List<Institute> showInstitutes(){
        return instServ.showInstitutes();
    }
}
