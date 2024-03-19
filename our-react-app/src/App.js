import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="container">
        <nav>
            <ul>
                <li id="active">HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Sanity and headless CMS</li>
            </ul>
        </nav>
        <main>
            <article>
                <h2>Test</h2>
                <p id="tekst">HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.</p>
                <ul>
                    <li><a href="#">Test</a></li>
                    <li><a href="#">Test</a></li>
                    <li><a href="#">Test</a></li>
                </ul>
            </article>
        </main>
    </div>
  );
}

export default App;
