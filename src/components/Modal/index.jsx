import React, { useContext } from 'react'
import style from './style.module.scss'
import RegularButton from '../RegularButton'
import { Context } from '../../context'
import api from '../../services/api'

const Modal = ({ title }) => {

    const { modal, setModal, selectedFunc, data, setData } = useContext(Context)

    const handleDeleteConfirm = async () => {

        const findFunc = data.find((element) => element.id === selectedFunc[0])

        if (findFunc) {
            await api.delete(`/funcionarios/${findFunc.id}`)

            const newData = await api.get('/funcionarios')
            setData(newData.data)

        }

        setModal(!modal)
    }

    const handleCloseClick = ({ target }) => {
        if (target.className === 'style_container__2SwyC') setModal(!modal)
    }

    return (
        <main className={style.container} style={modal ? { display: ' flex' } : { display: ' none' }} onClick={handleCloseClick}>
            <div className={style.modal}>
                <h1>
                    {title}
                </h1>

                <div className={style.actions}>
                    <RegularButton title="Excluir" onClick={handleDeleteConfirm} />
                    <RegularButton title="Cancelar" onClick={() => setModal(!modal)} />
                </div>
            </div>
        </main>
    )
}

export default Modal
