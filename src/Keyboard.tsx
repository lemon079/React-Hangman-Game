import { useState } from "react";

type PROP = {
    correctGuess: string[],
    inCorrectGuess: string[],
    addGuessedLetter: (letter: string) => void,
    isWinner : boolean,
    isLoser : boolean,
}

const Keyboard = ({ correctGuess, inCorrectGuess, addGuessedLetter, isWinner, isLoser}: PROP) => {

    const alphabets: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    return (
        <div className="alphabets-container flex items-center justify-center flex-wrap gap-2">
            {alphabets.map(alphabet => (
                <Keys
                    key={alphabet}
                    button={alphabet}
                    correctGuess={correctGuess}
                    inCorrectGuess={inCorrectGuess}
                    addGuessedLetter={addGuessedLetter}
                    isWinner={isWinner}
                    isLoser={isLoser}
                />
            ))}
        </div>
    );
}

type KeyProps = {
    button: string,
    correctGuess: string[],
    inCorrectGuess: string[],
    addGuessedLetter: (letter: string) => void
    isWinner : boolean,
    isLoser : boolean,
}

const Keys = ({ button, correctGuess, inCorrectGuess, addGuessedLetter, isWinner, isLoser }: KeyProps) => {
    const [mouseEntered, setMouseEntered] = useState(false);

    function handleKey(): void {
        addGuessedLetter(button);
    }

    const isButtonDisabled = correctGuess.includes(button) || inCorrectGuess.includes(button) || isWinner || isLoser;

    return (
        <button
            disabled={isButtonDisabled}
            className={`border-2 border-black uppercase font-bold px-3 py-2 text-center text-2xl ${mouseEntered ? 'bg-blue-500 text-white' : ''} ${correctGuess.includes(button) ? 'bg-blue-500 text-white opacity-50' : inCorrectGuess.includes(button) ? 'opacity-50' : ''}`}
            onClick={handleKey}
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
        >
            {button}
        </button>
    );
}

export default Keyboard;
