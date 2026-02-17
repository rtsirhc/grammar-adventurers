import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [isTimeMachineActive, setIsTimeMachineActive] = useState(false);
    const [currentChapter, setCurrentChapter] = useState(0);

    const toggleTimeMachine = (forceState) => {
        setIsTimeMachineActive(prev => forceState !== undefined ? forceState : !prev);
    };

    const value = {
        isTimeMachineActive,
        toggleTimeMachine,
        currentChapter,
        setCurrentChapter
    };

    return (
        <GameContext.Provider value={value}>
            <div className={`min-h-screen transition-all duration-1000 ${isTimeMachineActive ? "grayscale" : ""}`}>
                {children}
            </div>
        </GameContext.Provider>
    );
};
