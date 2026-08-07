import { useState } from "react"
import { Header } from "./components/Header"
import { WriteArea } from "./components/WriteArea"
import { Controls } from "./components/Controls"
import { Stats } from "./components/Stats"
import { LetterDensity } from "./components/LetterDensity"

const App = () => {
  const [text, setText] = useState("Esto es un texto de prueba, puedes modificarlo a tu gusto.")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)

  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length
  const readingTime = Math.ceil(words/200)

  const handleChangeTextArea = (e) => {
    const value = e.target.value
    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } else {
        setText(value)
      }
  }

  const handleChangeInputLimit = (e) => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúñ]/g, "")
  const total = cleanText.length

  const dictionaryLetters = {}

  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
    const letterName = dataLetter[0]
    const amountLetter = dataLetter[1]

    return {
      letterName: letterName,
      amount: amountLetter,
      percentage: (amountLetter/total) * 100
    }
  })

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  return (
    <main>
      <Header />
      <h2>Analize your text <br />
        in real-time</h2>

      <textarea 
      placeholder="Escribe tu texto..."
      onChange={handleChangeTextArea}
      value={text}
      ></textarea>
      
      <Controls 
        excludeSpaces={excludeSpaces} 
        setExcludeSpaces={setExcludeSpaces}
        limitCharacter={limitCharacter}
        handleChangeInputLimit={handleChangeInputLimit}
        limitValue={limitValue}
        setLimitValue={setLimitValue}
      />

      <Stats 
        readingTime={readingTime}
        characters={characters}
        words={words}
        sentences={sentences}
      />

      <LetterDensity sortLetters={sortLetters} />
    </main>
  )
}

export { App }