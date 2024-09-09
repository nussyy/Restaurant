package com.example.restaurant_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.restaurant_app.entity.categories;
import com.example.restaurant_app.entity.MenuItem;
import com.example.restaurant_app.service.MenuService;

import java.util.List;


@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:3000") // Adjust for productio
public class MenuController {

    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/categories")
    public ResponseEntity<List<categories>> getCategories() {
        try {
            List<categories> categories = menuService.getAllCategories();
            return new ResponseEntity<>(categories, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/categories/{category_id}/items")
    public ResponseEntity<List<MenuItem>> getItemsByCategory(@PathVariable("category_id") Long categoryId) {
        try {
            List<MenuItem> menuItems = menuService.getItemsByCategory(categoryId);
            return new ResponseEntity<>(menuItems, HttpStatus.OK);
        } catch (Exception e) {
            // Log the exception
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
