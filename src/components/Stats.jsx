export const Stats = ({ characters, words, sentences }) => {
  return (
    <div className="stats-container">
      <div className="stat-card card-purple">
        <span className="stat-number">{characters < 10 ? `0${characters}` : characters}</span>
        <span className="stat-label">Total Characters</span>
      </div>

      <div className="stat-card card-orange">
        <span className="stat-number">{words < 10 ? `0${words}` : words}</span>
        <span className="stat-label">Word Count</span>
      </div>

      <div className="stat-card card-red">
        <span className="stat-number">{sentences < 10 ? `0${sentences}` : sentences}</span>
        <span className="stat-label">Sentence Count</span>
      </div>
    </div>
  )
}