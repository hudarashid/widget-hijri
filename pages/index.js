import styles from '@/styles/Home.module.css'
import uq from '@umalqura/core';
import { useEffect, useState } from 'react';

// today's date in Gregorian calendar
const today = new Date();

const today_day = today.toLocaleDateString("en-GB", { weekday: 'long' });
console.log(today_day);


const today_gregorian = today.toLocaleDateString("en-GB", { year: 'numeric', month: 'long', day: 'numeric' });
console.log(today_gregorian);

// today's date in Hijri calendar
const today_hijri = uq();
const hijridate = today_hijri.format('longDate')
console.log(hijridate);


export default function Home() {

  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString("en-GB", { hour: 'numeric', minute: 'numeric' }));

  useEffect(() => {
    const updateTime = () => {
      setTimeNow(new Date().toLocaleTimeString("en-GB", { hour: 'numeric', minute: 'numeric' }));
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.description}>{today_day} </h1>
        <h2 className={styles.description}>{timeNow}</h2>
        <h2 className={styles.description}>{today_gregorian}</h2>
        <h2 className={styles.description}>{hijridate}</h2>


      </div>
    </main >
  )
}
