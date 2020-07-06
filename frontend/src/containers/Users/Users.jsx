import React, {useState, useEffect} from 'react'
import axios from '../../my-axios';

import Main from '../../components/main/Main';
import './User.css'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'SignIn Users: Include, List, Change and Exclude'
}

const initialState = {
    user: {name: '', email: ''},
    list: []
}

const Users = props => {
    const [user, setUser] = useState(initialState);

    useEffect(() => {
        axios().then(resp => {
            setUser(prevState => {return ({...prevState, list: resp.data})})
        }).catch(err => console.log(err))
    }, [])

    const clear = () => {
        setUser(prevState => {
            return (
                {
                    ...prevState,
                    user: initialState.user
                }
            );
        });
    }

    const save = () => {
        const userAux = user.user;
        const method  = userAux.id ? 'put' : 'post';
        if (userAux.id) {
            axios[method](`/${userAux.id}`, userAux)
            .then(resp => {
                const list = getUpdatedList(resp.data)
                setUser(prevState => {return ({...initialState, list: list})})
            }).catch(err => {
                console.log(err)
            })
        } else {
            axios[method](``, userAux)
            .then(resp => {
                const list = getUpdatedList(resp.data)
                setUser(prevState => {return ({...initialState, list: list})})
            }).catch(err => {
                console.log(err)
            })
        }
    }

    const getUpdatedList = (data, add = true) => {
        const list = user.list.filter(u => u.id !== data.id)
        if (add) {list.unshift(data)};
        return list;
    }

    const updateField = (event) => {
        const userAux = {...user.user};
        userAux[event.target.name] = event.target.value;
        setUser(prevState => {return({...prevState, user:userAux});});
    }

    const renderForm = () => {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                type = "text" 
                                className = "form-control" 
                                name = "name" 
                                value = {user.user.name}
                                onChange = {e => updateField(e)}
                                placeholder = "Write your name"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input 
                                type = "text" 
                                className = "form-control" 
                                name = "email" 
                                value = {user.user.email}
                                onChange = {e => updateField(e)}
                                placeholder = "Write your E-mail"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick = {e => save(e)}>
                            Save
                        </button>
                        <button className="btn btn-secondary ml-2" onClick = {e => clear(e)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const load = userAux => {
        setUser(prevState => {return ({...prevState, user: userAux})});
    }

    const remove = userAux => {
        axios.delete(`/${userAux.id}`)
            .then(resp => {
                const list = getUpdatedList(userAux, false)
                setUser(prevState => {return ({...prevState, list: list})})
            }).catch(err => console.log(err))
    }

    const renderRows = () => {
        return user.list.map(us => {
            return (
                <tr key = {us.id}>
                    <td>{us.name}</td>
                    <td>{us.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick = {() => load(us)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick = {() => remove(us)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        })
    }

    const renderTable = () => {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        );
    }

    
    
    return (
        <Main {...headerProps}>
            {renderForm()}
            {renderTable()}
        </Main>
    );
}

export default Users;