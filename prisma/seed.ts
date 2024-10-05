import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const ticketsData = [
    {
      clientName: "Alice Johnson",
      status: "OPEN",
      messages: [
        { body: "First message for Alice." },
        { body: "Second message for Alice." }
      ]
    },
    {
      clientName: "Bob Smith",
      status: "CLOSED",
      messages: [
        { body: "First message for Bob." },
        { body: "Second message for Bob." },
        { body: "Final message for Bob." }
      ]
    },
    {
      clientName: "Charlie Brown",
      status: "OPEN",
      messages: [
        { body: "First message for Charlie." },
        { body: "Second message for Charlie." }
      ]
    },
    {
      clientName: "Diana Prince",
      status: "OPEN",
      messages: [
        { body: "Initial message for Diana." },
        { body: "Follow-up message for Diana." }
      ]
    },
    {
      clientName: "Edward Elric",
      status: "CLOSED",
      messages: [
        { body: "Message 1 for Edward." },
        { body: "Message 2 for Edward." },
        { body: "Final thoughts for Edward." }
      ]
    }
  ];

  for (const ticketData of ticketsData) {
    try {
      const ticket = await prisma.ticket.create({
        data: {
          clientName: ticketData.clientName,
          status: ticketData.status,
          messages: {
            create: ticketData.messages,
          },
        },
      });
      console.log(`Ticket criado:`, ticket);
    } catch (error) {
      console.error(`Erro ao criar ticket para ${ticketData.clientName}:`, error);
    }
  }
}

main()
  .catch((e) => {
    console.error("Erro ao executar a função main:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
