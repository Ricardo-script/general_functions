// yarn add stripe

// src/[productId]/page.tsx

import Stripe from "stripe";

const stripeConfig = {
    publicKey: 'pk_test_51OO8hgA0ZSWM7s0rG8kmQGVGjWhyOQJ1HTd2saoiMAHKXlg1lkZmsNK1sObSrgPA9eEriVeofynGdTspaJhGIOGU00nI12gex6',
    secretKey: 'sk_test_51OO8hgA0ZSWM7s0r6VFqXQ2K70uqDCTII1AmAq1kwJO83PjqrRfWjCnChk1SSNdwRXhs5MBMyalMSAd2vs8byVH600Lv7ywjwk',
}

export default async function Product() {

    const stripe = new Stripe(stripeConfig.secretKey, { apiVersion: '2023-10-16' })

    //lista os produtos cadastrados
    const products = await stripe.products.list();
    console.log(products.data)

    return (
        <div>
            {products.data.map(item => (
                <div key={item.id}>
                    <h1>{item.description}</h1>
                </div>
            ))}
        </div>
    );
}
