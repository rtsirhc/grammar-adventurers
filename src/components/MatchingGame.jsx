import React, { useState, useEffect } from 'react';

const MatchingGame = ({ pairs, onComplete }) => {
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState(null);
    const [matched, setMatched] = useState([]);

    useEffect(() => {
        // Shuffle items
        const allItems = pairs.flatMap(pair => [
            { id: pair.id + '-left', text: pair.left, type: 'left', matchId: pair.id },
            { id: pair.id + '-right', text: pair.right, type: 'right', matchId: pair.id }
        ]).sort(() => Math.random() - 0.5);
        setItems(allItems);
    }, [pairs]);

    const handleCardClick = (item) => {
        if (matched.includes(item.id) || selected?.id === item.id) return;

        if (!selected) {
            setSelected(item);
        } else {
            if (selected.matchId === item.matchId && selected.type !== item.type) {
                // Match found!
                setMatched([...matched, selected.id, item.id]);
                setSelected(null);
                if (matched.length + 2 === items.length) {
                    setTimeout(onComplete, 1000);
                }
            } else {
                // No match
                setSelected(item); // Just switch selection or maybe wait a bit? 
                // For simplicity, let's just deselect if wrong, or maybe visually indicate error.
                // Let's implement a simple "try again" visual by resetting selected after a delay if intended,
                // but here I'll just clear selection like a "swap focus" which is easier for kids (no penalty).
                // Actually, let's make it strict: if click second and wrong, clear both.
                setTimeout(() => setSelected(null), 500);
            }
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {items.map(item => {
                const isMatched = matched.includes(item.id);
                const isSelected = selected?.id === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => handleCardClick(item)}
                        disabled={isMatched}
                        className={`
              h-24 rounded-xl text-xl font-bold shadow-md transition-all transform
              ${isMatched ? 'invisible' : 'scale-100 hover:scale-105 active:scale-95'}
              ${isSelected ? 'bg-adventure-yellow text-white ring-4 ring-yellow-200' : 'bg-white text-adventure-blue'}
            `}
                    >
                        {item.text}
                    </button>
                );
            })}
        </div>
    );
};

export default MatchingGame;
