/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Job;
import java.util.List;

/**
 *
 * @author Gabriela
 */
public interface IJobService {

    public List<Job> showJobs();

    public void addJob(Job j);

    public void editJob(Job j);

    public void deleteJob(Long id);
    
}
