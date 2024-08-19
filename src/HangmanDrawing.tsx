import React from 'react';

type PROP = {
    numberOfInCorrectGuesses: number;
}

const HangmanDrawing: React.FC<PROP> = ({ numberOfInCorrectGuesses }) => {
    const HEAD = <div className="HEAD bg-white border-4 border-black w-10 rounded-full h-10 mx-auto relative top-[-16.5rem] left-[8rem]"></div>;
    const NECK = <div className="NECK border-2 border-black w-1 rounded-full h-5 mx-auto relative top-[-16.5rem] left-[8rem]"></div>;
    const RIGHT_ARM = <div className="RIGHT_ARM border-2 rotate-[-50deg] border-black w-1 rounded-full h-14 mx-auto relative top-[-17.3rem] left-[9.25em]"></div>;
    const LEFT_ARM = <div className="LEFT_ARM border-2 rotate-[50deg] border-black w-1 rounded-full h-14 mx-auto relative top-[-20.8rem] left-[6.75em]"></div>;
    const STOMACH = <div className="STOMACH border-2 border-black w-1 rounded-full h-16 mx-auto relative top-[-23.5rem] left-[8rem]"></div>;
    const RIGHT_LEG = <div className="RIGHT_LEG border-2 rotate-[-50deg] border-black w-1 rounded-full h-14 mx-auto relative top-[-24.3rem] left-[9.25em]"></div>;
    const LEFT_LEG = <div className="LEFT_LEG border-2 rotate-[50deg] border-black w-1 rounded-full h-14 mx-auto relative top-[-27.8rem] left-[6.75em]"></div>;

    const BODY_PARTS = [HEAD, NECK, RIGHT_ARM, LEFT_ARM, STOMACH, RIGHT_LEG, LEFT_LEG];

    return (
        <>
            {BODY_PARTS.slice(0, numberOfInCorrectGuesses)}
        </>
    );
}

export default HangmanDrawing;
