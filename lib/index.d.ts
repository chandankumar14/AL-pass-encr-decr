import { ENCRYPTION_PASSWORD, PASSWORD, VERIFY_PASSWORD } from "./model";
export declare function ALPassWordEncrytpion(payload: PASSWORD): string;
export declare function ALPassWordDecrytpion(payload: ENCRYPTION_PASSWORD): any;
export declare function ALVerifyPassWord(payload: VERIFY_PASSWORD): true | undefined;
