package com.example.restaurant_app.entity;


import jakarta.persistence.*;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;
    

    @Column(nullable = false)
    private String reviewText;

    @Column(nullable = false)
    private Integer rating;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
}
