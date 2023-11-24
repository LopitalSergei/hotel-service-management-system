import axios from "../../core/axios";
import {
  LoginFormDto,
  LoginResponseDto,
  RegistrationFormDto,
  RegistrationResponseDto,
} from "./dto/auth.dto";

export const Auth = {
  async registration(
    userData: RegistrationFormDto
  ): Promise<RegistrationResponseDto> {
    const { data } = await axios.post<RegistrationResponseDto>(
      "/auth/registration",
      userData
    );
    console.log(data);

    return data;
  },

  async login(userData: LoginFormDto): Promise<LoginResponseDto> {
    const { data } = await axios.post<LoginResponseDto>("auth/login", userData);
    console.log(data);

    return data;
  },
};
