import Image from "next/image"
import Link from "next/link"

export default function CityEvent({ data, pageName }) {
  return (
    <div className="city_events">
      <h1>Event in {pageName.toUpperCase()}</h1>
      <div className="content">
        {data.map(ev =>
          <div className="card">
            <h2>  {ev.title}</h2>
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
              <Image src={ev.image}
                alt={ev.title}
                width="300"
                height="300" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
