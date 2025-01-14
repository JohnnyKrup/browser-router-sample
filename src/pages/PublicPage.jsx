/**
 * Die PublicPage.jsx ist eine einfache React-Komponente, die öffentlich zugängliche Inhalte darstellt:
 *  Sie wird als eigenständige Komponente in einem separaten File erstellt
 *  Mit export default machen wir die Komponente für andere Dateien verfügbar
 *  In dieser Komponente können beliebige öffentliche Inhalte platziert werden
 *  Auf diese Seite sollen alle Besucher Zugriff haben
 *
 * @returns  {JSX.Element}  Eine React-Komponente
 */
export function PublicPage() {
  return (
    <div>
      <h1>Public Seite</h1>
      <p>
        Dies ist eine public Seite. Alle Benutzer sollten hier Zugang haben.
      </p>
    </div>
  );
}

export default PublicPage;
