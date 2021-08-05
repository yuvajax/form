import React,{useState,useEffect} from 'react'

function useForm(callback,handleSubmits) {
    const [values,setValues] = useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        password:'',
        conformpassword:''
    })
    
    const [submitting,setSubmitting] = useState(false)

    const handlechanges = (e) =>{
        setValues({
            ...values,
            [e.target.name]:e.target.value,
        })
        console.log(values)
    }
    
    const handleonsubmit = (e) =>{
        e.preventDefault()
        setSubmitting(true);
    }

    useEffect(()=>{
        if(submitting){
            callback(handleSubmits)
         }
        },)
        
    return values,handlechanges,handleonsubmit
    
}

export default useForm
