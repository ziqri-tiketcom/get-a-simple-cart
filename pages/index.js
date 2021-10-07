import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [cartId, setCartId] = useState('');

  return (
    <div className={styles.container}>
      <input type="text" value={cartId} onChange={(e) => setCartId(e?.target?.value)} placeholder="Cart Id" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )

  function handleSubmit() {
    const URL = `https://gatotkaca.tiket.com/ms-gateway/tix-flight-cart/v4/cart/${cartId}`
    const response = fetch((URL), {
      method: 'GET'
    }).then(res => res.json())

    console.log('ALAL === ', { response });
  }
}
