import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TitlePage from './components/TitlePage';
import Welcome from './pages/Welcome';
import IndexPage from './pages/IndexPage';

// Chapters
import Chapter1_SimplePresent from './pages/Chapter1_SimplePresent';
import Chapter2_VerbToBe from './pages/Chapter2_VerbToBe';
import Chapter3_DoDoes from './pages/Chapter3_DoDoes';
import Chapter4_ThereIsAre from './pages/Chapter4_ThereIsAre';
import Chapter5_Prepositions from './pages/Chapter5_Prepositions';
import Chapter6_Possessives from './pages/Chapter6_Possessives';
import Chapter7_SimplePast from './pages/Chapter7_SimplePast';
import MockTest from './pages/MockTest';

import { GameProvider } from './context/GameContext';

const App = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          {/* Book Structure */}
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<IndexPage />} />

          {/* Chapter 1 */}
          <Route path="/chapter/1/title" element={
            <TitlePage
              chapterNumber="1"
              title="The Daily Routine"
              subtitle="Simple Present"
              prevPath="/index"
              nextPath="/chapter/1/content"
              color="bg-adventure-blue"
            />
          } />
          <Route path="/chapter/1/content" element={<Chapter1_SimplePresent />} />

          {/* Chapter 2 */}
          <Route path="/chapter/2/title" element={
            <TitlePage
              chapterNumber="2"
              title="Who Are They?"
              subtitle="Verb 'To Be'"
              prevPath="/chapter/1/content"
              nextPath="/chapter/2/content"
              color="bg-pink-400"
            />
          } />
          <Route path="/chapter/2/content" element={<Chapter2_VerbToBe />} />

          {/* Chapter 3 */}
          <Route path="/chapter/3/title" element={
            <TitlePage
              chapterNumber="3"
              title="Do or Does?"
              subtitle="Asking Questions"
              prevPath="/chapter/2/content"
              nextPath="/chapter/3/content"
              color="bg-purple-400"
            />
          } />
          <Route path="/chapter/3/content" element={<Chapter3_DoDoes />} />

          {/* Chapter 4 */}
          <Route path="/chapter/4/title" element={
            <TitlePage
              chapterNumber="4"
              title="What's In The Bag?"
              subtitle="There is / There are"
              prevPath="/chapter/3/content"
              nextPath="/chapter/4/content"
              color="bg-orange-400"
            />
          } />
          <Route path="/chapter/4/content" element={<Chapter4_ThereIsAre />} />

          {/* Chapter 5 */}
          <Route path="/chapter/5/title" element={
            <TitlePage
              chapterNumber="5"
              title="Where is the Cat?"
              subtitle="Prepositions of Place"
              prevPath="/chapter/4/content"
              nextPath="/chapter/5/content"
              color="bg-adventure-blue"
            />
          } />
          <Route path="/chapter/5/content" element={<Chapter5_Prepositions />} />

          {/* Chapter 6 */}
          <Route path="/chapter/6/title" element={
            <TitlePage
              chapterNumber="6"
              title="Whose is It?"
              subtitle="Possessives"
              prevPath="/chapter/5/content"
              nextPath="/chapter/6/content"
              color="bg-red-400"
            />
          } />
          <Route path="/chapter/6/content" element={<Chapter6_Possessives />} />

          {/* Chapter 7 */}
          <Route path="/chapter/7/title" element={
            <TitlePage
              chapterNumber="7"
              title="The Time Machine"
              subtitle="Simple Past"
              prevPath="/chapter/6/content"
              nextPath="/chapter/7/content"
              color="bg-indigo-600"
            />
          } />
          <Route path="/chapter/7/content" element={<Chapter7_SimplePast />} />

          {/* Test Section */}
          <Route path="/test-intro" element={
            <div className="min-h-screen bg-green-500 flex flex-col items-center justify-center text-white p-8 text-center">
              <h1 className="text-6xl font-comic font-bold mb-8">Ready for the Test?</h1>
              <p className="text-3xl mb-12">Show what you know!</p>
              <Link to="/test" className="px-12 py-6 bg-white text-green-600 font-bold rounded-full text-4xl shadow-xl hover:scale-110 transition">
                START 📝
              </Link>
            </div>
          } />
          <Route path="/test" element={<MockTest />} />

        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
