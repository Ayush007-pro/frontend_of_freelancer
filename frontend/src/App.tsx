// import React from 'react'; // this might be needed to use React directly someday, so don't remove it !
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/user/login';
import Register from './pages/user/register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;