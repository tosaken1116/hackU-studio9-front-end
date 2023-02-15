import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import React, { useState } from 'react'

const directmessage = () => {
    const[modal, setModal] = useState(false)
  
    const openModal = () => {
      setModal(true)
    }
  
    const closeModal = () => {
      setModal(false)
    }
    return (
      <>
      <button onClick={openModal}>誰と話します？</button>
{/*       <Modal isOpen={modal}>
        <button onClick={closeModal}>やっぱやめる</button>
      </Modal> */}
      </>
    );
  }

  export default directmessage;
  
