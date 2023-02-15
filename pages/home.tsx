import { Button } from '@mui/material'
import React, { useState } from 'react'
import Modal from 'react-modal'

export default function home() {
  return (
    <div>
      <h1>username</h1>
      <h1 style={{textAlign: "center"}}>
        業務一覧
        <p>業務1</p>
      </h1>
      <Button href='./directmessage'>DM</Button>
    </div>
  )
}