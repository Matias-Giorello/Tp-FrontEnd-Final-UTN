export const Controls = ({ 
  excludeSpaces, setExcludeSpaces, 
  limitCharacter, handleChangeInputLimit, 
  limitValue, setLimitValue 
}) => {
  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={excludeSpaces}
          onChange={() => setExcludeSpaces(!excludeSpaces)}
        />
        Excluir espacios
      </label>
      <label>
        <input 
          type="checkbox" 
          checked={limitCharacter}
          onChange={handleChangeInputLimit}
        />
        Limite de Caracteres
      </label>
      {
        limitCharacter &&
        <input 
        type="number" 
        value={limitValue} 
        onChange={(e) => setLimitValue(e.target.value)}
        />
      }
    </div>
  )
}