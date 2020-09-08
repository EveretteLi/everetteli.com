
const PASSWORD_HASH = "amFja3podQ==";

function varify(ps) {
    console.log(ps);
    let psw = window.btoa(ps);
    return psw === PASSWORD_HASH;
}