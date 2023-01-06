import EventsPage from '../../src/components/events/EventsPage'


export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')

  return {
    props: {
      data: events_categories
    }
  }
}

function Events({ data }) {

  return <EventsPage data={data} />
}

export default Events
