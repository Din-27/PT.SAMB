import React from 'react'
import { useNavigate } from 'react-router-dom'
import a1 from '../../assets/1.png'
import b2 from '../../assets/2.png'
import c3 from '../../assets/3.png'
import d4 from '../../assets/4.png'
import e5 from '../../assets/5.png'
import f6 from '../../assets/6.png'
import g7 from '../../assets/7.png'
import h8 from '../../assets/8.png'
import i9 from '../../assets/9.png'
import ModalInfo from '../modal/modal1'
import ModalInfo2 from '../modal/modal2'
import ModalInfo3 from '../modal/modal3'
import ModalInfo4 from '../modal/modal4'
import ModalInfo5 from '../modal/modal5'
import ModalInfo6 from '../modal/modal6'
import ModalInfo7 from '../modal/modal7'
import ModalInfo8 from '../modal/modal8'
import ModalInfo9 from '../modal/modal9'

function Card({onShow, onHide, show, onShow1, onHide1, 
    show1, onShow2, onHide2, show2, onShow3, onHide3, show3, 
    onShow4, onHide4, show4, 
    onShow5, onHide5, show5, 
    onShow6, onHide6, show6, 
    onShow7, onHide7, show7, 
    onShow8, onHide8, show8}) {

        const navigate = useNavigate()

        const handleApply = () => {
            navigate('/formulir')
        }

  return (
    <div class="row justify-content-evenly">
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={a1} class="card-img btn btn-primary img-fluid" onClick={onShow} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={b2} class="card-img btn btn-primary img-fluid" onClick={onShow1} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={c3} class="card-img btn btn-primary img-fluid" onClick={onShow2} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={d4} class="card-img btn btn-primary img-fluid" onClick={onShow3} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={e5} class="card-img btn btn-primary img-fluid" onClick={onShow4} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={f6} class="card-img btn btn-primary img-fluid" onClick={onShow5} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={g7} class="card-img btn btn-primary img-fluid" onClick={onShow6} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={h8} class="card-img btn btn-primary img-fluid" onClick={onShow7} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <div class="col-lg-4 col-md-12 mt-5">
            <div class="card bg-dark text-white" style={{width: "350px"}}>
                <img src={i9} class="card-img btn btn-primary img-fluid" onClick={onShow8} alt="..."/>
            </div>
            <button className='btn  btn-primary mt-2' style={{width: '100%'}} onClick={handleApply} >Apply</button>
        </div>
        <ModalInfo show={show} onHide={onHide}/>
        <ModalInfo2 show={show1} onHide={onHide1}/>
        <ModalInfo3 show={show2} onHide={onHide2}/>
        <ModalInfo4 show={show3} onHide={onHide3}/>
        <ModalInfo5 show={show4} onHide={onHide4}/>
        <ModalInfo6 show={show5} onHide={onHide5}/>
        <ModalInfo7 show={show6} onHide={onHide6}/>
        <ModalInfo8 show={show7} onHide={onHide7}/>
        <ModalInfo9 show={show8} onHide={onHide8}/>
    </div>
  )
}

export default Card