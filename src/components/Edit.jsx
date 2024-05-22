import React,{useState} from 'react'

const Edit = () => {
    const [inpVal, setInpVal] = useState({
        name: '',
        email: '',
        age: '',
        mobile: '',
        job: '',
        address: '',
        description: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setInpVal({
            ...inpVal,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inpVal)
    }

    return (
        <div className='m-4'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='mb-2 col-lg-6 col-md-6 col-12'>
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='form-control'
                            name="name"
                            value={inpVal.name}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            className='form-control'
                            name="email"
                            value={inpVal.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            placeholder='Enter Age'
                            className='form-control'
                            name="age"
                            value={inpVal.age}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Mobile</label>
                        <input
                            type="number"
                            placeholder='Enter Mobile'
                            className='form-control'
                            name="mobile"
                            value={inpVal.mobile}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Job</label>
                        <input
                            type="text"
                            placeholder='Enter Job'
                            className='form-control'
                            name="job"
                            value={inpVal.job}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-2 col-lg-6 col-md-6 col-12">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            placeholder='Enter Address'
                            className='form-control'
                            name="address"
                            value={inpVal.address}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-2 col-lg-12 col-md-12 col-12">
                        <label className="form-label">Description</label>
                        <textarea
                            className='form-control'
                            rows="4"
                            cols="50"
                            placeholder="Enter Description"
                            name="description"
                            value={inpVal.description}
                            onChange={handleInput}
                        >
                        </textarea>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <button type="submit" className="btn btn-primary text-center">Update</button>
                </div>
            </form>
        </div>
    )
}

export default Edit
