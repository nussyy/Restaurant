package com.example.restaurant_app.service;



import com.example.restaurant_app.entity.Reservations;
import com.example.restaurant_app.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationsService {

    private final ReservationRepository reservationRepository;

    public ReservationsService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public List<Reservations> getAllReservations() {
        return reservationRepository.findAll();
    }

    public Optional<Reservations> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

    public Reservations saveReservation(Reservations reservation) {
        return reservationRepository.save(reservation);
    }

    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }
}
