import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

const About = () => {
  const [bio, setBio] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(res => {
        setBio(res.data.bio)
        setPhotoUrl(res.data.photo)
      }).catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="About">
      <img src={photoUrl} alt="Xiaomin Liu" />
      <p>{bio}</p>
    </div>
  )
}

export default About

