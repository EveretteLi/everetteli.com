
const PASSWORD_HASH = "ZXZlcmV0dGVsaQ==";

function varify(ps) {
    console.log(ps);
    let psw = window.btoa(ps);
    return psw === PASSWORD_HASH;
}