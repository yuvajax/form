import React from 'react'
import zxcvbn from 'zxcvbn'

function Passwordstrong({score}) {
    const pass = zxcvbn(score);
    const num = pass.score * 100/4;

    const createpasslabel = ()=>{
        switch(pass.score){
            case 1:
                return 'Weak';
            case 2:
                return 'Fear';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                    return '';
    }
}
    
    const passcolor = () =>{
        switch(pass.score){
            case 0:
                return '#828282';
            case 1:
                return '#ea1111';
            case 2:
                return '#ffad00';
            case 3:
                return 'rgba(101, 219, 111, 0.815)';
            case 4:
                return '#00b500';
            default:
                    return 'none'
        }
    }

    const changepasscolor = () =>({
        width:`${num}%`,
        background:passcolor(),
        height:'4px',
    })
    return (
        <div className="password" style={changepasscolor()}>  
        <p style={{color:passcolor()}}>{createpasslabel()}</p>
        </div>
        
    )
}

export default Passwordstrong
