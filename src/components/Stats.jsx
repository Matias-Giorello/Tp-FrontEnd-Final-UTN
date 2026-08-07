export const Stats = ({ readingTime, characters, words, sentences }) => {
  return (
    <>
      <p>Tiempo aprox. de Lectura: ~{readingTime} min</p>
      <p>Cantidad de Caracteres: {characters}</p>
      <p>Cantidad de Palabras: {words}</p>
      <p>Cantidad de Oraciones: {sentences}</p>
    </>
  )
}