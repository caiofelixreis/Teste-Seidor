import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

export const Context = createContext(null)

//uso do contexto para gerenciar estados globais
const ContextProvider = ({ children }) => {

    //estado que define quando o moldal ira aparecer ou não
    const [modal, setModal] = useState(false)


    const [selectedFunc, setSelectedFunc] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        api.get('funcionarios').then(({ data }) => {
            setData(data)
        })
    }, [])

    return (
        <Context.Provider value={{ modal, setModal, selectedFunc, setSelectedFunc, data, setData }} >
            {children}
        </ Context.Provider>
    )
}

export default ContextProvider
