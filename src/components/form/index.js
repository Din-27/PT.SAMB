import axios from 'axios'
import React, { useState } from 'react'
import Man from '../../assets/man.png'
import { useNavigate } from 'react-router-dom'


function Form(props, {onShow, onHide}) {
    
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);
    const handleCancel = () => {
        navigate('/')
    }

    const [form, setForm] = useState({
        name: "",
        phone: "",
        whatsapp: "",
        position: ""
      })

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const config = {
            headers: {
            "Content-type": "multipart/form-data",
            },
        };
        const formData = new FormData();
        formData.set("name", form.name);
        formData.set("phone", form.phone);
        formData.set("whatsapp", form.whatsapp);
        formData.set("position", form.position);
        if(form.name === ''){
            alert('nama harus di isi')
        }else if(form.phone === ''){
            alert('phone harus di isi')
        }else if(form.whatsapp === ''){
            alert('whatsapp harus di isi')
        }else if(form.position === ''){
            alert('position harus di isi')
        }else{
            const response = await axios.post("https://test-samb1.herokuapp.com/api/add-formulir", formData, config);
            console.log(form);
            console.log(response);
            setModal(true)
        }
    };

  return (
    <div className='container d-flex my-5' style={{width: '300px', marginTop: '20px'}}>
        {modal ? 
            <div className='justify-content-center col'>
                <img src={Man} className='img-fluid' style={{width: '250px', height: '250px'}} alt="" />
                <h2>Formulir Data Diri</h2>
                <ol class="list-group list-group-numbered me-5 mt-4" style={{width: '300px', marginLeft: '-20px'}}>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Name</div>
                    {form.name}
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Phone</div>
                    {form.phone}
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Whatsapp</div>
                    {form.whatsapp}
                    </div>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Position</div>
                    {form.position}
                    </div>
                </li>
            </ol>
            <div>
                <button className='btn btn-primary mt-3' style={{width: '93%', marginLeft: '-20px'}} onClick={handleCancel}>Back To Home</button>
            </div>
            </div>
         : <form className="col" method="post" onSubmit={handleSubmit}>
             <h2>Formulir Data Diri</h2>
            <div className='mt-5'>
                <label htmlFor="">
                    Name
                </label>
                <input name='name' onChange={handleChange} class="form-control" type="text" placeholder="Name" aria-label="default input example"></input>
            </div>
            <div className='mt-3'>
                <label htmlFor="">
                    Phone
                </label>
                <input name='phone' onChange={handleChange} class="form-control" type="number" placeholder="Phone" aria-label="default input example"></input>
            </div>
            <div className='mt-3'>
                <label htmlFor="">
                    WhatsApp
                </label>
                <input name='whatsapp' onChange={handleChange} class="form-control" type="number" placeholder="WhatsApp" aria-label="default input example"></input>
            </div>
            <div className='mt-3'>
                <label htmlFor="">
                    Position
                </label>
                <input name='position' onChange={handleChange} class="form-control" type="text" placeholder="Position" aria-label="default input example"></input>
            </div>
            <div className='mt-3 d-flex'>
                <button className='btn btn-primary' type='submit' >Submmit</button>
                <button className='btn btn-primary ms-3' onClick={handleCancel}>Cancel</button>
            </div>
        </form>}
    </div>
  )
}

export default Form