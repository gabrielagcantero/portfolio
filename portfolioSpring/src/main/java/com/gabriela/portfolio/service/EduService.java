/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Education;
import com.gabriela.portfolio.repository.EduRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gabriela
 */
@Service
public class EduService implements IEduService {

    @Autowired
    public EduRepository eduRepo;
    
    @Override
    public List<Education> showEdus() {
        return eduRepo.findAll();
    }

    @Override
    public void addEdu(Education edu) {
        eduRepo.save(edu);
    }

    @Override
    public void editEducation(Education e) {
        eduRepo.save(e);
    }

    @Override
    public void deleteEducation(Long id) {
        eduRepo.deleteById(id);
    }
    
}
