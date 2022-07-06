import  pkg  from "@prisma/client"
const{ PrismaClient } = pkg
const prisma = new PrismaClient()
const { horaire: horaire } = prisma

async function main() {
    await horaire.create({
        data: {
            fuseau: "sao polo",
            jours: "mardi",
            horaire: 19
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