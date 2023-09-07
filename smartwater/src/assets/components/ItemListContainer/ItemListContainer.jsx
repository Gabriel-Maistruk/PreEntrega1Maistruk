import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return ( <>
        <div className='div-itemcontainer'>
            <h2>{greeting}</h2>
        </div>
    </>);
}

export default ItemListContainer;