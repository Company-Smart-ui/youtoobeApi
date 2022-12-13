import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {LINKS} from "../API";
import Link from "next/link";
import {Header} from "../header";
import {useEffect} from "react";





const search ="https://www.googleapis.com/youtube/v3/search/" +
    "?type=video&maxResults=25" +
    "&eventType=upcoming" +
    "&part=snippet" +
    "&key=AIzaSyAvCt91PvL80P_y8FxgVHewi6-FycxFrcQ" +
    "&channelId=UCSKhDO79MNcX4pIIRFD0UVg"

export default function Home({data ,request}) {
 const link1="PLzxP01GQMpjfmHzXVubKSlviqL-2AL6lV"
    const link2="PLzxP01GQMpjdN1HvcdgFW00fLMx8XCN8F"
useEffect(()=>{
    fetch(search).then(d=>d.json()).then((e)=>{
        console.log(e)
    })
    console.log(search)
},[])

    console.log(data)

  return (
    <div className={styles.container}>
            <h1> YouTube fetcher </h1>

        <Header/>
        <div className={styles.grid}>
            {data.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium } = thumbnails;
                return (
                    <div key={id} className={styles.card}>
                        {/*<a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>*/}
                        {/*    <p>*/}
                        {/*        <img width={medium.width} height={medium.height} src={medium.url} alt="" />*/}
                        {/*    </p>*/}
                        {/*    <h3>{ title }</h3>*/}
                        {/*</a>*/}
                        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+resourceId.videoId}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
    const id =LINKS.play1;
    // const request = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&amp;maxResults=50&amp;playlistId=${id};key=${process.env.YOUTUBE_API_KEY}`
    const request = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${id}&key=${process.env.YOUTUBE_API_KEY}`
    const res = await fetch(request)
    const data = await res.json();
    return {
        props: {
            data,
            request
        }
    }
}