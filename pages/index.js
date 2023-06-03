import styles from '../styles/Home.module.css'
import axios from "axios";  // used to run the API's
import { useEffect, useState } from "react";
import * as gariSdk from "gari";


export default function Home() {
  const [userId, setUserid]= useState(null);
  const [wallet, setWallet] = useState(null);

  const gariClientId = "d8817deb-dceb-40a4-a890-21f0286c8fba";
  let token = ""

   useEffect(() => {
     
    }, []);

  return (
    <div className={styles.container}>
      <input
        label="UserId"
        variant="outlined"
        name="userId"
        margin="dense"
        required
        fullWidth
        type="number"
        onChange={(e) => setUserid(e.target.value)}
      />
      <div>
      </div>
    </div>
  );
}