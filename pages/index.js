import HomePage from '../src/components/home/HomePage'


export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories
    },
  }
}

export default function Home({ data }) {
  return (
    <>
      <HomePage data={data} />
    </>
  )
}

