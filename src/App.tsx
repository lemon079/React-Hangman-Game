import { useCallback, useEffect, useState } from "react"
import Keyboard from "./Keyboard"
import HangmanWord from "./HangmanWord"
import { words } from './wordToGuess'
import HangmanDrawing from "./HangmanDrawing"

function App() {

  const [wordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const inCorrectGuess: string[] = guessedLetters.filter(guessedLetter => !wordToGuess.includes(guessedLetter))
  const correctGuess: string[] = guessedLetters.filter(guessedLetter => wordToGuess.includes(guessedLetter))

  const isLoser = inCorrectGuess.length >= 7;
  const isWinner = wordToGuess.split('').every(wordToGuessLetter => correctGuess.includes(wordToGuessLetter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (isWinner || isLoser) return;
    else if (!guessedLetters.includes(letter)) {
      setGuessedLetters(prev => [...prev, letter])
    }
  }, [guessedLetters])

  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      if (e.key.match(/^[a-z]$/)) {
        addGuessedLetter(e.key);
      }
    }

    document.addEventListener('keypress', handler)

    return () => document.removeEventListener('keypress', handler)

  }, [guessedLetters])

  return (
    <>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 sm:justify-center sm:items-center">
        <div className="display mx-auto text-5xl font-black text-center font-mono">
          <p className={`pointer-events-none ${isLoser ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
            {isWinner ? 'YOU WON!' : isLoser ? 'You Lose, NICE TRY!' : 'GUESS THE WORD BEFORE THE MAN HANGS!'}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={() => window.location.reload()}>
            Try AGAIN
          </button>
        </div>

        <div className="game-container mx-auto mt-10 relative space-y-10">
          <div className="h-[15rem]">
            <div className="bg-black w-32 h-1 mx-auto relative left-[3.9rem]"></div>
            <div className="bg-black w-1 h-64 mx-auto"></div>
            <div className="bg-black w-40 h-1 mx-auto"></div>
            <div className="bg-black w-1 h-7 mx-auto relative top-[-16.5rem] left-[8rem]"></div>
            <HangmanDrawing numberOfInCorrectGuesses={inCorrectGuess.length} />
          </div>
          <HangmanWord wordToGuess={wordToGuess} correctGuess={correctGuess} isLoser={isLoser} />
          <Keyboard correctGuess={correctGuess} inCorrectGuess={inCorrectGuess} addGuessedLetter={addGuessedLetter} isLoser={isLoser} isWinner={isWinner} />
        </div>
      </div>
    </>
  )
}

export default App
