import React, { useState, useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import style from './style.module.scss'
import RegularButton from '../../components/RegularButton'
import api from '../../services/api'
import { Context } from '../../context'


const Create = () => {

    const history = useHistory()

    //por estarmos usando a mesma pagina para a criacao e edição, sempre q existir o id a pagina sera destinada para edicao
    const { id } = useParams()

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        salario: '',
        desconto: '',
        dependentes: ''
    })
    const [completed, setCompleted] = useState(false)


    const { data, setData, setSelectedFunc } = useContext(Context)

    //essa funcao recebra os valores dos inputs sempre que algo foi digitado
    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmitForm = async () => {

        if (id) {
            await api.put(`/funcionarios/${id}`, formData)

            const newData = await api.get('/funcionarios')
            setData(newData.data)

            history.push('/')
            return

        }

        await api.post('/funcionarios', formData)


        setSelectedFunc([])
        const newData = await api.get('/funcionarios')
        setData(newData.data)
        history.push('/')

    }

    useEffect(() => {
        //codigo que verifica se todos os campos foram preenchidos
        setCompleted(Object.keys(formData).every(key => Boolean(formData[key])))

    }, [formData])

    useEffect(() => {
        if (id) {
            const func = data.find(element => element.id === Number(id))
            if (func) {
                setFormData(func)
            }
        }
    }, [])


    return (
        <Layout>

            <main className={style.container}>

                {
                    id ? <h1>Edição de um funcionário</h1> : <h1>Criação de um novo funcionário</h1>
                }

                <form className={style.formCreate}>
                    <div className={style.formControl}>
                        <label>Nome</label>
                        <input type="text" name="nome" value={formData.nome} placeholder="Nome do funcionário" onChange={handleInputChange} required />
                    </div>
                    <div className={style.formControl}>
                        <label>CPF</label>
                        <input type="text" name="cpf" value={formData.cpf} placeholder="CPF do funcionário" onChange={handleInputChange} required />
                    </div>
                    <div className={style.formControl}>
                        <label>Salário bruto</label>
                        <input type="number" name="salario" value={formData.salario} placeholder="Insira o salário bruto" onChange={handleInputChange} required />
                    </div>
                    <div className={style.formControl}>
                        <label>Desconto da previdência</label>
                        <input type="number" name="desconto" value={formData.desconto} placeholder="Insira a taxa de desconto da previdência" onChange={handleInputChange} required />
                    </div>
                    <div className={style.formControl}>
                        <label>Número de dependentes</label>
                        <input type="number" name="dependentes" value={formData.dependentes} placeholder="Insira a quantidade de dependentes" onChange={handleInputChange} required />
                    </div>


                    {
                        completed && <RegularButton icon={id ? 'edit' : 'check'} title={id ? 'Editar' : 'Criar'} onClick={handleSubmitForm} />

                    }

                </form>

            </main>

        </Layout>
    )
}

export default Create
