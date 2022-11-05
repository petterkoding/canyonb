import React from 'react'

export default function WithLabel (Component){

    WithLabel.displayName = "with label component"

    return ({children, ...rest}) => (
        <div>
            <Component {...rest}/>
            <span className="text-orange-600 text-xs align-top ml-1 font-normal">{children}</span>
        </div>
    )
}
