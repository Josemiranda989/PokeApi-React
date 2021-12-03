import react from 'react'

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick}>Anterior</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>Siguiente</button>
    </div>
)
}

export default Pagination;