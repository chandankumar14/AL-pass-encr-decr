## AL-Password-Encryption -Decryption- library

al-pass-encr-decr is tool that help  us to ecrypt and decrypt the password for security purpose 

# Installation
```bash
npm install -g al-pass-encr-decr # or using npm: npm i al-pass-encr-decr
```

al-pass-encr-decr will be installed globally to your system path.

## Features

  * Encrypt Password
  * Decrypt Password
  * Verify Password

```js
const ALPassEncrDecr =  require("al-pass-encr-decr")
// *********PassWord encryption Function *************
function ALPassWordEncrytpion(){
    const EncryptedPassWord = ALPassEncrDecr.ALPassWordEncrytpion(
         password:string |any,
         secret_key:string,    
         secret_init_vector_key: string,
         init_vector: string,
         init_vector_key: string
    ) 
    console.log(EncryptedPassWord)
    // out_put : N2Y1YWM1N2ZkYWMzNjcxNjA0OTVkZWZiODJmZjZlMDM=
}


function ALPassWordDecrytpion(){
    const DecryptedPassWord = ALPassEncrDecr.ALPassWordDecrytpion(
        encrypted_password: string,
        secret_key: string,
        secret_init_vector_key: string,
        init_vector: string,
        init_vector_key: string
    ) 
    console.log(DecryptedPassWord)
    // out_put : Decrypted_password.....
}

function ALVerifyPassWord(){
    const VerifyPassWord = ALPassEncrDecr.ALVerifyPassWord(
        encrypted_pass: string,
        secret_key: string,
        secret_init_vector_key: string,
        init_vector: string,
        password: string |any,
        init_vector_key: string
    )
     console.log(VerifyPassWord)
    // out_put : True or False .....
}

```
