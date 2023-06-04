package com.genspark.service;

import com.genspark.Dto.LoginDTO;
import com.genspark.Dto.UserDTO;
import com.genspark.response.LoginResponse;

public interface UserService {

    String addUser(UserDTO userDTO);

    String enrollCourse();

    LoginResponse loginUser(LoginDTO loginDTO);
}
