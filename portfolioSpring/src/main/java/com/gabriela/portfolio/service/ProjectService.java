/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Project;
import com.gabriela.portfolio.repository.ProjectRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gabriela
 */
@Service
public class ProjectService implements IProjectService {

    @Autowired
    public ProjectRepository projRepo;
    
    @Override
    public List<Project> showProjects() {
        return projRepo.findAll();
    }

    @Override
    public void addProject(Project proj) {
        projRepo.save(proj);
    }

    @Override
    public void editProject(Project p) {
        projRepo.save(p);
    }

    @Override
    public void deleteProject(Long id) {
        projRepo.deleteById(id);
    }
    
}
