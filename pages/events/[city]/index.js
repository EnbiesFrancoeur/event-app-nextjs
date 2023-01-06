import CityEvent from "../../../src/components/events/CityEvent"

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json')

  const id = context?.params.city

  const data = allEvents.filter(ev => ev.city === id)

  return {
    props: { data, pageName: id }
  }
}

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json")

  const paths = events_categories.map(ev => {
    return {
      params: {
        city: ev.id.toString()
      }
    }
  })

  return {
    paths, fallback: false, // can also be true or 'blocking'
  }
}


const EventPerCityPage = ({ data, pageName }) => <CityEvent data={data} pageName={pageName} />


export default EventPerCityPage

