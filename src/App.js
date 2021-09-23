import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <ul class="navbar">
            <li>
                <img src="./media/descarga.png" alt="imagen" class="logo">
            </li>
            <li>
                <button class="button mainButton">Nuevo Post</button>
            </li>
            <li><button class="button secundaryButton">Login</button></li>
            <li> <button class="button mainButton">Registro</button></li>
        </ul>
    </header>
    <main>
        <section></section>
        <section></section>
    </main>
    </div>
  );
}

export default App;
