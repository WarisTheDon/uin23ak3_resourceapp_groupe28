import React from 'react';

function ResourcePage({ category, resources }) {
  // Finn de aktive ressursene basert på kategorien
  const activeResources = resources.find(resource => resource.category === category);

  // Hvis det ikke finnes ressurser for den valgte kategorien, vis en melding
  if (!activeResources) {
    return <div>Ingen ressurser funnet for denne kategorien</div>;
  }

  // Hvis det finnes ressurser, vis dem
  return (
    <div>
      <h2>{activeResources.category}</h2>
      <p>{activeResources.text}</p>
      <ul>
        {activeResources.sources.map((source, index) => (
          <li key={index}>
            <a href={source.url}>{source.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourcePage;