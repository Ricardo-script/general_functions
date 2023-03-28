//src/pages/api/create-preference.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer TEST-5158492697682358-032410-9e00790590dc0ae715eb8f2d8175a29b-177793268`, //`Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const dataMP = req.body;

    const { data } = await axios.post('https://api.mercadopago.com/checkout/preferences', dataMP, config)

    res.status(200).json({ init_point: data.init_point });

}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Home Page

import { useState } from 'react';
import axios from 'axios';

function CheckoutButton() {
    const [loading, setLoading] = useState(false);
    const dataMP = {
        items: [
            {
                title: 'Produto 1',
                description: 'Descrição do Produto 1',
                quantity: 1,
                currency_id: 'BRL',
                unit_price: 10.0,
            },
            {
                title: 'Produto 2',
                description: 'Descrição do Produto 2',
                quantity: 2,
                currency_id: 'BRL',
                unit_price: 20.0,
            },
            {
                title: 'Produto 3',
                description: 'Descrição do Produto 2',
                quantity: 4,
                currency_id: 'BRL',
                unit_price: 5,
            },
        ],
        back_urls: {
            success: 'http://localhost:3000/success',
            failure: 'http://localhost:3000/failure',
            pending: 'http://localhost:3000/pending',
        },
        auto_return: 'approved',
        payer: {
            name: 'Nome do comprador',
            surname: 'Sobrenome do comprador',
            email: 'email-do-comprador@teste.com',
            phone: {
                area_code: '11',
                number: '5555-5555',
            },
            address: {
                zip_code: '01000-000',
                street_name: 'Rua do Comprador',
                street_number: '123',
                neighborhood: 'Bairro do Comprador',
                city: 'São Paulo',
                federal_unit: 'SP',
            },
        },
    }

    async function handleClick() {
        setLoading(true);
        try {
            const { data } = await axios.post('/api/create-preference', dataMP);
            window.location.href = data.init_point;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <button onClick={handleClick} disabled={loading}>
            {loading ? 'Carregando...' : 'Pagar com Mercado Pago'}
        </button>
    );
}

export default function HomePage() {
    return (
        <div>
            <h1>Minha página</h1>
            <CheckoutButton />
        </div>
    );
}
}

