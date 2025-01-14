// src/auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export function ProtectedRoute({ children }) {
  // Dies ist ein simples Demobeispiel für eine Authentifizierung
  // In einer echten Anwendung würde hier eine sichere Authentifizierung stattfinden
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // oder als Einzeiler:
  // return isAuthenticated ? children : <Navigate to="/public" />;

  if (!isAuthenticated) {
    // Wenn nicht eingeloggt, Umleitung zur öffentlichen Seite
    return <Navigate to="/public" replace />;
  }

  // Wenn eingeloggt, zeige die geschützte Seite
  return children;
}

/**
 * Was sind PropTypes?
 *
 * PropTypes ist ein Werkzeug zur Validierung von Props in React
 * Sie helfen, Fehler frühzeitig zu erkennen
 * Sie dienen als Dokumentation für andere Entwickler
 * Sie laufen nur während der Entwicklung, nicht in Produktion
 *
 * PropTypes für children:
 * PropTypes.node: Akzeptiert alles, was React rendern kann
 *
 * React-Elemente
 * Strings
 * Numbers
 * Arrays von den obigen
 * null oder undefined
 *
 * .isRequired: Macht die Prop obligatorisch
 */
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
