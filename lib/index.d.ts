import { ENCRYPTION_PASSWORD, PASSWORD, VERIFY_PASSWORD } from "./model";
export declare class Pass_Encr_Decr {
    static ALPassWordEncrytpion(payload: PASSWORD): string;
    static ALPassWordDecrytpion(payload: ENCRYPTION_PASSWORD): any;
    static ALVerifyPassWord(payload: VERIFY_PASSWORD): true | undefined;
}
