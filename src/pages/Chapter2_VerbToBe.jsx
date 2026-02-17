import React, { useState } from 'react';
import StoryPage from '../components/StoryPage';
import Character from '../components/Character';
import MatchingGame from '../components/MatchingGame';
import samImg from '../assets/sam.png';
import ivyImg from '../assets/ivy.png';

const Chapter2_VerbToBe = () => {
    return (
        <StoryPage
            title="Chapter 2: Who Are They?"
            NextChapterPath="/chapter/3/title"
            PrevChapterPath="/chapter/2/title"

            ChapterContent={
                <div className="space-y-6">
                    <h3 className="font-bold text-2xl text-pink-500 mb-4">Match the Pairs!</h3>
                    <p className="mb-4 text-slate-600">Connect the subject with the correct verb.</p>

                    <MatchingGame
                        pairs={[
                            { id: 1, left: "I", right: "Am" },
                            { id: 2, left: "She", right: "Is" },
                            { id: 3, left: "They", right: "Are" },
                            { id: 4, left: "We", right: "Are" },
                        ]}
                    />
                </div>
            }

            CharacterArea={
                <>
                    <Character
                        name="Sam"
                        image={samImg}
                        dialogue="I am Sam. We are friends!"
                        isTalking={true}
                    />
                    <Character
                        name="Ivy"
                        image={ivyImg}
                        dialogue="Yes! He is Sam. You are my friend too."
                        isTalking={true}
                    />
                </>
            }
        />
    );
};

export default Chapter2_VerbToBe;
