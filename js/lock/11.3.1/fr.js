//login page
if (Auth0)
{
    Auth0.registerLanguageDictionary("fr",
    {
        "error": {
            "forgotPassword": {
                "too_many_requests": "Vous avez atteint la limite de tentatives de changement de mot de passe. Veuillez patienter avant de recommencer.",
                "lock.fallback": "Nous sommes dÃ©solÃ©s, un problÃ¨me est survenu lors de la demande de changement de mot de passe."
            },
            "login": {
                "blocked_user": "Lâ€™utilisateur est bloquÃ©.",
                "invalid_user_password": "Mauvais identifiants.",
                "lock.fallback": "Nous sommes dÃ©solÃ©s, un problÃ¨me est survenu lors de la tentative de connexion.",
                "lock.invalid_code": "Mauvais code.",
                "lock.invalid_email_password": "Mauvaise adresse de messagerie ou mot de passe.",
                "lock.invalid_username_password": "Mauvais nom dâ€™utilisateur ou mot de passe.",
                "lock.network": "Nous ne pouvons pas joindre le serveur. VÃ©rifiez votre connexion et rÃ©essayez.",
                "lock.popup_closed": "La fenÃªtre popup a Ã©tÃ© fermÃ©e. Veuillez rÃ©essayer.",
                "lock.unauthorized": "Les permissions nâ€™ont pas Ã©tÃ© accordÃ©es. Veuillez rÃ©essayer.",
                "password_change_required": "Vous devez mettre Ã  jour votre mot de passe, soit parce quâ€™il sâ€™agit de votre premiÃ¨re connexion, soit parce que ce dernier a expirÃ©.",
                "password_leaked": "Cette connexion a Ã©tÃ© bloquÃ©e parce que votre mot de passe a Ã©tÃ© utilisÃ© sur un autre site web. Nous vous avons envoyÃ© un courriel avec des instructions pour la dÃ©bloquer.",
                "too_many_attempts": "Votre compte a Ã©tÃ© bloquÃ© Ã  la suite de trop nombreuses tentatives de connexion consÃ©cutives.",
                "lock.mfa_registration_required": "l'authentification multifactorielle est nÃ©cessaire, mais votre appareil n'est pas inscrit. Veuillez vous inscrire avant de passer.",
                "lock.mfa_invalid_code": "Mauvais code. Veuillez rÃ©essayer.",
                "session_missing": "Impossible de terminer votre demande d'authentification. Veuillez essayer de nouveau aprÃ¨s la fermeture de tous les dialogues ouverts",
                "hrd.not_matching_email": "Veuillez utiliser votre messagerie d'entreprise pour vous connecter."
            },
            "passwordless": {
                "bad.email": "Lâ€™adresse de messagerie nâ€™est pas valide",
                "bad.phone_number": "Le numÃ©ro de tÃ©lÃ©phone nâ€™est pas valide",
                "lock.fallback": "Nous sommes dÃ©solÃ©s, un problÃ¨me est survenu"
            },
            "signUp": {
                "invalid_password": "Le mot de passe nâ€™est pas valide.",
                "lock.fallback": "Nous sommes dÃ©solÃ©s, un problÃ¨me est survenu lors de la tentative dâ€™inscription.",
                "password_dictionary_error": "Le mot de passe est trop commun.",
                "password_no_user_info_error": "Le mot de passe est basÃ© sur des informations utilisateur.",
                "password_strength_error": "La force du mot de passe est trop faible.",
                "user_exists": "Cet utilisateur existe dÃ©jÃ .",
                "username_exists": "Ce nom dâ€™utilisateur existe dÃ©jÃ ."
            }
        },
        "success": {
            "logIn": "Merci de vous Ãªtre connectÃ©.",
            "forgotPassword": "Nous venons de vous envoyer un courriel pour rÃ©initialiser votre mot de passe.",
            "magicLink": "Nous vous avons envoyÃ© un lien pour vous connecter<br />Ã  %s.",
            "signUp": "Merci de vous Ãªtre inscrit."
        },
        "blankErrorHint": "Ne peut Ãªtre vide",
        "codeInputPlaceholder": "votre code",
        "databaseEnterpriseLoginInstructions": "",
        "databaseEnterpriseAlternativeLoginInstructions": "ou",
        "databaseSignUpInstructions": "",
        "databaseAlternativeSignUpInstructions": "ou",
        "emailInputPlaceholder": "votreadresse@exemple.com",
        "enterpriseLoginIntructions": "Connectez-vous avec vos identifiants dâ€™entreprise.",
        "enterpriseActiveLoginInstructions": "Veuillez entrer les identifiants de connexion de votre entreprise %s.",
        "failedLabel": "A Ã©chouÃ© !",
        "forgotPasswordAction": "Mot de passe oubliÃ© ?",
        "forgotPasswordInstructions": "Veuillez entrer votre adresse de messagerie. Nous vous enverrons un courriel pour rÃ©initialiser votre mot de passe.",
        "forgotPasswordSubmitLabel": "Envoyer le courriel",
        "invalidErrorHint": "Invalide",
        "lastLoginInstructions": "DerniÃ¨re connexion avec",
        "loginAtLabel": "Connexion Ã  %s",
        "loginLabel": "Connexion",
        "loginSubmitLabel": "Connexion",
        "loginWithLabel": "Se connecter avec %s",
        "notYourAccountAction": "Ceci nâ€™est pas votre compte ?",
        "passwordInputPlaceholder": "Votre mot de passe",
        "passwordStrength": {
            "containsAtLeast": "Doit contenir au moins %d des %d types de caractÃ¨res :",
            "identicalChars": "Pas plus de %d caractÃ¨res identiques dans une ligne (par ex., Â« %s Â» nâ€™est pas autorisÃ©)",
            "nonEmpty": "Mot de passe non vide requis",
            "numbers": "Chiffres  (i.e. 0-9)",
            "lengthAtLeast": "Au moins %d caractÃ¨res",
            "lowerCase": "Lettres minuscules (a-z)",
            "shouldContain": "Doit contenir :",
            "specialCharacters": "CaractÃ¨res spÃ©ciaux (par ex. !@#$%^&*)",
            "upperCase": "Lettres majuscules (A-Z)"
        },
        "passwordlessEmailAlternativeInstructions": "Sinon entrez votre adresse de messagerie pour vous connecter<br/>ou crÃ©ez un compte",
        "passwordlessEmailCodeInstructions": "Un courriel avec le code a Ã©tÃ© envoyÃ© Ã  %s.",
        "passwordlessEmailInstructions": "Entrez votre adresse de messagerie pour vous connecter<br/>ou crÃ©ez un compte",
        "passwordlessSMSAlternativeInstructions": "Sinon saisissez votre numÃ©ro de tÃ©lÃ©phone pour vous connecter<br/>ou crÃ©ez un compte",
        "passwordlessSMSCodeInstructions": "Un SMS avec le code a Ã©tÃ© envoyÃ©<br/>Ã  %s.",
        "passwordlessSMSInstructions": "Saisissez votre numÃ©ro de tÃ©lÃ©phone pour vous connecter<br/>ou crÃ©ez un compte",
        "phoneNumberInputPlaceholder": "votre numÃ©ro de tÃ©lÃ©phone",
        "resendCodeAction": "Vous nâ€™avez pas reÃ§u le code ?",
        "resendLabel": "Envoyer une nouvelle fois",
        "resendingLabel": "Nouvel envoi en coursâ€¦",
        "retryLabel": "RÃ©essayer",
        "sentLabel": "EnvoyÃ© !",
        "signUpLabel": "Inscription",
        "signUpSubmitLabel": "Inscription",
        "signUpTerms": "",
        "signUpWithLabel": "Sâ€™inscrire avec %s",
        "socialLoginInstructions": "",
        "socialSignUpInstructions": "",
        "ssoEnabled": "Authentification unique activÃ©e",
        "submitLabel": "Envoyer",
        "unrecoverableError": "Un problÃ¨me est survenu.<br />Veuillez contacter lâ€™assistance technique.",
        "usernameFormatErrorHint": "Utilisez %d-%d lettres, chiffres et les caractÃ¨res suivants: \"_\", \".\", \"+\", \"-\"",
        "usernameInputPlaceholder": "votre nom dâ€™utilisateur",
        "usernameOrEmailInputPlaceholder": "nom dâ€™utilisateur/adresse de messagerie",
        "title": "Auth0",
        "welcome": "Bienvenue %s !",
        "windowsAuthInstructions": "Vous Ãªtes connectÃ© depuis votre rÃ©seau dâ€™entreprise...",
        "windowsAuthLabel": "Authentification Windows",
        "forgotPasswordTitle": "rÃ©initialisez votre mot de passe",
        "signupTitle": "S'inscrire",
        "mfaInputPlaceholder": "Code",
        "mfaLoginTitle": "2-Step VÃ©rification",
        "mfaLoginInstructions": "Veuillez entrer le code de vÃ©rification gÃ©nÃ©rÃ© par votre application mobile.",
        "mfaSubmitLabel": "S'identifier",
        "mfaCodeErrorHint": "Utilisez des numÃ©ros %d",
        "showPassword": "Montrer le mot de passe"
    });
}

//password reset
//as Auth0 does not support similar options (languageDictionary), we have to declare a global variable for language translation
window.auth0PasswordResetDict = {
    passwordPlaceholder: "your new password",
    passwordConfirmationPlaceholder: "confirm your new password",
    passwordConfirmationMatchError: "Please ensure the password and the confirmation are the same.",
    passwordStrength: {
        containsAtLeast: "Contain at least %d of the following %d types of characters:",
        identicalChars: "No more than %d identical characters in a row (e.g., \"%s\" not allowed)",
        nonEmpty: "Non-empty password required",
        numbers: "Numbers (i.e. 0-9)",
        lengthAtLeast: "At least %d characters in length",
        lowerCase: "Lower case letters (a-z)",
        shouldContain: "Should contain:",
        specialCharacters: "Special characters (e.g. !@#$%^&*)",
        upperCase: "Upper case letters (A-Z)"
    },
    successMessage: "Your password has been reset successfully.",
    configurationError: "An error ocurred. There appears to be a misconfiguration in the form.",
    networkError: "The server cannot be reached, there is a problem with the network.",
    timeoutError: "The server cannot be reached, please try again.",
    serverError: "There was an error processing the password reset.",
    headerText: "Enter a new password for<br />{email}",
    title: "Change Password",
    weakPasswordError: "Password is too weak.",
    passwordHistoryError: "Password has previously been used."
  }
