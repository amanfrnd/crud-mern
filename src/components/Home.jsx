import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add-btn mb-2'>
                    <NavLink to='/register'><button className='btn btn-primary'>ADD DATA</button></NavLink>
                </div>
                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto@gmail.com</td>
                            <td>Web Developer</td>
                            <td>7488186921</td>
                            <td className='d-flex justify-content-evenly'>
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen"></i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton@gmail.com</td>
                            <td>Software Developer</td>
                            <td>9654500961</td>
                            <td className='d-flex justify-content-evenly'>
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen"></i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
