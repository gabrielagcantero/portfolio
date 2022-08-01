/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Institute;
import com.gabriela.portfolio.repository.InstRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gabriela
 */
@Service
public class InstService implements IInstService {
    @Autowired
    public InstRepository instRepo;

    @Override
    public List<Institute> showInstitutes() {
        return instRepo.findAll();
    }
    
}
