import db from '../database/connection';

import { Request, Response } from 'express'

export default class CasoController {


    async tipo(request: Request, response: Response) {
        const filters = request.query;

        const tipo = await db("casos")
            .where("casos.tipo", "=", filters.tipo)

        return response.json(tipo)


    }
    async cpf(request: Request, response: Response) {
        const filters = request.query;

        const cpf = await db("casos")
            .where("casos.cpf", "=", filters.cpf)

        return response.json(cpf)


    }
    async cep(request: Request, response: Response) {
        const filters = request.query;

        const cep = await db("casos")
            .where("casos.cep", "=", filters.cep)

        return response.json(cep)


    }

    async create(request: Request, response: Response) {
        const {
            nome,
            cpf,
            email,
            numero,
            tipo,
            relato,
            cep,
            rua,
            n,
            complemento,
            bairro,
            cidade,
            uf
        } = request.body;

        const trx = await db.transaction();

        const cpfExist = db.cpf

        try {
            if (cpfExist) {
                return response.status(400).json({
                    error: 'Cpf ja existe'
                })
            } else {
                await trx("casos").insert({
                    nome,
                    cpf,
                    email,
                    numero,
                    tipo,
                    relato,
                    cep,
                    rua,
                    n,
                    complemento,
                    bairro,
                    cidade,
                    uf
                })
                await trx.commit()
            }

            return response.status(201).send("OLA")
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Encontramos algum erro em criar a aula'
            })
        }


    }
}