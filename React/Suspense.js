import React, { Suspense } from "react";

const Header = React.lazy(() => import ('./Header'));
const Footer = React.lazy(() => import('./Footer'));

export default function App(){
    return (
        <div>
            <Suspense fallback={<div>Header loading...</div>}>
                <Header />
            </Suspense>
            <Suspense fallback={<div>Footer loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    )
}