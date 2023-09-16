interface PASSWORD {
    password: string;
    secretKey: string;
    algoritm: "aes-192-cbc";
}
interface ENCRYPTION_PASSWORD {
    encrypted_password: string | number;
    secret_key: string | number;
    algorithm: "aes-192-cbc";
}
