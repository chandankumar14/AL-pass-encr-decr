import { ENCRYPTION_PASSWORD, PASSWORD, VERIFY_PASSWORD } from "./model";
const crypto = require("crypto");

 export function ALPassWordEncrytpion(payload: PASSWORD) {
  const algorithm = "aes-256-cbc";
  const security_key = crypto
    .createHmac("sha256", payload.secret_init_vector)
    .update(payload.secret_key)
    .digest("base64url")
    .substring(0, 32);
  const secret_init_vector = crypto
    .createHmac("sha256", payload.secret_init_vector)
    .update(payload.secret_key)
    .digest("base64url")
    .substring(0, 16);

  const cipher = crypto.createCipheriv(
    algorithm,
    security_key,
    secret_init_vector
  );
  return Buffer.from(
    cipher.update(payload.password, "utf8", "hex") + cipher.final("hex")
  ).toString("base64"); // Encrypts data and converts to hex and base64
}


 export function ALPassWordDecrytpion(payload: ENCRYPTION_PASSWORD) {
  const algorithm = "aes-256-cbc";
  const security_key = crypto
    .createHmac("sha256", payload.secret_init_vector)
    .update(payload.secret_key)
    .digest("base64url")
    .substring(0, 32);
  const secret_init_vector = crypto
    .createHmac("sha256", payload.secret_init_vector)
    .update(payload.secret_key)
    .digest("base64url")
    .substring(0, 16);
  const buff = Buffer.from(payload.encrypted_password, "base64");
  const decipher = crypto.createDecipheriv(
    algorithm,
    security_key,
    secret_init_vector
  );
  return (
    decipher.update(buff.toString("utf8"), "hex", "utf8") +
    decipher.final("utf8")
  );
}

  export function ALVerifyPassWord(payload: VERIFY_PASSWORD) {
  const algorithm = "aes-256-cbc";
  const security_key = crypto
    .createHmac("sha256", payload.secret_init_vector)
    .update(payload.secret_key)
    .digest("base64url")
    .substring(0, 32);
  const secret_init_vector = crypto
    .createHmac("sha256", payload.secret_init_vector)
    .update(payload.secret_key)
    .digest("base64url")
    .substring(0, 16);

  const cipher = crypto.createCipheriv(
    algorithm,
    security_key,
    secret_init_vector
  );
  const encrypted_password = Buffer.from(
    cipher.update(payload.password, "utf8", "hex") + cipher.final("hex")
  ).toString("base64"); // Encrypts data and converts to hex and base64
  if (payload.encrypted_password === encrypted_password) {
    return true;
  }
}

