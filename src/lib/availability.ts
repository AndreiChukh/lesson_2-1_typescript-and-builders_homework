import type { Booking, WorkshopId } from '../models/booking'
import { TYPESCRIPT_CAPACITY, BUILD_CAPACITY } from '../data/capacities'

export function countWorkshopSeats(items: Booking[], workshop: WorkshopId): number {
  let total = 0

  items.forEach((booking) => {
    if (booking.workshop === workshop) total += booking.seats
  })

  return total
}

export function getRemainingSeats(items: Booking[], workshop: WorkshopId): number {
  const capacity = workshop === 'typescript' ? TYPESCRIPT_CAPACITY : BUILD_CAPACITY
  return capacity - countWorkshopSeats(items, workshop)
}
