// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path'
import fs from 'fs'

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)
  return data
}


export default function handler(req, res) {


  //access our data
  const filePath = buildPath()

  //extract our data
  const { events_categories, allEvents } = extractData(filePath)

  // res 404 if theres is no AllEvents
  if (!allEvents) {
    return res.status(404).json({ message: 'Event data not found' })
  }

  if (req.method === 'POST') {
    const { email, eventId } = req.body

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' })
      return
    }

    //get AllEvents then loop through them
    const newAllEvents = allEvents.map(ev => {
      // identify the eventID
      if (ev.id === eventId) {
        // check if the email has already been registered
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({ message: 'This email has already been registered' })
          return ev
        }
        // add the email into emails_registered
        return {
          ...ev, emails_registered: [...ev.emails_registered, email]
        }
      }
      return ev
    })
    // update the emails_registered data
    fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }))

    res.status(200).json({ message: `${email} has been registered sucessfully for event ${eventId}` })
  }
}
