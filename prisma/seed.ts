import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'e354bfd0-f319-4794-ab86-815836659035',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}
  seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})