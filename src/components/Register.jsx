import React from 'react'

const Register = () => {
    return (
        <div className='my-4 mx-4'>
            <form>
                <div className='row'>
                    <div className='mb-2 col-lg-6 col-md-6 col-12'>
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            placeholder='Enter Age'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Mobile</label>
                        <input
                            type="number"
                            placeholder='Enter Mobile'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Job</label>
                        <input
                            type="text"
                            placeholder='Enter Job'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            placeholder='Enter Address'
                            className='form-control'
                        />
                    </div>
                    <div className="mb-2 col-lg-12 col-md-12 col-12">
                        <label className="form-label">Description</label>
                        <textarea className='form-control' rows="4" cols="50" placeholder="Enter Description"></textarea>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Register
