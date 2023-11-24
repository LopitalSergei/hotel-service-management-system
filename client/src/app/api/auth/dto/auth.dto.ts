export interface LoginFormDto {
  email: string | undefined;
  password: string | undefined;
}

export interface LoginResponseDto {
  token: string;
}

export interface RegistrationFormDto {
  email: string | undefined;
  password: string | undefined;
}

export interface RegistrationResponseDto {
  id: number;
  email: string;
  password: string;
}
