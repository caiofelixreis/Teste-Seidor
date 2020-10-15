import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import style from './style.module.scss'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'
import RegularButton from '../../components/RegularButton'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import { Context } from '../../context'

const Home = () => {

    const history = useHistory()

    const { modal, setModal, selectedFunc, setSelectedFunc, data } = useContext(Context)


    const handleDescontoIRFR = (value) => {
        let aliquota, portion
        if(value.salario <= 1903.98){
            aliquota = 0
            portion = 0
        }else if(value.salario <= 2826.65){
            aliquota = 1.075
            portion = 142.80
        }else if(value.salario <= 3751.05){
            aliquota = 1.015
            portion = 354.80
        }else if(value.salario <= 4664.68){
            aliquota = 1.0225
            portion = 636.13
        }else {
            aliquota = 1.0275
            portion = 869.36
        }


        const salarioBaseIr = value.salario - value.desconto - (164.56 * value.dependentes)
        const total = salarioBaseIr * aliquota - portion
        return total.toFixed(2)
    }

    const handleFuncClick = (id) => {

        console.log(id, selectedFunc[0])
        if (id === selectedFunc[0]) {
            return setSelectedFunc([])
        }
        setSelectedFunc([id])

    }

    const handleEditClick = () => {
        history.push(`/create/${selectedFunc}`)
    }

    const handleDeleteClick = () => {
        setModal(!modal)
    }



    return (
        <Layout>

            {
                modal && <Modal title="Deseja realmente excluir o funcionário?" />
            }

            <main className={style.container}>

                <h1>Tabelas e cálculos do IRRF</h1>

                <div className={style.tableContainer}>

                    <div className={style.tableActions}>
                        <h2>Seus funcionários</h2>
                        <div className={style.actions}>
                            <FiEdit
                                className={selectedFunc.length ? style.able : style.disabled}
                                onClick={selectedFunc.length && handleEditClick}
                            />
                            <FiTrash2
                                className={selectedFunc.length ? style.able : style.disabled}
                                onClick={selectedFunc.length && handleDeleteClick}
                            />
                            <RegularButton icon="plus" title="Novo funcionário" link="/create" />
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>CPF</td>
                                <td>Sálario</td>
                                <td>Desconto</td>
                                <td>Dependentes</td>
                                <td>Desconto IRPF</td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((value, index) => (
                                    <tr key={value.id}
                                        onClick={() => handleFuncClick(value.id)}
                                        className={
                                            value.id === selectedFunc[0] ? style.clicked : style.regular
                                        }
                                    >
                                        <td>{value.nome}</td>
                                        <td>{value.cpf}</td>
                                        <td>{value.salario}</td>
                                        <td>{value.desconto}</td>
                                        <td>{value.dependentes}</td>
                                        <td>
                                            {
                                                handleDescontoIRFR(value)
                                            }
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </main>

        </Layout >
    )
}

export default Home
