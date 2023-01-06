import EventPage from '../../../src/components/events/EventPage'

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json')
  const paths = allEvents.map(path => {
    return {
      params: {
        city: path.city,
        id: path.id
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json')

  const id = context.params.id

  const data = allEvents.find(ev => id === ev.id)
  return {
    props: { data }
  }
}

const SingleEventPage = ({ data }) => <EventPage data={data} />


export default SingleEventPage