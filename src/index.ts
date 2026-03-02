import type { DateTime, EventAttributes, NodeCallback } from 'ics'
import { createEvents } from 'ics'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'

type MergeEvent = {
  start: DateTime
  end: DateTime
  title: EventAttributes['title']
  description?: EventAttributes['description']
  location?: EventAttributes['location']
}
const baseEvent = (_event: MergeEvent): EventAttributes => {
  return {
    productId: 'mgtf',
    start: _event.start,
    end: _event.end,
    startInputType: 'local',
    startOutputType: 'local',
    endInputType: 'local',
    endOutputType: 'local',
    title: _event.title,
    description: _event.description,
    location: _event.location,
    status: 'CONFIRMED',
    busyStatus: 'FREE',
    transp: 'TRANSPARENT',
    url: _event.description
  }
}

const captainPractice = (start: DateTime, end: DateTime): EventAttributes => {
  return baseEvent({
    start,
    end,
    title: 'MGTF: Captains Practice',
    description: 'https://www.instagram.com/mgtrackandfield',
    location: 'Maple Grove Senior High'
  })
}
const captainsPractice: EventAttributes[] = [
  captainPractice([2026, 3, 2], [2026, 3, 3]),
  captainPractice([2026, 3, 3], [2026, 3, 4]),
  captainPractice([2026, 3, 4], [2026, 3, 5]),
  captainPractice([2026, 3, 5], [2026, 3, 6])
]

const tryout = (start: DateTime, end: DateTime): EventAttributes => {
  return baseEvent({
    start,
    end,
    title: 'MGTF: Tryouts',
    location: 'Maple Grove Senior High'
  })
}
const tryoutOuts: EventAttributes[] = [
  tryout([2026, 3, 9], [2026, 3, 10]),
  tryout([2026, 3, 10], [2026, 3, 11]),
  tryout([2026, 3, 11], [2026, 3, 12]),
  tryout([2026, 3, 12], [2026, 3, 13]),
  tryout([2026, 3, 13], [2026, 3, 14])
]

const springBreakPractice = (start: DateTime, end: DateTime): EventAttributes => {
  return baseEvent({
    start,
    end,
    title: 'MGTF: Spring Break Practice',
    location: 'Maple Grove Senior High'
  })
}
const springBreakPractices: EventAttributes[] = [
  springBreakPractice([2026, 3, 23], [2026, 3, 24]),
  springBreakPractice([2026, 3, 24], [2026, 3, 25]),
  springBreakPractice([2026, 3, 25], [2026, 3, 26]),
  springBreakPractice([2026, 3, 26], [2026, 3, 27]),
  springBreakPractice([2026, 3, 27], [2026, 3, 28])
]

const events: EventAttributes[] = [
  ...captainsPractice,
  ...tryoutOuts,
  ...springBreakPractices,
  {
    ...baseEvent({
      start: [2026, 3, 9],
      end: [2026, 3, 10],
      title: 'MGTF: OMNI Community Night',
      description: 'https://maplegrovetrack.github.io/events#monday-march-9-2026',
      location: 'OMNI Brewing Company'
    })
  },
  {
    ...baseEvent({
      start: [2026, 3, 16],
      end: [2026, 3, 17],
      title: 'MGTF: Apparel Order #2'
    })
  },
  {
    ...baseEvent({
      start: [2026, 3, 17],
      end: [2026, 3, 18],
      title: 'MGTF: Mandatory Season Kickoff & Social',
      location: 'Maple Grove Senior High',
      description: 'https://maplegrovetrack.github.io/events#monday-march-17-2026'
    })
  },
  {
    ...baseEvent({
      start: [2026, 3, 30],
      end: [2026, 3, 30],
      title: 'MGTF: Fundraiser #1',
      location: 'Culvers - Maple Grove',
      description: 'https://maplegrovetrack.github.io/events#monday-march-30-2026'
    })
  }
]

const callback: NodeCallback = (error, value) => {
  if (error) {
    console.log(error)
  }
  rmSync('dist', { recursive: true, force: true })
  mkdirSync('dist')
  writeFileSync('dist/eventsss.ics', value, 'utf-8')
}

createEvents(events, callback)
