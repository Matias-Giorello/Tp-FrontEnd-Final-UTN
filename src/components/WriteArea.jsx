const WriteArea = ({ handleChangeTextArea, text }) => {
    return <textarea 
      placeholder="Escribe tu texto..."
      onChange={handleChangeTextArea}
      value={text}
      ></textarea>
}

export { WriteArea }