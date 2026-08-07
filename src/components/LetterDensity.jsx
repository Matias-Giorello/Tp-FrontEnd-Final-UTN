import { useState } from "react"

export const LetterDensity = ({ sortLetters }) => {
  const [showAll, setShowAll] = useState(false)
  const lettersToShow = showAll ? sortLetters : sortLetters.slice(0, 5)

  return (
    <section className="letter-analysis-container">
      <h2>Letter Density</h2>
      <article>
        {
          lettersToShow.map(letter => (
          <div key={letter.letterName} className="letter-row">
            <span className="letter-char">{letter.letterName.toUpperCase()}</span>
            <meter min="0" max="100" value={letter.percentage}></meter>
            <span className="letter-stats">{letter.amount} ({letter.percentage.toFixed(2)}%)</span>
          </div>))
        }
      </article>
      
      {sortLetters.length > 5 && (
        <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See less ▲" : "See more ▼"}
        </button>
      )}
    </section>
  )
}