import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Profile from '../profile.png'

const Detail = () => {
    return (
        <div>
            <h3 className='m-4'>Welcome Aman Deep</h3>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='card-heading'>
                        <img src={Profile} style={{ width: 50 }} />
                        <div className='icon-btn'>
                            <button className='btn btn-primary'><EditIcon /></button>
                            <button className='btn btn-danger'><DeleteIcon /></button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12 my-4'>
                            <p><strong>Name</strong>:Aman Deep</p>
                            <p><strong>Age</strong>: 28</p>
                            <p><strong><EmailIcon />Email</strong>: amandeep.rd@gmail.com</p>
                            <p><strong><WorkIcon />Occupation</strong>: Software Developer</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 my-4'>
                            <p><strong><PhoneAndroidIcon />Mobile</strong>:7488186921</p>
                            <p><strong><LocationOnIcon />Location</strong>: Delhi</p>
                            <p><strong>Description</strong>: Hi everyone</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Detail
