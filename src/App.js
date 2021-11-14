import { useState } from 'react';
import './styles/Main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Repositories from './pages/Repositories/Repositories';

function App() {
  const [repos, setRepos] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home setRepos={setRepos} />} />
          <Route
            exact
            path="/repositories"
            element={<Repositories repos={repos} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
