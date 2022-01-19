import JSEncrypt from 'jsencrypt'
import {PUBLIC_KEY_GO} from "./config/config";


export function encrypt_go(text_plain: string, public_key = PUBLIC_KEY_GO): string {
    // @ts-ignore
    let encrypt = new JSEncrypt()
    encrypt.setPublicKey(public_key)
    let text_cipher = encrypt.encrypt(text_plain)
    if (text_cipher === false) {
        return ""
    }
    return text_cipher
}
