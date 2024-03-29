import AppRouter from "components/Router";
import { useState, useEffect } from "react";
import {authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  
   return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing..."}
    <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;
