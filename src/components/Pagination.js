import react from 'react'

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <div className="pagination">
            <button className="page-btn" onClick={onLeftClick}>Anterior</button>
            <div>{page} de {totalPages}</div>
            <button className="page-btn" onClick={onRightClick}>Siguiente</button>
    </div>
)
}


export default Pagination;