import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { horaire } = prisma

export default {
    getAll(req, res) {
        horaire
            .findMany()
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(500).send({
                    message: error.massage || 'some error occured',
                })
            })
    },
    get(req, res) {
        const { id } = req.params
        horaire
            .findUnique({
                where: {
                    id: parseInt(id),
                },
            })
            .then((data) => {
                data
                    ? res.status(200).send(data)
                    : res.status(400).send({
                          message: `Cannot find post with id=${id}`,
                      })
                res.status(200).send(data)
            })
            .catch((error) => {
                res.status(500).send({
                    massage: error.massage || 'some error occured',
                })
            })
    },
    create(req, res) {
        const { fuseau, jours, horaire } = req.body
        prisma.horaire
            .create({
                data: {
                    fuseau: fuseau,
                    jours: jours,
                    horaire: horaire,
                },
            })
            .then(() => {
                res.status(201).send({
                    message: `post was created successfully`,
                })
            })
            .catch((error) => {
                res.status(500).send({
                    massage: error.massage || 'some error occured',
                })
            })
    },
    update(req, res) {
        const { id } = req.params
        const { horaire } = req.body

        prisma.horaire
            .update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    horaire: horaire,
                },
            })
            .then(() => {
                res.status(200).send({
                    message: `post was update successfully`,
                })
            })
            .catch((error) => {
                res.status(500).send({
                    massage: error.massage || 'some error occured',
                })
            })
    },
    delete(req, res) {
        const { id } = req.params

        horaire
            .delete({
                where: {
                    id: parseInt(id),
                },
            })
            .then(() => {
                res.status(200).send({
                    message: `post was deleted successfully`,
                })
            })
            .catch((error) => {
                res.status(500).send({
                    massage: error.massage || 'some error occured',
                })
            })
    },
}
