

package com.example.restaurant_app.repository;

import com.example.restaurant_app.entity.Reservations;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservations, Long> {
}
