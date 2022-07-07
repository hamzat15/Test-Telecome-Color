import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { horaire: horaire } = prisma

async function main() {
    await horaire.create({
        data: {
            fuseau: 'londre',
            jours: 'mercredi',
            horaire: 23,
    
        },
    })
}
main()
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
