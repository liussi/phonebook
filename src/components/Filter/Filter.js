export const Filter = ({ onFilterSearch ,filter }) => {
    return (
        <div>
          <label >Find contacts by name</label>
          <input type="text"  value={filter}
            onChange={onFilterSearch}/>  
        </div>
    )
}