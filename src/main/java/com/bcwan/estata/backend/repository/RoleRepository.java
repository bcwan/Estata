package com.bcwan.estata.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bcwan.estata.backend.models.ERole;
import com.bcwan.estata.backend.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
  Optional<Role> findByName(ERole name);
}
