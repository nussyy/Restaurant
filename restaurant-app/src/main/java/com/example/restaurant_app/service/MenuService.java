package com.example.restaurant_app.service;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.restaurant_app.entity.categories;
import com.example.restaurant_app.entity.MenuItem;
import com.example.restaurant_app.repository.CategoryRepository;
import com.example.restaurant_app.repository.MenuItemRepository;

import java.util.List;

// @Service
// public class MenuService {

//     private final CategoryRepository categoryRepository;

//     @Autowired
//     public MenuService(CategoryRepository categoryRepository) {
//         this.categoryRepository = categoryRepository;
//     }

//     // Make sure this method is defined
//     public List<Category> getAllCategories() {
//         return categoryRepository.findAll();
//     }
// }
@Service
public class MenuService {

    private final CategoryRepository categoryRepository;
    private final MenuItemRepository menuItemRepository;

    @Autowired
    public MenuService(CategoryRepository categoryRepository, MenuItemRepository menuItemRepository) {
        this.categoryRepository = categoryRepository;
        this.menuItemRepository = menuItemRepository;
    }

    public List<categories> getAllCategories() {
        return categoryRepository.findAll();
    }

    public List<MenuItem> getItemsByCategory(Long categoryId) {
        return menuItemRepository.findByCategoryCategoryId(categoryId);
    }
}
