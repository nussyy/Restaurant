// package com.example.restaurant_app.entity;
// import lombok.Data;
// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;

// import java.util.List;

// import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;

// @Entity
// @Data
// public class Category {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String name;

//     @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//     private List<Item> items;
// }
