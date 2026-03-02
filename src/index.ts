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
    title: `MGTF: ${_event.title}`,
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
    title: 'Captains Practice',
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
    title: 'Tryouts',
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
    title: 'Spring Break Practice',
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

const meets: EventAttributes[] = [
  baseEvent({
    start: [2026, 4, 2],
    end: [2026, 4, 3],
    title: 'Lake Conference Duel Meet',
    location: 'Maple Grove Senior High',
    description: 'https://maplegrovetrack.github.io/meets#thursday-april-2-2026'
  }),
  baseEvent({
    start: [2026, 4, 9],
    end: [2026, 4, 10],
    title: 'Lake Conference Duel Meet',
    location: 'Maple Grove Senior High',
    description: 'https://maplegrovetrack.github.io/meets#thursday-april-9-2026'
  }),
  baseEvent({
    start: [2026, 4, 10],
    end: [2026, 4, 11],
    title: 'Lake Conference Relays',
    location: 'Hopkins Senior School',
    description: 'https://maplegrovetrack.github.io/meets#firday-april-10-2026'
  }),
  baseEvent({
    start: [2026, 4, 14],
    end: [2026, 4, 15],
    title: 'Lake Conference Duel Meet',
    location: 'Eden Prairie Senior High',
    description: 'https://maplegrovetrack.github.io/meets#tuesday-april-14-2026'
  }),
  baseEvent({
    start: [2026, 4, 21],
    end: [2026, 4, 22],
    title: 'Minnetonka Invite',
    location: 'Minntonka Senior High',
    description: 'https://maplegrovetrack.github.io/meets#tuesday-april-21-2026'
  }),
  baseEvent({
    start: [2026, 4, 23],
    end: [2026, 4, 24],
    title: 'Lake Conference JV Duel Meet',
    location: 'St. Michael-Albertville Senior High',
    description: 'https://maplegrovetrack.github.io/meets#thursday-april-23-2026'
  }),
  baseEvent({
    start: [2026, 4, 24],
    end: [2026, 4, 25],
    title: 'Hamline Elite Meet',
    location: 'Hamline University',
    description: 'https://maplegrovetrack.github.io/meets#friday-april-24-2026'
  }),
  baseEvent({
    start: [2026, 4, 28],
    end: [2026, 4, 29],
    title: 'Crimson Invite',
    location: 'Maple Grove Senior High',
    description: 'https://maplegrovetrack.github.io/meets#thursday-april-30-2026'
  }),
  baseEvent({
    start: [2026, 5, 5],
    end: [2026, 5, 6],
    title: 'True Team Sections',
    location: 'Rogers Senior High',
    description: 'https://maplegrovetrack.github.io/meets#tuesday-may-5-2026'
  }),
  baseEvent({
    start: [2026, 5, 7],
    end: [2026, 5, 8],
    title: 'Lake Conference JV Triangle Meet',
    location: 'Maple Grove Senior High',
    description: 'https://maplegrovetrack.github.io/meets#thursday-may-7-2026'
  }),
  baseEvent({
    start: [2026, 5, 12],
    end: [2026, 5, 13],
    title: 'District 279 Championships',
    location: 'Maple Grove Senior High',
    description: 'https://maplegrovetrack.github.io/meets#tueday-may-12-2026'
  }),
  baseEvent({
    start: [2026, 5, 15],
    end: [2026, 5, 16],
    title: 'True Team State',
    location: 'Eden Prairie Senior High',
    description: 'https://maplegrovetrack.github.io/meets#friday-may-15-2026'
  }),
  baseEvent({
    start: [2026, 5, 19],
    end: [2026, 5, 20],
    title: 'Lake Conference Championship',
    location: 'Buffalo Senior High',
    description: 'https://maplegrovetrack.github.io/meets#tuesday-may-19-2026'
  }),
  baseEvent({
    start: [2026, 5, 27],
    end: [2026, 5, 28],
    title: 'Section 5AAA Premlims',
    location: 'Forest Lake Senior High',
    description: 'https://maplegrovetrack.github.io/meets#wednesday-may-27-2026'
  }),
  baseEvent({
    start: [2026, 5, 29],
    end: [2026, 5, 30],
    title: 'Section 5AAA Finals',
    location: 'Forest Lake Senior High',
    description: 'https://maplegrovetrack.github.io/meets#firday-may-29-2026'
  }),
  baseEvent({
    start: [2026, 6, 4],
    end: [2026, 6, 5],
    title: 'Class AAA State Premlims',
    location: 'St. Michael-Albertville Senior High',
    description: 'https://maplegrovetrack.github.io/meets#thursday-june-4-2026'
  }),
  baseEvent({
    start: [2026, 6, 6],
    end: [2026, 6, 7],
    title: 'Class AAA State Finals',
    location: 'St. Michael-Albertville Senior High',
    description: 'https://maplegrovetrack.github.io/meets#saturday-june-6-2026'
  })
]

const fundraisers: EventAttributes[] = [
  baseEvent({
    start: [2026, 3, 30],
    end: [2026, 3, 30],
    title: 'Fundraiser #1',
    location: 'Culvers - Maple Grove',
    description: 'https://maplegrovetrack.github.io/events#monday-march-30-2026'
  }),
  baseEvent({
    start: [2026, 4, 8],
    end: [2026, 4, 9],
    title: 'Fundraiser #2',
    location: 'Noodles & Company - Maple Grove',
    description: 'https://maplegrovetrack.github.io/events#wednesday-april-8-2026'
  }),
  baseEvent({
    start: [2026, 4, 15],
    end: [2026, 4, 16],
    title: 'Fundraiser #3',
    location: 'Cafe Zupas - Maple Grove (Pending)',
    description: 'https://maplegrovetrack.github.io/events#wednesday-april-15-2026'
  }),
  baseEvent({
    start: [2026, 4, 28],
    end: [2026, 4, 28],
    title: 'Fundraiser #4',
    location: 'TBD - Maple Grove',
    description: 'https://maplegrovetrack.github.io/events#tuesday-april-28-2026'
  }),
  baseEvent({
    start: [2026, 5, 4],
    end: [2026, 5, 5],
    title: 'Fundraiser #5',
    location: 'Raising Cane\'s - Maple Grove (Pending)',
    description: 'https://maplegrovetrack.github.io/events#monday-may-4-2026'
  }),
  baseEvent({
    start: [2026, 5, 12],
    end: [2026, 5, 13],
    title: 'Fundraiser #6',
    location: 'Chipotle - Maple Grove',
    description: 'https://maplegrovetrack.github.io/events#tuesday-may-12-2026'
  }),
  baseEvent({
    start: [2026, 5, 18],
    end: [2026, 5, 19],
    title: 'Fundraiser #7',
    location: 'Papa Murphy\'s - Maple Grove',
    description: 'https://maplegrovetrack.github.io/events#monday-may-18-2026'
  }),
  baseEvent({
    start: [2026, 6, 1],
    end: [2026, 6, 2],
    title: 'Fundraiser #8',
    location: 'Jersey Mike\'s - Maple Grove',
    description: 'https://maplegrovetrack.github.io/events#monday-june-1-2026'
  })
]

const events: EventAttributes[] = [
  ...captainsPractice,
  ...tryoutOuts,
  ...springBreakPractices,
  ...meets,
  ...fundraisers,
  baseEvent({
    start: [2026, 3, 9],
    end: [2026, 3, 10],
    title: 'OMNI Community Night',
    description: 'https://maplegrovetrack.github.io/events#monday-march-9-2026',
    location: 'OMNI Brewing Company'
  }),
  baseEvent({
    start: [2026, 3, 16],
    end: [2026, 3, 17],
    title: 'Apparel Order #2'
  }),
  baseEvent({
    start: [2026, 3, 17],
    end: [2026, 3, 18],
    title: 'Mandatory Season Kickoff & Social',
    location: 'Maple Grove Senior High',
    description: 'https://maplegrovetrack.github.io/events#monday-march-17-2026'
  }),
  baseEvent({
    start: [2026, 5, 6],
    end: [2026, 5, 7],
    title: 'Senior Goodie Bag Event',
    location: 'OMNI Brewing Company',
    description: 'https://maplegrovetrack.github.io/events#wednesday-may-6-2026'
  }),
  baseEvent({
    start: [2026, 5, 31],
    end: [2026, 6, 1],
    title: 'State Meet Goodie Bag Event',
    location: 'OMNI Brewing Company',
    description: 'https://maplegrovetrack.github.io/events#sunday-may-31-2026'
  }),
  baseEvent({
    start: [2026, 6, 2],
    end: [2026, 6, 3],
    title: 'End of Year Celebration',
    location: 'Maple Grove Senior High',
    description: 'https://maplegrovetrack.github.io/events#tuesday-june-2-2026'
  })
]

const callback: NodeCallback = (error, value) => {
  if (error) {
    console.log(error)
  }
  rmSync('dist', { recursive: true, force: true })
  mkdirSync('dist')
  writeFileSync('dist/other.ics', value, 'utf-8')
}

createEvents(events, callback)
