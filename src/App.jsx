import { Routes, Route, Link } from "react-router-dom";
import PublicPage from "./pages/PublicPage";
import PrivatePage from "./pages/PrivatePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./auth/ProtectedRoute";

/**
 * 1. Wichtige Imports:
 *    Routes und Route aus 'react-router-dom' sind die Basis für unser Routing
 *    Wir importieren unsere erstellten Seiten-Komponenten (PublicPage und PrivatePage)
 *
 * 2. Route-Konfiguration:
 *    <Routes> ist der Container für alle unsere Routen
 *    Jede <Route> definiert einen Pfad in unserer Anwendung
 *    path="..." legt fest, unter welcher URL die Komponente erreichbar ist
 *    element={...} bestimmt, welche Komponente bei diesem Pfad angezeigt wird
 *
 * 3. Navigation:
 *    Mit dieser Navigation können Benutzer einfach zwischen den Seiten wechseln.
 *    Die Link-Komponente verhindert dabei, dass die Seite neu geladen wird, was für eine flüssige Benutzererfahrung sorgt.
 *
 * @returns {JSX.Element} Eine React-Komponente
 */
function App() {
  // Einfache Login/Logout Funktionen
  const login = () => {
    localStorage.setItem("isAuthenticated", "true");
    window.location.reload(); // Einfaches Neuladen für Demo-Zwecke
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.reload();
  };

  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  return (
    <div>
      <nav>
        <Link to="/public">Öffentliche Seite</Link> |{" "}
        <Link to="/private">Private Seite</Link>
        {isAuth ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>

      {/**
      
      Bevor wir die Protected Routes hatten, sahen die Links so aus:

      <Routes>
        <Route path="/public" element={<PublicPage />} />
        <Route path="/private" element={<PrivatePage />} />
      </Routes>

       */}

      <Routes>
        {/* Öffentliche Routen */}
        <Route path="/" element={<PublicPage />} />
        <Route path="/public" element={<PublicPage />} />

        {/* Geschützte Route */}
        <Route
          path="/private"
          element={
            <ProtectedRoute>
              <PrivatePage />
            </ProtectedRoute>
          }
        />

        {/* 404-Route - muss immer als letzte Route definiert werden */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
