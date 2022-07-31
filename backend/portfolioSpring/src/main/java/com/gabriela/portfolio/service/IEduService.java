/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Education;
import java.util.List;

/**
 *
 * @author Gabriela
 */
public interface IEduService {

    public List<Education> showEdus();

    public void addEdu(Education edu);

    public void editEducation(Education e);

    public void deleteEducation(Long id);
    
}
