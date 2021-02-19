import { FirstName, LastName } from '../App'
import { useContext } from 'react'
function Getgobal() {
    const firstName = useContext(FirstName)
    const lastName = useContext(LastName)

    return (
        <>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </>
    )
}

export default Getgobal