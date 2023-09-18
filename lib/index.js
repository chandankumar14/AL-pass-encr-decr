"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pass_Encr_Decr = void 0;
var crypto = require("crypto");
var Pass_Encr_Decr = /** @class */ (function () {
    function Pass_Encr_Decr() {
    }
    Pass_Encr_Decr.ALPassWordEncrytpion = function (payload) {
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
    };
    Pass_Encr_Decr.ALPassWordDecrytpion = function (payload) {
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
    };
    Pass_Encr_Decr.ALVerifyPassWord = function (payload) {
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
    };
    return Pass_Encr_Decr;
}());
exports.Pass_Encr_Decr = Pass_Encr_Decr;
