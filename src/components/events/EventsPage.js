import Image from "next/image";
import Link from "next/link";

export default function EventsPage({ data }) {
  return (
    <>
      <h1>IT'S TIME TO GO TO AN EVENT</h1>
      <div className='events-page' >
        {data.map(ev =>
          <div className='event-card' key={ev.id}>
            <Link href={`events/${ev.id}`} >
              <Image
                src={ev.image}

                alt={ev.title}
                width="300"
                height="300" />
              <h2>{ev.title}</h2>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
