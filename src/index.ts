import type { EventAttributes, NodeCallback } from 'ics'
import { createEvents } from 'ics'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const events: EventAttributes[] = [
  {
    productId: 'mgtf',
    start: [2026, 5, 1],
    end: [2026, 5, 2],
    startInputType: 'local',
    startOutputType: 'local',
    endInputType: 'local',
    endOutputType: 'local',
    title: 'OMNI Community Night',
    location: 'OMNI Brewing Company',
    status: 'CONFIRMED',
    url: 'https://maplegrovetrack.github.io/events#monday-march-2-2026'
  }
]

const callback: NodeCallback = (error, value) => {
  if (error) {
    console.log(error)
  }
  rmSync('dist', { recursive: true, force: true })
  mkdirSync('dist')
  writeFileSync('dist/event.ics', value, 'utf-8')
}

createEvents(events, callback)
