
type PROP = {
    wordToGuess: string,
    correctGuess: string[]
    isLoser: boolean
}

const HangmanWord = ({ wordToGuess, correctGuess, isLoser }: PROP) => {

    return (
        <>
            <div className="word-container flex justify-center gap-2 text-7xl font-bold font-mono uppercase pointer-events-none">
                {wordToGuess.split("").map((singleLetterOfWordToGuess, index) => (
                    <span key={index + 1} className='border-b-2 border-black'>
                        <span className={`${correctGuess.includes(singleLetterOfWordToGuess) ? 'opacity-100' : 'opacity-0'} ${(!correctGuess.includes(singleLetterOfWordToGuess)) && isLoser && 'text-red-500 opacity-100'}`}>{singleLetterOfWordToGuess}</span>
                    </span>
                ))}
            </div>
        </>
    )
}

export default HangmanWord