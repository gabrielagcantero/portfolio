/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.cava to edit this template
 */
package com.gabriela.portfolio.controller;

import com.gabriela.portfolio.model.Course;
import com.gabriela.portfolio.model.Institute;
import com.gabriela.portfolio.service.ICourseService;
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
public class CourseController {
    
    @Autowired
    private ICourseService couServ;
    
    @GetMapping("/show/courses")
    @ResponseBody
    public List<Course> showCourses(){
        return couServ.showCourses();
    }
    
    @PostMapping("/add/course")
    public void addCourse(@RequestBody Course cour){
        couServ.addCourse(cour);
    }
    
    @PutMapping("/edit/course")
    public void editCourse(@RequestBody Course c, @RequestParam String idCourse){
        Long id = parseLong(idCourse);
        c.setIdCourse(id);
        couServ.editCourse(c);
    }
    
    @DeleteMapping("delete/course")
    public void deleteCourse(@RequestBody String idCourse){
        Long id = parseLong(idCourse);
        couServ.deleteCourse(id);
    }
    
}

