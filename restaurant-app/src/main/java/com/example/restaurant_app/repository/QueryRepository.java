package com.example.restaurant_app.repository;


import com.example.restaurant_app.entity.Query;
import org.springframework.data.jpa.repository.JpaRepository;
public interface QueryRepository extends JpaRepository<Query, Long> {
}
