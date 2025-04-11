"use client";

import { ReactNode, JSX } from "react";
import { Footer } from "./Footer";
import { BreadCrumbs } from "./BreadCrumbs";

type BreadCrumbsTypes = {
    screen: string | JSX.Element;
    navigate: string;
};

type ContainerProps = {
    children: ReactNode;
    renderHeader?: () => JSX.Element;
    renderSideBar?: () => JSX.Element;
    breadcrumbs?: BreadCrumbsTypes[];
};

export default function Container({
    children,
    renderHeader,
    renderSideBar,
    breadcrumbs,
}: ContainerProps) {
    return (
        <main className="h-svh flex overflow-hidden">
            {renderSideBar && renderSideBar()}
            <div className="flex flex-col h-full w-full">
                {renderHeader && renderHeader()}
                <section className="w-full @max-[572px]:w-screen h-full bg-[#efefef] flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-auto p-4">
                        {breadcrumbs && <BreadCrumbs crumbs={breadcrumbs} />}
                        {children}
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    );
}
