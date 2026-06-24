import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3LsW2AtEOrUu69wDHKT4IcLI2vzjI_e8",
    authDomain:
    "harzer-wandernadel-stempelheft.firebaseapp.com",
    projectId:
    "harzer-wandernadel-stempelheft",
    storageBucket:
    "harzer-wandernadel-stempelheft.firebasestorage.app",
    messagingSenderId:
    "706674917419",
    appId:
    "1:706674917419:web:03c8157be7d1ccff99ea6e"
};

const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);

export { auth };