package com.bcwan.estata.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bcwan.estata.models.ERole;
import com.bcwan.estata.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
  Optional<Role> findByName(ERole name);
}
