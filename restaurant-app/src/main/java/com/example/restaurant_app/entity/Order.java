package com.example.restaurant_app.entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservations reservation;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String orderStatus;
    private BigDecimal totalAmount;
    private String paymentStatus;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
}
