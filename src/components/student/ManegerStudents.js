import React, { useState, useEffect } from 'react';
import StudentService from '../../service/CRUDService.js';
import '../student/student.css';
import imgFundo from '../../img/img-fundo.png';

function ManegerStudent() {
    const [students, setStudents] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearchChange = (event) => {
        setSearchId(event.target.value);
        if (event.target.value.trim() === '') {getData();}
    };

    const getById = async () => {
        try {
            const student = await StudentService.getById(searchId);
            setStudents(student ? [student] : []); 
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Id Invalido!');
        }
    };
    
    const getData = async () => {
        try {
            StudentService.route('student');
            const data = await StudentService.get();
            setStudents(data);
        } catch (error) {
            setErrorMessage('Não Foi Possivel Obter Alunos');
        }
    };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {errorMessage && (
                <div class="alert alert-dismissible alert-primary">
                    <button type="button" className="btn-close" onClick={() => setErrorMessage('')}></button>
                    <strong>Atenção: </strong> {errorMessage}
                </div>
            )}

            <div className="card border-dark mb-3 card-position default-font">
                <div className="card-body">
                    <h4 className="card-title">Central De Alunos</h4>

                    <div className="input-group mb-3" style={{ marginTop: '20px' }}>
                        <input type="text" className="form-control" placeholder="Insira o ID do aluno" value={searchId} onChange={handleSearchChange} />
                        <button className="btn btn-dark" type="button" onClick={getById}>🔍</button>
                    </div>

                    <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                        <table className="table" style={{ width: '605px' }}>
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Número</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="table-hover">
                                        <th scope="row">{student.id}</th>
                                        <td>{student.nameStudent}</td>
                                        <td>{student.email}</td>
                                        <td>{student.number}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <img
                src={imgFundo}
                alt="imagem de fundo"
                className="img-student"
            />
        </div>
    );
}

export default ManegerStudent;
