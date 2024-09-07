package com.example.restaurant_app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))  // Optional CSRF configuration
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/services/**").permitAll()  // Permit access to services endpoint
                .anyRequest().authenticated()  // Secure other endpoints
            )
            .httpBasic(httpBasic -> httpBasic.disable());  // Use new HttpBasicCustomizer API

        return http.build();
    }
}
