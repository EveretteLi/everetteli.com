
const PASSWORD_HASH = "THlwMTk5NzEyMTk=";

function varify(ps) {
    let psw = window.btoa(ps);
    return psw === PASSWORD_HASH;
}