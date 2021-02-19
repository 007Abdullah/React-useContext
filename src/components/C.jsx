import { FirstName, LastName } from '../App'

function C() {

    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>My FirstName : {fname} <br /> My LastName: {lname}</h1>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }

                }

            </FirstName.Consumer>
        </>
    )
}

export default C