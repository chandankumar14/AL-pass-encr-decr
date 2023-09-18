export interface PASSWORD {
  password: string;
  secret_key: string;
  secret_init_vector: string | number;
}

export interface ENCRYPTION_PASSWORD {
  encrypted_password: string ;
  secret_key: string | number;
  secret_init_vector: string | number;
}

export interface DESCRYPT_PASSWORD {
  encrypted_password: string | any;
  secret_key: string;
  secret_init_vector: string | number;
}

export interface VERIFY_PASSWORD {
  encrypted_password: string;
  secret_key: string;
  password: string | any;
  secret_init_vector: string | number;
}
