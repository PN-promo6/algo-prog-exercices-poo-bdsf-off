class ticket {
  nameOfTheArtist: string;
  locationOfTheEvent: string;
  date: string;
  ticketPrice: number;
  clientName: string = "";
}

constructor(nameOfTheArtist: string, locationOfTheEvent: string, date: string, ticketPrice: string, clientName: string){
  this.nameOfTheArtist = nameOfTheArtist;
  this.locationOfTheEvent = locationOfTheEvent;
  this.date = date;
  this.ticketPrice = ticketPrice;
  if (clientName) {
    this.clientName = clientName;
  }
}

public htmlDetails(): string {
  let content: string = '
    < p > Nom de l'artiste : ${this.nameOfTheArtist}</p>;
      < p > Lieu : ${ this.locationOfTheEvent } </p>;
        < p > Dates : ${ this.date } </p>;
          < p > PrixTicket : ${ ticketPrice } </p>;
  if (this.clientName != "") {
    content = Content + '<p>NomClient : ${this.clientName} </p>'
  }.
  return content;
}

let ticket01: ConcertTicket = new ConcertTicket("Soprano", "Le Dome", "08.08", 79.99, "Daryl Dixon");
let ticket02: ConcertTicket = new ConcertTicket("Soprano", "Le Dome", "08.08", 79.99);

console.log(ticket01.htmlDetails());
console.log(ticket02.htmlDetails());
