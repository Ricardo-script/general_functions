//src/pages/api/create-preference.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { data } = await axios.post( //total = 70
        'https://api.mercadopago.com/checkout/preferences',
        {
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
                success: 'http://localhost:3000/success', // criar pagina
                failure: 'http://localhost:3000/failure', // criar pagina
                pending: 'http://localhost:3000/pending', // criar pagina
            },
            auto_return: 'approved',
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer TEST-5158492697682358-032410-9e00790590dc0ae715eb8f2d8175a29b-177793268`, //`Bearer ${process.env.MP_ACCESS_TOKEN}`,
            },
        }
    );

    res.status(200).json({ init_point: data.init_point });
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Home Page

import { useState } from 'react';
import axios from 'axios';

function CheckoutButton() {
    const [loading, setLoading] = useState(false);

    async function handleClick() {
        setLoading(true);
        try {
            const { data } = await axios.post('/api/create-preference');
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

