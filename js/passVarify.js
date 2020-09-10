
const PASSWORD_HASH = "ZnJhbmtidXR0";//frankbutt

function varify(ps) {
    let psw = window.btoa(ps);
    return psw === PASSWORD_HASH;
}