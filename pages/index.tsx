import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, TextField } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div>
      <h1>login page</h1>
      <TextField id="outlined-basic" label="username" variant="outlined" style={{marginBottom: "30px"}}/>
      <br />
      <TextField id="outlined-basic" label="password" variant="outlined" /> 
      <Button href="home">login</Button>
    </div>

  )
}

export default Home
