/* =========================================================
   SHIFT FLOW AUTH JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PASSWORD TOGGLE
       ===================================================== */

    const passwordInput =
        document.getElementById("password");

    const passwordToggle =
        document.getElementById("passwordToggle");


    if (passwordToggle && passwordInput) {

        passwordToggle.addEventListener("click", function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                passwordToggle.textContent = "Hide";

            } else {

                passwordInput.type = "password";

                passwordToggle.textContent = "Show";

            }

        });

    }


    /* =====================================================
       RTL TOGGLE
       ===================================================== */

    const rtlToggle =
        document.getElementById("rtlToggle");


    if (rtlToggle) {

        rtlToggle.addEventListener("click", function () {

            document.body.classList.toggle("rtl");

            if (
                document.body.classList.contains("rtl")
            ) {

                localStorage.setItem(
                    "shiftflowRTL",
                    "true"
                );

            } else {

                localStorage.setItem(
                    "shiftflowRTL",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       LOAD RTL SETTING
       ===================================================== */

    if (
        localStorage.getItem("shiftflowRTL") === "true"
    ) {

        document.body.classList.add("rtl");

    }


    /* =====================================================
       LOGIN FORM
       ===================================================== */

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                if (!loginForm.checkValidity()) {

                    loginForm.classList.add(
                        "was-validated"
                    );

                    return;

                }

                alert(
                    "Demo login submitted successfully."
                );

            }
        );

    }


    /* =====================================================
       SIGNUP FORM
       ===================================================== */

    const signupForm =
        document.getElementById("signupForm");


    if (signupForm) {

        signupForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                if (!signupForm.checkValidity()) {

                    signupForm.classList.add(
                        "was-validated"
                    );

                    return;

                }

                alert(
                    "Demo account created successfully."
                );

            }
        );

    }

});