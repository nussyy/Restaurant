package com.example.restaurant_app.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restaurant_app.entity.categories;

@Repository
public interface CategoryRepository extends JpaRepository<categories, Long> {
}


