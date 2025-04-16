import { JSX } from "react";
import { ArrowPrev, ArrowNext } from "./assets/icons";

type PaginationProps = {
    totalPages: number;
    onChangePage: (page: number) => void;
    backgroundColor?: string;
    page: number;
};

export const Pagination = ({
    totalPages = 1,
    page = 1,
    onChangePage,
    backgroundColor = "transparent",
}: PaginationProps) => {
    const handlePrevPage = (): void => {
        if (page > 1) {
            onChangePage(page - 1);
        }
    };

    const handleNextPage = (): void => {
        if (page < totalPages) {
            onChangePage(page + 1);
        }
    };

    const formatArray = (lenght: number, currentPage: number) => {
        let newArray: Array<number | string> = Array.from({
            length: lenght,
        }).map((_, index) => index + 1);

        const maxlenght = 7;
        const showValuesLength = maxlenght - 2;

         if (newArray.length >= maxlenght) {
            if (
                currentPage >= showValuesLength &&
                currentPage <= newArray.length + 1 - showValuesLength
            ) {
                newArray = [1, "..."]
                    .concat([currentPage - 1, currentPage, currentPage + 1])
                    .concat(["...", newArray.length]);
            } else if (
                currentPage <= newArray.length &&
                currentPage > showValuesLength
            ) {
                newArray = [1, "..."].concat(newArray.slice(-showValuesLength));
            } else if (currentPage < showValuesLength) {
                newArray = newArray
                    .slice(0, showValuesLength)
                    .concat(["...", newArray.length]);
            }
        }

        return newArray;
    };

    const renderPages = (): JSX.Element[] => {
        return formatArray(totalPages, page).map((item, i) =>
            typeof item === "number" ? (
                <li
                    key={i}
                    onClick={() => onChangePage(item)}
                    className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer font-bold text-sm ${
                        page === item
                            ? "bg-[#3D3DFF] text-white"
                            : "bg-transparent text-[#2d4848]"
                    } hover:text-[#3D3DFF]`}
                >
                    {item}
                </li>
            ) : (
                <li
                    key={i}
                    className="flex items-center justify-center w-8 h-8 text-[#2full848] font-semibold text-sm max-[400px]:text-xs"
                >
                    ...
                </li>
            )
        );
    };

    return (
        <div
            className="flex items-center rounded-md p-2 w-full justify-center"
            style={{ backgroundColor }}
        >
            <ul className="flex items-center list-none gap-2.5 max-[400px]:gap-1 p-1 select-none">
                <li
                    onClick={handlePrevPage}
                    className="flex items-center justify-center cursor-pointer active:relative active:top-[1px]"
                >
                    <div className="bg-[#C7CCD1] w-8 h-8 rounded-full flex items-center justify-center">
                        <ArrowPrev size={10} />
                    </div>
                </li>
                {renderPages()}
                <li
                    onClick={handleNextPage}
                    className="flex items-center justify-center  cursor-pointer active:relative active:top-[1px]"
                >
                    <div className="bg-[#C7CCD1] w-8 h-8 rounded-full flex items-center justify-center">
                        <ArrowNext size={10} />
                    </div>
                </li>
            </ul>
        </div>
    );
};
