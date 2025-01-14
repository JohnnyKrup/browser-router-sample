/**
 * Die PrivatePage.jsx folgt dem gleichen Aufbau, ist aber für geschützte Inhalte gedacht:
 *  Diese Komponente wird später mit einer Zugangskontrolle versehen
 *  Nur authentifizierte und autorisierte Benutzer sollen Zugriff erhalten
 *  Hier können sensible oder personalisierte Inhalte dargestellt werden
 *  Der Zugriff auf diese Seite wird später durch zusätzliche Logik geschützt
 *
 * @returns {JSX.Element}  Eine React-Komponente
 */
export function PrivatePage() {
  return (
    <div>
      <h1>Private Seite</h1>
      <p>
        Dies ist eine private Seite. Nur registrierte Benutzer sollten hier
        Zugang haben.
      </p>
    </div>
  );
}

export default PrivatePage;
