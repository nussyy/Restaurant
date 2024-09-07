package com.example.restaurant_app.repository;

import com.example.restaurant_app.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ServiceRepository extends JpaRepository<Service, Long> {
}
