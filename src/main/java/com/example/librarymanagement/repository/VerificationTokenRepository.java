package com.example.librarymanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.librarymanagement.modal.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Integer> {
    VerificationToken findByToken(String token);
}