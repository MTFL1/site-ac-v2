// utils.js
export function sortEventsByDate(events) {
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  
  export function getUpcomingEvents(events) {
    const now = new Date();
    return sortEventsByDate(events.filter((event) => new Date(event.date) > now));
  }
  
  export function getPastEvents(events) {
    const now = new Date();
    return sortEventsByDate(events.filter((event) => new Date(event.date) <= now)).reverse();
  }
  
  export function getHighlightEvent(events) {
    const upcoming = getUpcomingEvents(events);
    if (upcoming.length > 0) {
      return upcoming[0]; // Retourne le premier événement futur
    }
    const past = getPastEvents(events);
    return past.length > 0 ? past[0] : null; // Retourne le dernier événement passé ou null
  }
  