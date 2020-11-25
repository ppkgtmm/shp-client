import React from 'react'


const InputGenerator = ({rules}) => {
    if(rules.type === 'number'){
        return (
            <div className="control">
                <p>{rules.label}:</p>
                <input className="input is-small" type="number" name={`${rules.name}`} min={`${rules.min}`} step={`${rules.step}`} 
                required onChange={rules.func} />
            </div>
        )
    }
    else if(rules.type === 'text'){
        return (
            <div className="control">
                <p>{rules.label}:</p>
                <input className="input is-small" type="text" name={`${rules.name}`} required  onChange={rules.func} />
            </div>
        )
    }
    else if(rules.type === 'password'){
        return (
            <div className="control">
                <p>{rules.label}:</p>
                <input className="input is-small" type="password" name={`${rules.name}`} required  onChange={rules.func} />
            </div>
        )
    }
    else if(rules.type === 'email'){
        return (
            <div className="control">
                <p>{rules.label}:</p>
                <input className="input is-small" type="email" name={`${rules.name}`} required  onChange={rules.func} />
            </div>
        )
    }
}

export default InputGenerator