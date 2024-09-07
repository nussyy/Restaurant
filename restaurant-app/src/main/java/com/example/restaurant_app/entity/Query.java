// package com.example.restaurant_app.entity;



// import jakarta.persistence.*;
// import java.time.LocalDateTime;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;


// @Entity
// @Table(name = "queries")
// public class Query {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long queryId;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user;

//     @Column(nullable = false)
//     private String queryText;

//     private String response;
//     private String queryStatus;

//     @Column(name = "created_at", updatable = false, nullable = false)
//     private LocalDateTime createdAt;

//     // Getters and Setters
// }




// Query.java
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
public class Query {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private Long serviceId;
    private String message;

    // Getters and Setters
}
