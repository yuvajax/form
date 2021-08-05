import React,{useState} from 'react'
import Formsignup from './Formsignup'
import Formsuccess from './Formsuccess'

function Form() {
    const [loading, setloading] = useState(false)

    function handlesubmit(){
        setloading(true)
    }
    return(
        <div>
            {/* <Formsignup/> */}
            {!loading ? <Formsignup handleSubmit={handlesubmit}/> : <Formsuccess/>}
        </div>
    )
}

export default Form
