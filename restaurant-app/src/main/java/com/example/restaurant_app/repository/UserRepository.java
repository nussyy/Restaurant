package com.example.restaurant_app.repository;


import com.example.restaurant_app.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
