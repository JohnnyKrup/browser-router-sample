import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

/**
 * Die Datei main.jsx ist der Einstiegspunkt unserer React-Anwendung.
 * Hier passieren zwei wichtige Dinge:
 *
 *  	1. Wir importieren den BrowserRouter aus 'react-router-dom'.
 *       Der BrowserRouter ist eine Komponente, die das clientseitige Routing in unserer React-Anwendung ermöglicht.
 *
 *    2. Die gesamte <App /> wird mit <BrowserRouter> umschlossen.
 *       Dadurch stellen wir sicher, dass alle Komponenten innerhalb unserer App Zugriff auf die Routing-Funktionalitäten haben.
 *
 *       Dies ermöglicht:
 *        ○ Navigation zwischen verschiedenen Seiten
 *        ○ Zugriff auf URL-Parameter
 *        ○ Verwaltung der Browser-Historie
 *
 *  Verwendung von Links und Routen in der gesamten Anwendung
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
