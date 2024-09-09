package com.example.restaurant_app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.restaurant_app.entity.categories;
import com.example.restaurant_app.repository.CategoryRepository;

@Service

public class CategoryService {



    @Autowired
    private CategoryRepository categoryRepository;

    public List<categories> getAllCategories() {
        return categoryRepository.findAll();
    }
    
}


