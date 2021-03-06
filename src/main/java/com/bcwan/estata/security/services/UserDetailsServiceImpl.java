package com.bcwan.estata.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bcwan.estata.models.User;
import com.bcwan.estata.repository.UserRepository;

// deals with UserDetails business logic
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  @Autowired
  UserRepository userRepository;

  // goes to database, and finds the user, then returns User object if successful
  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
                  .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    return UserDetailsImpl.build(user);
  }

}
