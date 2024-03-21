import React from 'react';

function Resources({ category }) {
  // Logikk for å hente riktige ressurser basert på kategorien
  // Du kan bruke ressurser.js-filen for dette

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      {/* Vis ressursene her */}
    </div>
  );
}

export default Resources;
