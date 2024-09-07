package com.example.restaurant_app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restaurant_app.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
