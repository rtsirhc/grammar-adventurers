import React from 'react';
import { Link } from 'react-router-dom';
import leoImg from '../assets/leo.png';
import miaImg from '../assets/mia.png';
import ivyImg from '../assets/ivy.png';
import samImg from '../assets/sam.png';

const Welcome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-300 to-green-300 flex flex-col items-center justify-center p-8 text-center overflow-hidden relative">

            {/* Sun */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-80 animate-pulse"></div>

            <div className="z-10 bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-4 border-white max-w-5xl w-full">
                <h1 className="text-5xl md:text-7xl font-comic font-bold text-adventure-blue mb-4 drop-shadow-sm">Grammar Adventurers</h1>
                <p className="text-2xl text-slate-700 mb-8 italic">"Learning English is an Adventure!"</p>

                <div className="bg-white/50 p-6 rounded-xl mb-8">
                    <p className="text-xl text-slate-800 font-bold">
                        Meet the team! Leo, Mia, Ivy, and Sam are best friends. They explore the world and learn English together. Join them on their journey! 🌍✨
                    </p>
                </div>

                {/* Team Showcase */}
                <div className="flex justify-center items-end gap-8 mb-12">
                    <div className="flex flex-col items-center group">
                        <img src={leoImg} alt="Leo" className="h-48 md:h-64 hover:scale-110 transition duration-300 mix-blend-multiply" />
                        <span className="mt-2 bg-adventure-blue text-white px-3 py-1 rounded-full font-bold shadow-md">Leo 🛹</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={miaImg} alt="Mia" className="h-48 md:h-64 hover:scale-110 transition duration-300 delay-75 mix-blend-multiply" />
                        <span className="mt-2 bg-pink-500 text-white px-3 py-1 rounded-full font-bold shadow-md">Mia 📷</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={ivyImg} alt="Ivy" className="h-48 md:h-64 hover:scale-110 transition duration-300 delay-150 mix-blend-multiply" />
                        <span className="mt-2 bg-purple-500 text-white px-3 py-1 rounded-full font-bold shadow-md">Ivy 🗺️</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        <img src={samImg} alt="Sam" className="h-48 md:h-64 hover:scale-110 transition duration-300 delay-200 mix-blend-multiply" />
                        <span className="mt-2 bg-orange-500 text-white px-3 py-1 rounded-full font-bold shadow-md">Sam 🔭</span>
                    </div>
                </div>

                <Link to="/index" className="inline-block px-12 py-6 bg-adventure-green hover:bg-green-500 text-white font-bold rounded-full text-3xl shadow-xl transition transform hover:scale-110 hover:rotate-2 border-4 border-green-200">
                    START THE BOOK 📖
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
