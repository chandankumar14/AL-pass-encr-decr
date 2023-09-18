const crypto = require("crypto");
export function ALPassWordEncrytpion<Types>(
  password: Types,
  secret_key: Types,
  secret_init_vector_key: Types,
  init_vector: Types,
  init_vector_key: Types
) {
  try {
    const algorithm = "aes-256-cbc";
    const security_key = crypto
      .createHmac("sha256", secret_init_vector_key)
      .update(secret_key)
      .digest("base64url")
      .substring(0, 32);
    const secret_init_vector = crypto
      .createHmac("sha256", init_vector)
      .update(init_vector_key)
      .digest("base64url")
      .substring(0, 16);

    const cipher = crypto.createCipheriv(
      algorithm,
      security_key,
      secret_init_vector
    );
    return Buffer.from(
      cipher.update(password, "utf8", "hex") + cipher.final("hex")
    ).toString("base64"); // Encrypts data and converts to hex and base64
  } catch (error) {
    return error;
  }
}

export function ALPassWordDecrytpion<Types>(
  encrypted_password: Types | any,
  secret_key: Types,
  secret_init_vector_key: Types,
  init_vector: Types,
  init_vector_key: Types
) {
  try {
    const algorithm = "aes-256-cbc";
    const security_key = crypto
      .createHmac("sha256", secret_init_vector_key)
      .update(secret_key)
      .digest("base64url")
      .substring(0, 32);
    const secret_init_vector = crypto
      .createHmac("sha256", init_vector)
      .update(init_vector_key)
      .digest("base64url")
      .substring(0, 16);
    const buff = Buffer.from(encrypted_password, "base64");
    const decipher = crypto.createDecipheriv(
      algorithm,
      security_key,
      secret_init_vector
    );
    return (
      decipher.update(buff.toString("utf8"), "hex", "utf8") +
      decipher.final("utf8")
    );
  } catch (error) {
    return error;
  }
}

export function ALVerifyPassWord<Types>(
  encrypted_pass: Types,
  secret_key: Types,
  secret_init_vector_key: Types,
  init_vector: Types,
  password: Types,
  init_vector_key: Types
) {
  try {
    const algorithm = "aes-256-cbc";
    const security_key = crypto
      .createHmac("sha256", secret_init_vector_key)
      .update(secret_key)
      .digest("base64url")
      .substring(0, 32);
    const secret_init_vector = crypto
      .createHmac("sha256", init_vector)
      .update(init_vector_key)
      .digest("base64url")
      .substring(0, 16);

    const cipher = crypto.createCipheriv(
      algorithm,
      security_key,
      secret_init_vector
    );
    const encrypted_password = Buffer.from(
      cipher.update(password, "utf8", "hex") + cipher.final("hex")
    ).toString("base64"); // Encrypts data and converts to hex and base64
    if (encrypted_pass === encrypted_password) {
      return true;
    }
  } catch (error) {
    return error;
  }
}
