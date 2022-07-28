/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.gabriela.portfolio.service;

import com.gabriela.portfolio.model.Course;
import com.gabriela.portfolio.repository.CourseRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gabriela
 */
@Service
public class CourseService implements ICourseService {
    
    @Autowired
    public CourseRepository couRepo;
    
    @Override
    public List<Course> showCourses() {
        return couRepo.findAll();
    }
    
}
