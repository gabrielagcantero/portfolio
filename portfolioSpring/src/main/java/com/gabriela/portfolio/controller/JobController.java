/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.controller;

import com.gabriela.portfolio.model.Job;
import com.gabriela.portfolio.service.IJobService;
import static java.lang.Long.parseLong;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Gabriela
 */
@RestController
public class JobController {
    
    @Autowired
    private IJobService jobServ;
    
    @GetMapping("/show/jobs")
    @ResponseBody
    public List<Job> showJobs(){
        return jobServ.showJobs();
    }
    
    @PostMapping("/add/job")
    public void addJob(@RequestBody Job j){
        jobServ.addJob(j);
    }
    
    @PutMapping("/edit/job")
    public void editJob(@RequestBody Job j, @RequestParam String idJob){
        Long id = parseLong(idJob);
        j.setIdJob(id);
        jobServ.editJob(j);
    }
    
    @DeleteMapping("delete/job")
    public void deleteJob(@RequestBody String idJob){
        Long id = parseLong(idJob);
        jobServ.deleteJob(id);
    }
    
}
