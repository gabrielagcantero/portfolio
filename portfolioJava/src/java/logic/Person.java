/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package logic;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Person implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idPerson;
    @Basic
    private String name;
    private String photo;
    private String title;
    private String address;
    private String tel;
    private String mail;
    private String about;
    private String skills;

    public Person() {
    }

    public Person(int idPerson, String name, String photo, String title, String address, String tel, String mail, String about, String skills) {
        this.idPerson = idPerson;
        this.name = name;
        this.photo = photo;
        this.title = title;
        this.address = address;
        this.tel = tel;
        this.mail = mail;
        this.about = about;
        this.skills = skills;
    }

    public int getIdPerson() {
        return idPerson;
    }

    public String getName() {
        return name;
    }

    public String getPhoto() {
        return photo;
    }

    public String getTitle() {
        return title;
    }

    public String getAddress() {
        return address;
    }

    public String getTel() {
        return tel;
    }

    public String getMail() {
        return mail;
    }

    public String getAbout() {
        return about;
    }

    public String getSkills() {
        return skills;
    }

    public void setIdPerson(int idPerson) {
        this.idPerson = idPerson;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
    
    
    
}
