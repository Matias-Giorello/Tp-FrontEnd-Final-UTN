export const Controls = ({ 
  excludeSpaces, setExcludeSpaces, 
  limitCharacter, handleChangeInputLimit, 
  limitValue, setLimitValue,
  readingTime
}) => {
  return (
    <div className="controls-container">
      <div className="checkbox-group">
        <label className="custom-checkbox">
          <input 
            type="checkbox" 
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
          />
          Exclude Spaces
        </label>
        
        <label className="custom-checkbox">
          <input 
            type="checkbox" 
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          Set Character Limit
        </label>
        
        {limitCharacter && (
          <input 
            className="limit-input"
            type="number" 
            value={limitValue} 
            onChange={(e) => setLimitValue(e.target.value)}
          />
        )}
      </div>

      <div className="reading-time">
        Approx. reading time: {readingTime} minute{readingTime !== 1 ? 's' : ''}
      </div>
    </div>
  )
}