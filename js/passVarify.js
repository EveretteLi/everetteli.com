
const PASSWORD_HASH = "ZnJhbmtidXR0";

function varify(ps) {
    console.log(ps);
    let psw = window.btoa(ps);
    return psw === PASSWORD_HASH;
}