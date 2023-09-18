export declare function ALPassWordEncrytpion<Types>(password: Types, secret_key: Types, secret_init_vector_key: Types, init_vector: Types, init_vector_key: Types): string;
export declare function ALPassWordDecrytpion<Types>(encrypted_password: Types | any, secret_key: Types, secret_init_vector_key: Types, init_vector: Types, init_vector_key: Types): string;
export declare function ALVerifyPassWord<Types>(encrypted_pass: Types, secret_key: Types, secret_init_vector_key: Types, init_vector: Types, password: Types, init_vector_key: Types): true | undefined;
