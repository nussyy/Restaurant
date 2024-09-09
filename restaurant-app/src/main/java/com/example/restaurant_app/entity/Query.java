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



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;
 
 @Entity
 public class Query {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long queryId;
 
     @Column(nullable = false)
     private String queryText;
 
     private String response;
 
     private String queryStatus;
 
     private LocalDateTime createdAt;
 
     // Getters and Setters
     public Long getQueryId() {
         return queryId;
     }
 
     public void setQueryId(Long queryId) {
         this.queryId = queryId;
     }
 
     public String getQueryText() {
         return queryText;
     }
 
     public void setQueryText(String queryText) {
         this.queryText = queryText;
     }
 
     public String getResponse() {
         return response;
     }
 
     public void setResponse(String response) {
         this.response = response;
     }
 
     public String getQueryStatus() {
         return queryStatus;
     }
 
     public void setQueryStatus(String queryStatus) {
         this.queryStatus = queryStatus;
     }
 
     public LocalDateTime getCreatedAt() {
         return createdAt;
     }
 
     public void setCreatedAt(LocalDateTime createdAt) {
         this.createdAt = createdAt;
     }
 }
 
