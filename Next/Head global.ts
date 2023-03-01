//na pasta Component criar arquivo Head.tsx: 

import NextHead from "next/head";
import { PropsHead } from "@/types";

export default function Head({ title }: PropsHead) {
    return (
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    );
}

//--------------------------------------------------------------------
//modo de usar:
import { Fragment } from 'react';
import Head from '@/components/Head';
import { Container } from '@/styles/pages/Home';


export default function Home() {
    return (
        <Fragment>
            <Head title='ERP - Home' />
            <Container>
              
            </Container>
        </Fragment>
    );
}

//-------------------------------------------------------------------
//types: 

export type PropsHead = {
    title: string
}