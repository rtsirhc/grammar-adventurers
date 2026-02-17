import React from 'react';
import { Link } from 'react-router-dom';

const TitlePage = ({ title, subtitle, chapterNumber, nextPath, prevPath, color = "bg-adventure-blue" }) => {
    return (
        <div className={`min-h-screen ${color} flex flex-col items-center justify-center p-8 text-white relative overflow-hidden`}>
            {/* Background decoration circles */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-xl"></div>

            <div className="z-10 text-center max-w-4xl border-8 border-white/30 p-12 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                <h2 className="text-3xl font-bold uppercase tracking-widest mb-4 opacity-90">Chapter {chapterNumber}</h2>
                <h1 className="text-6xl md:text-8xl font-comic font-bold mb-6 drop-shadow-md">{title}</h1>
                {subtitle && <p className="text-2xl md:text-3xl italic opacity-90">{subtitle}</p>}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 w-full px-12 flex justify-between items-center text-4xl font-bold">
                {prevPath ? (
                    <Link to={prevPath} className="opacity-70 hover:opacity-100 hover:scale-110 transition bg-white/20 p-4 rounded-full">
                        ⬅️
                    </Link>
                ) : <div></div>}

                {nextPath ? (
                    <Link to={nextPath} className="animate-bounce opacity-90 hover:opacity-100 hover:scale-110 transition bg-white/20 p-4 rounded-full shadow-lg">
                        ➡️
                    </Link>
                ) : <div></div>}
            </div>
        </div>
    );
};

export default TitlePage;
