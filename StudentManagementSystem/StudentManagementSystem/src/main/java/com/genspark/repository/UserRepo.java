package com.genspark.repository;

import com.genspark.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Optional;

@EnableJpaRepositories
public interface UserRepo extends JpaRepository<User, Integer> {

    Optional<User> findOneByEmailAndPassword(String email, String password);

    User findByEmail(String email);
}
