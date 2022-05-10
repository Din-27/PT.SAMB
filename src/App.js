import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form } from './components';
import { Routes, Route } from 'react-router-dom';

function Contents() {

  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const [modalShow7, setModalShow7] = useState(false);
  const [modalShow8, setModalShow8] = useState(false);


  return (
    <div className='container my-5'>
      <Card 
        show={modalShow}
        onShow={() => setModalShow(true)}
        onHide={() => setModalShow(false)}
        show1={modalShow1}
        onShow1={() => setModalShow1(true)}
        onHide1={() => setModalShow1(false)}
        show2={modalShow2}
        onShow2={() => setModalShow2(true)}
        onHide2={() => setModalShow2(false)}
        show3={modalShow3}
        onShow3={() => setModalShow3(true)}
        onHide3={() => setModalShow3(false)}
        show4={modalShow4}
        onShow4={() => setModalShow4(true)}
        onHide4={() => setModalShow4(false)}
        show5={modalShow5}
        onShow5={() => setModalShow5(true)}
        onHide5={() => setModalShow5(false)}
        show6={modalShow6}
        onShow6={() => setModalShow6(true)}
        onHide6={() => setModalShow6(false)}
        show7={modalShow7}
        onShow7={() => setModalShow7(true)}
        onHide7={() => setModalShow7(false)}
        show8={modalShow8}
        onShow8={() => setModalShow8(true)}
        onHide8={() => setModalShow8(false)}
        />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Contents/>}/>
      <Route exact path='/formulir' element={<Form/>}/>
    </Routes>
  );
}

export default App;
