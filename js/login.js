import { auth }
from "./firebase-config.js";

import {
    signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const loginBtn =
document.getElementById("login-btn");

loginBtn.addEventListener(
"click",
async () => {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href =
        "index.html";

    }

    catch(error) {

        document.getElementById("error")
        .textContent =
        "Login fehlgeschlagen";

        console.error(error);

    }

});