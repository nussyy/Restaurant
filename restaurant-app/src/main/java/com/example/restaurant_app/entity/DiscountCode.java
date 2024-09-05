package com.example.restaurant_app.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



import java.time.LocalDate;

@Entity
@Table(name = "discount_codes")
public class DiscountCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long discountCodeId;

    @Column(nullable = false, unique = true)
    private String code;

    private String description;
    private Double discountPercentage;
    private LocalDate validFrom;
    private LocalDate validUntil;
    private Integer usageLimit;

    // Getters and Setters
}
