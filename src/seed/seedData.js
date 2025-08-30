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

const seedLoanTypes = [
  { name: "Dlia Kuma", term: 120, yearPenaltyRate: 10 },
  { name: "Ne Dlia Kuma", term: 120, yearPenaltyRate: 100 },
];

const seedLoanRecord = [
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

export { seedClients, seedLoanTypes, seedLoanRecord };
