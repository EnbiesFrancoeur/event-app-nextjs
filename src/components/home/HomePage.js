import Image from 'next/image'
import Link from 'next/link'

export default function HomePage({ data }) {
  return (
    <>
      <Link href={`/events/`}><h1>IT'S TIME TO GO TO AN EVENT</h1></Link>
      {data.map(ev =>
        <Link className='main-card' key={ev.id} href={`/events/${ev.id}`}>
          <div className='image'>
            <Image
              src={ev.image}
              alt={ev.title}
              width="200"
              height="200"
            />
          </div>
          <div className='content'>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
            <br />
            <hr width={500} style={{ color: "#6d1313 " }} />
          </div>
        </Link>
      )}

    </>
  )
}
