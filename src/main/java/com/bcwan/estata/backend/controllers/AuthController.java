package com.bcwan.estata.backend.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// models
import com.bcwan.estata.backend.models.ERole;
import com.bcwan.estata.backend.models.Role;
import com.bcwan.estata.backend.models.User;

// request and response
import com.bcwan.estata.backend.payload.request.LoginRequest;
import com.bcwan.estata.backend.payload.request.SignUpRequest;
import com.bcwan.estata.backend.payload.response.JWTResponse;
import com.bcwan.estata.backend.payload.response.MessageResponse;

// repository
import com.bcwan.estata.backend.repository.RoleRepository;
import com.bcwan.estata.backend.repository.UserRepository;

import com.bcwan.estata.backend.security.jwt.JwtUtils;
import com.bcwan.estata.backend.security.services.UserDetailsImpl;

public class AuthController {
  
}
