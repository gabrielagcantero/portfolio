/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Job;
import com.gabriela.portfolio.repository.JobRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gabriela
 */
@Service
public class JobService implements IJobService {
    
    @Autowired
    public JobRepository jobRepo;
    
    @Override
    public List<Job> showJobs(){
        return jobRepo.findAll();
    }
}
