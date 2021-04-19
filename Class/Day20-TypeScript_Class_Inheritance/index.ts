enum TransportTicketType {
  Train,
  MRT,
  Aviation
}

// hr, min, sec
type TimeFormat = [number, number, number]

class TicketSystem {
  constructor(
    private type: TransportTicketType,
    protected startingPoint: string,
    protected destination: string,
    private departureTime: Date
  ) { }

  protected deriveDuration(): TimeFormat {
    return [1, 0, 0]
  }

  private deriveArrivalTime(): Date {
    const { departureTime } = this

    const [hours, minutes, seconds] = this.deriveDuration()
    const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds
    const durationMilliSeconds = durationSeconds * 1000

    const arrivalMilliSeconds = departureTime.getTime() + durationMilliSeconds
    return new Date(arrivalMilliSeconds)
  }

  public getTicketInfo() {
    const ticketName = TransportTicketType[this.type]
    const arrivalTime = this.deriveArrivalTime()

    console.log(`
      Ticket Type: ${ticketName}
      Station:     ${this.startingPoint} <=> ${this.destination}
      Departure:   ${this.departureTime}
      Arrival:     ${arrivalTime}
    `)
  }
}


const randomTicket = new TicketSystem(
  TransportTicketType.Train,
  'Taoyuan',
  'Taipei',
  new Date(2021, 3, 12, 9, 0, 0)
)

// randomTicket.getTicketInfo()

//////////////////////////////////////////

type TrainStation = {
  name: string,
  nextStop: string,
  duration: TimeFormat
}

class TrainTicket extends TicketSystem {
  constructor(
    startingPoint: string,
    destination: string,
    departureTime: Date
  ) {
    super(
      TransportTicketType.Train,
      startingPoint,
      destination,
      departureTime
    )
  }

  private stops: string[] = [
    'Pingtung',
    'Kaohsiung',
    'Tainan',
    'Taichung',
    'Hsinchu',
    'Taipei'
  ]

  private trainStationsDetail: TrainStation[] = [
    { name: 'Pingtung', nextStop: 'Kaohsiung', duration: [2, 30, 0] },
    { name: 'Kaohsiung', nextStop: 'Tainan', duration: [1, 45, 30] },
    { name: 'Tainan', nextStop: 'Taichung', duration: [3, 20, 0] },
    { name: 'Taichung', nextStop: 'Hsinchu', duration: [2, 30, 30] },
    { name: 'Hsinchu', nextStop: 'Taipei', duration: [1, 30, 30] }
  ]

  private isStopExist(stop: string): boolean {
    for (let i = 0; i < this.stops.length; i++) {
      const existedStop = this.stops[i]
      if (existedStop === stop) return true
    }
    return false
  }

  protected deriveDuration(): TimeFormat {
    const { startingPoint, destination } = this

    if (
      this.isStopExist(startingPoint) &&
      this.isStopExist(destination)
    ) {
      let time: TimeFormat = [0, 0, 0]
      let stopFound = false


      for (let i = 0; i < this.trainStationsDetail.length; i++) {
        const detail = this.trainStationsDetail[i]

        if (!stopFound && detail.name === startingPoint) {
          stopFound = true
          time[0] += detail.duration[0]
          time[1] += detail.duration[1]
          time[2] += detail.duration[2]
        }

        else if (stopFound) {
          time[0] += detail.duration[0]
          time[1] += detail.duration[1]
          time[2] += detail.duration[2]

          if (detail.nextStop === destination) break
        }
      }

      let minutes = Math.floor(time[2] / 60)
      time[1] += minutes
      time[2] -= minutes * 60

      let hours = Math.floor(time[1] / 60)
      time[0] += hours
      time[1] -= hours * 60

      return time
    }

    throw new Error('Wrong stop name! Please check again!')
  }
}


const trainTicket = new TrainTicket(
  'Tainan',
  'Hsinchu',
  new Date(2021, 3, 19, 9, 0, 0)
)

// trainTicket.getTicketInfo()



/////////////////////////////////////////


class TestSuperClass {
  constructor(
    public p1: number,
    public p2: string,
    public p3: boolean
  ) { }
}

class TestChildClass1 extends TestSuperClass {
  constructor(
    p1Child: number,
    p2Child: string,
    p3Child: boolean
  ) {
    super(
      p1Child, p2Child, p3Child
    )
  }
}

const objFromChildClass1 = new TestChildClass1(
  123,
  '123',
  true
)

console.log(objFromChildClass1)

class TestChildClass2 extends TestSuperClass { }

// const objFromChildClass2 = new TestChildClass2()