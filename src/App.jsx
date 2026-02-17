import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Chapter1_SimplePresent from './pages/Chapter1_SimplePresent';
import Chapter2_VerbToBe from './pages/Chapter2_VerbToBe';
import Chapter3_DoDoes from './pages/Chapter3_DoDoes';
import Chapter4_ThereIsAre from './pages/Chapter4_ThereIsAre';
import Chapter5_Prepositions from './pages/Chapter5_Prepositions';
import Chapter6_Possessives from './pages/Chapter6_Possessives';
import Chapter7_SimplePast from './pages/Chapter7_SimplePast';
import MockTest from './pages/MockTest';

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-adventure-blue to-adventure-green flex flex-col items-center justify-center text-white p-8">
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 text-center border-4 border-white shadow-2xl max-w-4xl w-full">
      <h1 className="text-6xl font-comic font-bold mb-6 drop-shadow-md">Grammar Adventurers! 🌍</h1>
      <p className="text-2xl mb-12 drop-shadow">Join the adventure and master English grammar!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ChapterCard to="/chapter/1" title="Chapter 1: Daily Routine" color="bg-yellow-400" />
        <ChapterCard to="/chapter/2" title="Chapter 2: Verb 'To Be'" color="bg-pink-400" />
        <ChapterCard to="/chapter/3" title="Chapter 3: Do / Does" color="bg-purple-400" />
        <ChapterCard to="/chapter/4" title="Chapter 4: There Is/Are" color="bg-orange-400" />
        <ChapterCard to="/chapter/5" title="Chapter 5: Prepositions" color="bg-blue-400" />
        <ChapterCard to="/chapter/6" title="Chapter 6: Possessives" color="bg-red-400" />
        <ChapterCard to="/chapter/7" title="Chapter 7: Time Machine" color="bg-indigo-600" />
        <ChapterCard to="/test" title="Mock Test 📝" color="bg-green-500" />
      </div>
    </div>
  </div>
);

const ChapterCard = ({ to, title, color, locked }) => (
  <Link to={locked ? "#" : to} className={`block p-6 rounded-2xl shadow-lg transform transition hover:scale-105 ${color} ${locked ? 'opacity-50 cursor-not-allowed' : 'hover:rotate-1'}`}>
    <h3 className="text-xl font-bold text-white text-shadow-sm">{title}</h3>
    {locked && <span className="text-sm text-white/80">Coming Soon 🔒</span>}
  </Link>
);

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter/1" element={<Chapter1_SimplePresent />} />
          <Route path="/chapter/2" element={<Chapter2_VerbToBe />} />
          <Route path="/chapter/3" element={<Chapter3_DoDoes />} />
          <Route path="/chapter/4" element={<Chapter4_ThereIsAre />} />
          <Route path="/chapter/5" element={<Chapter5_Prepositions />} />
          <Route path="/chapter/6" element={<Chapter6_Possessives />} />
          <Route path="/chapter/7" element={<Chapter7_SimplePast />} />
          <Route path="/test" element={<MockTest />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
