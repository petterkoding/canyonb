import React from 'react'


const WithLabel = (Component) => {
    
    WithLabel.displayName = "WithLabel"
    
    return ({children, ...rest}) => (
        <div>
            <Component {...rest}/>
            <span className="text-orange-600 text-xs align-top ml-1 font-normal">{children}</span>
        </div>
    )
}


export default WithLabel