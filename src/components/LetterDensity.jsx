import { useState } from "react"

export const LetterAnalysis = ({ sortLetters }) => {
  // Creamos un estado local para manejar si mostramos todo o no
  const [showAll, setShowAll] = useState(false)

  // Si showAll es true, mostramos todas, sino cortamos las primeras 5
  const lettersToShow = showAll ? sortLetters : sortLetters.slice(0, 5)

  return (
    <section>
      <h2>Cantidad de Letras</h2>
      <article>
        {
          lettersToShow.map(letter => (
          <div key={letter.letterName}>
            <span>{letter.letterName.toUpperCase()}</span>
            <meter min="0" max="100" value={letter.percentage}></meter>
            <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>
          </div>))
        }
      </article>
      
      {/* Solo mostramos el botón si hay más de 5 letras distintas */}
      {sortLetters.length > 5 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      )}
    </section>
  )
}