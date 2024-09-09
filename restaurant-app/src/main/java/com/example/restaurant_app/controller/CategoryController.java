package com.example.restaurant_app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restaurant_app.entity.categories;
import com.example.restaurant_app.service.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 

public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/api/categories")
    public List<categories> getCategories() {
        return categoryService.getAllCategories();
    }
    
}


