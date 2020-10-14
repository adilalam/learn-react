import React, { useState, useEffect } from 'react'

// class component
// class Hooks extends Component {

//     state = {
//         // this place for varibale initialization
//     }

//     componentDidMount() {
//         // this place for call an api for first time
//     }


//     // this place for render in UI (browser)
//     render() {
//         return (
//             <div>
//                 hook component
//             </div>
//         )
//     }
// }

function Hooks() {

    // this place for varibale initialization
    const [data, setData] = useState(0)

    // this place for call an api for first time
    useEffect(() => {}, [])
    

    // this place for render in UI (browser) this part also call jsx part, react compile it to HTML before rendering
    return (
        <div>
            hi there
        </div>
    )
}

export default Hooks
