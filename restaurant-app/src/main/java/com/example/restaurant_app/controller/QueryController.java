package com.example.restaurant_app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.QueryDto;

@RestController
@RequestMapping("/api/queries")
@CrossOrigin(origins = "http://localhost:3000")  
public class QueryController {

    @PostMapping
    public ResponseEntity<String> submitQuery(@RequestBody QueryDto queryDto) {
        // Handle the query submission
        return ResponseEntity.ok("Query submitted successfully.");
    }
}

