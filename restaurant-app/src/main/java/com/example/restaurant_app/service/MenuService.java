package com.example.restaurant_app.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.restaurant_app.entity.Category;
import com.example.restaurant_app.repository.CategoryRepository;

import java.util.List;

@Service
public class MenuService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public MenuService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Make sure this method is defined
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}

