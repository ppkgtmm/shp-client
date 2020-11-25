import React from 'react'


const InputGenerator = ({rules}) => {
    const textInputType = ['password', 'email', 'text']
    if(rules.type === 'number'){
        return (
            <div className="control">
                <p>{rules.label}:</p>
                <input className="input is-small" type="number" name={`${rules.name}`} min={`${rules.min}`} step={`${rules.step}`} 
                required onChange={rules.func} />
            </div>
        )
    }
    else if(textInputType.includes(rules.type)){
        return (
            <div className="control">
                <p>{rules.label}:</p>
                <input className="input is-small" type={`${rules.type}`} name={`${rules.name}`} required  onChange={rules.func} />
            </div>
        )
    }
}

export default InputGenerator