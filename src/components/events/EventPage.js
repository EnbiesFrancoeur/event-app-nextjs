import Image from 'next/image'
import { useRef, useState } from 'react'

export default function EventPage({ data }) {
  const inputEmail = useRef()
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = data.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!emailValue.match(validRegex)) {
      setMessage('Please use a correct email address')
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      })

      if (!response.ok) throw new Error(`Error: ${response.status}`)

      const data = await response.json()
      setMessage(data.message)
      inputEmail.current.value = ''
    } catch (e) {
      console.log('ERROR', e)
    }
  }

  return (
    <div className='event-page'>
      <h1>{data.title}</h1>
      <Image
        src={data.image}
        key={data.id}
        alt={data.title}
        width="1000"
        height="500" />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className='event-registration'>
        <label htmlFor='email'>Register now !</label>
        <input
          ref={inputEmail}
          id='email'
          placeholder='Register with your email here' />
        <button type='submit'>
          Register
        </button>
      </form>
      <p className='message'>{message}</p>
    </div>
  )
}
