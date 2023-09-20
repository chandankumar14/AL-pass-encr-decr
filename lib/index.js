"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALVerifyPassWord = exports.ALPassWordDecrytpion = exports.ALPassWordEncrytpion = void 0;
var crypto = require("crypto");
function ALPassWordEncrytpion(password, secret_key, secret_init_vector_key, init_vector, init_vector_key) {
    try {
        var algorithm = "aes-256-cbc";
        var security_key = crypto
            .createHmac("sha256", secret_init_vector_key)
            .update(secret_key)
            .digest("base64url")
            .substring(0, 32);
        var secret_init_vector = crypto
            .createHmac("sha256", init_vector)
            .update(init_vector_key)
            .digest("base64url")
            .substring(0, 16);
        var cipher = crypto.createCipheriv(algorithm, security_key, secret_init_vector);
        return Buffer.from(cipher.update(password, "utf8", "hex") + cipher.final("hex")).toString("base64"); // Encrypts data and converts to hex and base64
    }
    catch (error) {
        return error;
    }
}
exports.ALPassWordEncrytpion = ALPassWordEncrytpion;
function ALPassWordDecrytpion(encrypted_password, secret_key, secret_init_vector_key, init_vector, init_vector_key) {
    try {
        var algorithm = "aes-256-cbc";
        var security_key = crypto
            .createHmac("sha256", secret_init_vector_key)
            .update(secret_key)
            .digest("base64url")
            .substring(0, 32);
        var secret_init_vector = crypto
            .createHmac("sha256", init_vector)
            .update(init_vector_key)
            .digest("base64url")
            .substring(0, 16);
        var buff = Buffer.from(encrypted_password, "base64");
        var decipher = crypto.createDecipheriv(algorithm, security_key, secret_init_vector);
        return (decipher.update(buff.toString("utf8"), "hex", "utf8") +
            decipher.final("utf8"));
    }
    catch (error) {
        return error;
    }
}
exports.ALPassWordDecrytpion = ALPassWordDecrytpion;
function ALVerifyPassWord(encrypted_pass, secret_key, secret_init_vector_key, init_vector, password, init_vector_key) {
    try {
        var algorithm = "aes-256-cbc";
        var security_key = crypto
            .createHmac("sha256", secret_init_vector_key)
            .update(secret_key)
            .digest("base64url")
            .substring(0, 32);
        var secret_init_vector = crypto
            .createHmac("sha256", init_vector)
            .update(init_vector_key)
            .digest("base64url")
            .substring(0, 16);
        var cipher = crypto.createCipheriv(algorithm, security_key, secret_init_vector);
        var encrypted_password = Buffer.from(cipher.update(password, "utf8", "hex") + cipher.final("hex")).toString("base64"); // Encrypts data and converts to hex and base64
        if (encrypted_pass === encrypted_password) {
            return true;
        }
    }
    catch (error) {
        return error;
    }
}
exports.ALVerifyPassWord = ALVerifyPassWord;
