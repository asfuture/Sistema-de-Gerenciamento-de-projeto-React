import Item from "./item"

function List(){
    return(
       <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" />
            <Item marca="Fiat" />
            <Item marca="Ranault" />
        </ul>
       </>
    )
}

export default List
