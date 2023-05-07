import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import styles from '@/app/styles/common.module.css';

const page = async({params}) => {
    const id = params.id

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e3ce0d193amsh132d88f8f7ddaa8p1d2dcajsn2a7b2da30300',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url,options);
    const data = await res.json();
    const main_data = data[0].details;

  return (
    <>
    <div className={styles.container}>
        <h2 className={styles.movie_title}> Netlify \ <span>{main_data.type}</span></h2>
        <div className={styles.card_image}>
            <Image src={main_data.backgroundImage.url} alt='name' width={400} height={200}/>
        </div>
        <div className={styles.card_data}>
            <h2>{main_data.title}</h2>
            <p>{main_data.synopsis}</p>
            
        </div>
    </div>
    </>
  )
}

export default page