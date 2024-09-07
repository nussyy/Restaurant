package com.example.restaurant_app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.restaurant_app.entity.Query;
import com.example.restaurant_app.repository.QueryRepository;

@RestController
@RequestMapping("/api/queries")
public class QueryController {

    @Autowired
    private QueryRepository queryRepository;

    @PostMapping
    public Query submitQuery(@RequestBody Query query) {
        return queryRepository.save(query);
    }
}
