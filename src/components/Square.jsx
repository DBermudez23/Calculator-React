

export const Square = ({children, index, UpdateBoard}) => {
    const handleClick = () =>{
        UpdateBoard(index);
    }
    return(
        <button className="op-number" onClick={handleClick}>
            {children}
        </button>
    )
}