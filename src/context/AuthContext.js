import React, {createContext, useState} from 'react';
import { useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory();

    function login(){
        console.log("Gebruiker is ingelogd")
        toggleIsAuth(true);
        history.push('/profile')
    }

    function logout(){
        console.log("Gebruiker is uitgelogd")
        toggleIsAuth(false);
        history.push('/');
    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;


//1. Maak een context-bestand (AuthContext.js) met daarin (je raadt het niet!) een AuthContext.

//2. Creer dan het custom Provider-component. Uit dit component return je het echte AuthContext.Provider component.

//3. Zorg ervoor dat we het custom Provider-component zometeen om de applicatie kunnen wikkelen door de children property te implementeren.

//4. Maak een data-object aan die je meegeeft aan de value-property en zet daar wat test-data in.

//5. Wrap dit om het <App />-component in index.js

//6. Lees de context uit in één van de pagina-componenten om te kijken of jouw eerste opzet functioneel is ( met useContext) Gelukt? Top.

//7. Dan is het tijd om state aan te maken in het custom Provider-component. Noem deze state-variabele isAuth of isAuthenticated en zet de initiële waarde op false.

// Geef de waarde van de state mee aan het data object. Lees deze authenticatie-status uit in het <NavBar /> component. Krijg je het te zien in de console? Zorg er dan voor dat je op basis van deze status een inloggen- en registreren-knop laat zien, of alleen een uitlog-knop.

//8. Schrijf een inlog-functie in het custom Provider-component en maak deze beschikbaar in het data-object. In de randvoorwaarden staat beschreven wat deze functie moet doen.

//9. Maak de knop in het formulier in SignIn.js functioneel. Als het formulier wordt gesubmit, roep je de login-functie uit de context aan!

//10. Schrijf een uitlog-functie in het custom Provider-component en maak deze beschikbaar in het data-object. In de randvoorwaarden staat  beschreven wat deze functie moet doen.

//11. Maak de knop in de navigatie (NavBar.js) functioneel. Als erop wordt geklikt, roep je de logout-functie uit de context aan!

//12. Ten slotte kun je de route naar /profile beveiligen met een private route.
