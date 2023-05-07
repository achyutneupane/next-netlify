import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e3ce0d193amsh132d88f8f7ddaa8p1d2dcajsn2a7b2da30300',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;

    console.log(data)
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movie and Series</h1>
                    <div className={styles.card_section}>
                    {main_data.map((curElement) => {
                        return <MovieCard key={curElement.id} {...curElement} />
                    })}
                    </div>
                </div>
            </section>


        </>
    )
};

export default Movie;