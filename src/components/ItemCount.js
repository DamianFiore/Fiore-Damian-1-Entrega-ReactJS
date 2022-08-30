import { useState } from "react"

export const ItemCount = (prop) => {
    
    const [contador, setContador] = useState(prop.inicial)
    
    const handleSuma = () => {
        if (contador < prop.stocky){
            setContador(contador + 1)
        }
    }

    const handleResta = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    return(
        <div className="contador">
            <hr/>
            <button onClick={handleResta} className="btn">-</button>
            <span className="numero">{contador}</span>
            <button onClick={handleSuma} className="btn">+</button>
        </div>
    )
}