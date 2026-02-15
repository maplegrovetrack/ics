import type { EventAttributes, NodeCallback } from 'ics'
import { createEvents } from 'ics'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'

const events: EventAttributes[] = [
  {
    start: [2026, 5, 1],
    duration: {
      hours: 2
    },
    title: 'Test event',
    location: 'Somewhere',
    url: 'https://maplegrovetrack.github.io/'
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
