import React, { createContext, useContext, useState } from 'react'

export const Context = createContext()

export const StateContext = ({children}) => {
    const [test, setTest] = useState('test state')

    return (
        <Context.Provider value={{
            test
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)