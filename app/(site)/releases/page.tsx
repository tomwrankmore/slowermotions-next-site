import { Spotify } from "react-spotify-embed"

const releases = () => {
  return (
    <div>
      <h1 className='mb-8'>Release archive, to be populated soon, here is a Spotify playlist of my stuff for now.</h1>
      {/* <iframe className="rounded" src="https://open.spotify.com/embed/artist/7xqnFwk6ZueWJ1IA8gsEWM?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
      <Spotify link="https://open.spotify.com/artist/7xqnFwk6ZueWJ1IA8gsEWM?si=mM0-nGxST065udFfBTZbMA" width='100%'/>
    </div>
  )
}

export default releases