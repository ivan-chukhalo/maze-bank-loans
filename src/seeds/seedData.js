const seedClients = [
  {
    name: "Explosive Music Label",
    phone: "+380111111111",
    contactPerson: "Pes Patron",
    createdAt: new Date(),
  },
  {
    name: "Invisible Neck Technologies",
    phone: "+380222222222",
    contactPerson: "Mykhaylo Lebiga",
    createdAt: new Date(),
  },
  {
    name: "Our Flowers Int",
    phone: "+380333333333",
    contactPerson: "Mykola Zyrianov",
    createdAt: new Date(),
  },
  {
    name: "World Wide Sanctions Delivery",
    phone: "+380444444444",
    contactPerson: "Vasyl Maluk",
    createdAt: new Date(),
  },
  {
    name: "Card Dealer",
    phone: "+380555555555",
    contactPerson: "Kyrylo Budanov",
    createdAt: new Date(),
  },
  {
    name: "Suspicious Sharagha",
    phone: "+380666666666",
    contactPerson: "Some From Above",
    createdAt: new Date(),
  },
];

const seedLoans = [
  { name: "Dlia Kuma", term: 120, yearPenaltyRate: 10 },
  { name: "Ne Dlia Kuma", term: 120, yearPenaltyRate: 100 },
];

const seedIssuedLoans = [
  {
    loandName: "Dlia Kuma",
    clientName: "Explosive Music Label",
    amount: 1000,
    status: "active",
  },
  {
    loandName: "Dlia Kuma",
    clientName: "Invisible Neck Technologies",
    amount: 2000,
    status: "active",
  },
  {
    loandName: "Dlia Kuma",
    clientName: "Our Flowers Int",
    amount: 3000,
    status: "active",
  },
  {
    loandName: "Dlia Kuma",
    clientName: "World Wide Sanctions Delivery",
    amount: 4000,
    status: "active",
  },
  {
    loandName: "Dlia Kuma",
    clientName: "Card Dealer",
    amount: 5000,
    status: "closed",
  },
  {
    loandName: "Ne Dlia Kuma",
    clientName: "Suspicious Sharagha",
    amount: 5,
    status: "defaulted",
  },
];

const seedPayments = [
  {
    loanName: "Dlia Kuma",
    clientName: "Explosive Music Label",
    amount: 50,
    paymentDate: new Date("2025-01-01T15:30:32.214+03:00"),
  },
  {
    loanName: "Dlia Kuma",
    clientName: "Explosive Music Label",
    amount: 100,
    paymentDate: new Date("2025-02-01T15:30:32.214+03:00"),
  },
  {
    loanName: "Dlia Kuma",
    clientName: "Explosive Music Label",
    amount: 200,
    paymentDate: new Date("2025-03-01T11:30:32.214+03:00"),
  },
  {
    loanName: "Dlia Kuma",
    clientName: "Invisible Neck Technologies",
    amount: 100,
    paymentDate: new Date("2025-04-01T11:30:32.214+03:00"),
  },
  {
    loanName: "Dlia Kuma",
    clientName: "Our Flowers Int",
    amount: 333,
    paymentDate: new Date("2025-05-01T11:30:32.214+03:00"),
  },
  {
    loanName: "Dlia Kuma",
    clientName: "World Wide Sanctions Delivery",
    amount: 400,
    paymentDate: new Date("2025-06-01T11:30:32.214+03:00"),
  },
  {
    loanName: "Dlia Kuma",
    clientName: "Card Dealer",
    amount: 5000,
    paymentDate: new Date("2025-07-01T11:30:32.214+03:00"),
  },
  {
    loanName: "Ne Dlia Kuma",
    clientName: "Suspicious Sharagha",
    amount: 1,
    paymentDate: new Date("2025-08-01T11:30:32.214+03:00"),
  },
];

export { seedClients, seedLoans, seedIssuedLoans, seedPayments };
