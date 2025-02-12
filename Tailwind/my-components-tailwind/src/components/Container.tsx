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
        <main className="min-h-screen flex">
            {renderSideBar && renderSideBar()}
            <div className="flex flex-col flex-1">
                {renderHeader && renderHeader()}
                <section className="w-full bg-[#efefef] flex flex-col flex-1 p-4 max-h-[calc(100vh-84px)] overflow-scroll">
                    {breadcrumbs && <BreadCrumbs crumbs={breadcrumbs} />}
                    {children}
                </section>
                <Footer />
            </div>
        </main>
    );
}

//<Header open={toggleSideBar} setOpen={setToggleSideBar} />
