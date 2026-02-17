import React, { createContext, useState, useContext, useCallback } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [isTimeMachineActive, setIsTimeMachineActive] = useState(false);
    const [currentChapter, setCurrentChapter] = useState(0);

    const toggleTimeMachine = useCallback((forceState) => {
        setIsTimeMachineActive(prev => forceState !== undefined ? forceState : !prev);
    }, []);

    const value = {
        isTimeMachineActive,
        toggleTimeMachine,
        currentChapter,
        setCurrentChapter
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
