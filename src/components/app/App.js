import '../app/App.css';
import 'bootswatch/dist/journal/bootstrap.css';
import '../../styles/styles.css';

import Home from '../home/home.js';
import NavBar from '../navBar/NavBar';
import AppRoutes from '../app/AppRoutes.js';

function App() {
  return (
    <div className="App">
        <NavBar />
        {window.location.pathname === '/' && <Home />}
        <AppRoutes />
    </div>
  );
}

export default App;
