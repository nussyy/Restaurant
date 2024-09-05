package com.example.restaurant_app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;


@Entity
@Table(name = "reservations")
public class Reservations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;

    @Column(nullable = false)
    private LocalDateTime reservationDate;

    @Column(nullable = false)
    private Integer partySize;

    @Column
    private String reservationType;

    @Column
    private String specialRequests;

    @Column(nullable = false)
    private String status;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    // Getters and Setters
}
