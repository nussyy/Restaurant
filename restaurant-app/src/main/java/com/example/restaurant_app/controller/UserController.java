package com.example.restaurant_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users")

public class UserController {
    

    @GetMapping
    public String getUsers() {
        return "List of users";
    }
}
