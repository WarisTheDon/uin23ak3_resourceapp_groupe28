import React from 'react';
import resourcesData from './resourcesData';

function Resources({ category }) {
  // Finn ressursene for den valgte kategorien
  const selectedCategory = resourcesData.find(item => item.category.toLowerCase() === category.toLowerCase());

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h2>{selectedCategory.category.toUpperCase()}</h2>
      <p>{selectedCategory.text}</p>
      <ul>
        {selectedCategory.sources.map((source, index) => (
          <li key={index}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
