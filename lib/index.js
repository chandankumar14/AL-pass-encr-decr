"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALVerifyPassWord = exports.ALPassWordDecrytpion = exports.ALPassWordEncrytpion = void 0;
var crypto = require("crypto");
function ALPassWordEncrytpion(payload) {
    var algorithm = "aes-256-cbc";
    var security_key = crypto
        .createHmac("sha256", payload.secret_init_vector)
        .update(payload.secret_key)
        .digest("base64url")
        .substring(0, 32);
    var secret_init_vector = crypto
        .createHmac("sha256", payload.secret_init_vector)
        .update(payload.secret_key)
        .digest("base64url")
        .substring(0, 16);
    var cipher = crypto.createCipheriv(algorithm, security_key, secret_init_vector);
    return Buffer.from(cipher.update(payload.password, "utf8", "hex") + cipher.final("hex")).toString("base64"); // Encrypts data and converts to hex and base64
}
exports.ALPassWordEncrytpion = ALPassWordEncrytpion;
function ALPassWordDecrytpion(payload) {
    var algorithm = "aes-256-cbc";
    var security_key = crypto
        .createHmac("sha256", payload.secret_init_vector)
        .update(payload.secret_key)
        .digest("base64url")
        .substring(0, 32);
    var secret_init_vector = crypto
        .createHmac("sha256", payload.secret_init_vector)
        .update(payload.secret_key)
        .digest("base64url")
        .substring(0, 16);
    var buff = Buffer.from(payload.encrypted_password, "base64");
    var decipher = crypto.createDecipheriv(algorithm, security_key, secret_init_vector);
    return (decipher.update(buff.toString("utf8"), "hex", "utf8") +
        decipher.final("utf8"));
}
exports.ALPassWordDecrytpion = ALPassWordDecrytpion;
function ALVerifyPassWord(payload) {
    var algorithm = "aes-256-cbc";
    var security_key = crypto
        .createHmac("sha256", payload.secret_init_vector)
        .update(payload.secret_key)
        .digest("base64url")
        .substring(0, 32);
    var secret_init_vector = crypto
        .createHmac("sha256", payload.secret_init_vector)
        .update(payload.secret_key)
        .digest("base64url")
        .substring(0, 16);
    var cipher = crypto.createCipheriv(algorithm, security_key, secret_init_vector);
    var encrypted_password = Buffer.from(cipher.update(payload.password, "utf8", "hex") + cipher.final("hex")).toString("base64"); // Encrypts data and converts to hex and base64
    if (payload.encrypted_password === encrypted_password) {
        return true;
    }
}
exports.ALVerifyPassWord = ALVerifyPassWord;
