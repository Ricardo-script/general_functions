import {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { Checkbox } from "./Checkbox";
import { Arrow } from "./assets/icons";

export type DataSelectDataTypes = {
    name: string;
    value: string | number | boolean;
};

export type OnChangeValuesTypes = {
    allSelected: boolean;
    data: object | string | number;
};

type MultiSelectProps = {
    label?: string;
    required?: boolean;
    width?: number | string;
    heightBox?: number;
    onClick?: () => void;
    onChange?: (
        value: OnChangeValuesTypes | ChangeEvent<HTMLInputElement>
    ) => void;
    data: DataSelectDataTypes[];
    placeholder?: string;
    defaultValue?: DataSelectDataTypes[];
    message?: string;
    disabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue">;

export interface MultiSelectRef {
    resetSelection: () => void;
}

export const MultiSelect = forwardRef<MultiSelectRef, MultiSelectProps>(
    (
        {
            label,
            width = 0,
            onClick,
            onChange,
            heightBox = 200,
            data,
            placeholder,
            defaultValue = [],
            message,
            disabled = false,
            ...rest
        },
        ref
    ) => {
        const [openSelect, setOpenSelect] = useState(false);
        const [selectedItems, setSelectedItems] =
            useState<DataSelectDataTypes[]>(defaultValue);
        const [uniqueName, setUniqueName] = useState("");
        const [selectAll, setSelectAll] = useState(false);
        const selectRef = useRef<HTMLInputElement>(null);
        const contentRef = useRef<HTMLDivElement>(null);

        const _defaultValues = defaultValue
            .map((selectedItem) => selectedItem.value)
            .join(",");
        const [value, setValue] = useState<string | number>(_defaultValues);

        const resetSelection = () => {
            setSelectedItems([]);
            setValue("");
            setSelectAll(false);
            onChange?.({ allSelected: false, data: "" });
        };

        useImperativeHandle(ref, () => ({
            resetSelection,
        }));

        const handleIncludeValues = (item: DataSelectDataTypes) => {
            setUniqueName(item.name);
            setSelectedItems((prevSelected) => {
                const alreadySelected = prevSelected.some(
                    (selectedItem) => selectedItem.value === item.value
                );
                let updatedSelected;

                if (alreadySelected) {
                    updatedSelected = prevSelected.filter(
                        (selectedItem) => selectedItem.value !== item.value
                    );
                } else {
                    updatedSelected = [...prevSelected, item];
                }

                const isAllSelected = updatedSelected.length === data.length;
                setValue(
                    updatedSelected
                        .map((selectedItem) => selectedItem.value)
                        .join(",")
                );

                if (onChange) {
                    onChange({
                        allSelected: isAllSelected,
                        data: isAllSelected ? data : updatedSelected,
                    });
                }
                setSelectAll(isAllSelected);
                return updatedSelected;
            });
        };

        const handleSelectAll = () => {
            if (selectAll) {
                setSelectedItems([]);
                setValue("");
                if (onChange) {
                    onChange({ allSelected: false, data: "" });
                }
            } else {
                setSelectedItems(data);
                onChange?.({ allSelected: true, data: data });
                const valuesWithEmptyItem = [
                    ...data.map((item) => item.value),
                    "",
                ].join(",");
                setValue(valuesWithEmptyItem);
            }
            setSelectAll(!selectAll);
        };

        useEffect(() => {
            const handleOutsideClick = (event: MouseEvent) => {
                if (
                    contentRef.current &&
                    !contentRef.current.contains(event.target as Node)
                ) {
                    setOpenSelect(false);
                }
            };
            document.addEventListener("mousedown", handleOutsideClick);
            return () => {
                document.removeEventListener("mousedown", handleOutsideClick);
            };
        }, []);

        useEffect(() => {
            if (defaultValue[0]?.name === "Todos") {
                setSelectAll(true);
            }
        }, [_defaultValues, defaultValue]);

        return (
            <div
                ref={contentRef}
                className={`flex flex-col relative ${
                    disabled
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                }`}
                style={{
                    width:
                        width === 0
                            ? "100%"
                            : typeof width === "number"
                            ? `${width * 4}px`
                            : width,
                }}
                tabIndex={-1}
            >
                <label className="text-[#344054] font-medium text-xs mb-[2px]">
                    {label}
                </label>
                <input
                    {...rest}
                    ref={selectRef}
                    defaultValue={value}
                    className="w-full h-6 outline-none border-0 text-sm font-light text-gray-500 invisible absolute -z-10"
                />
                <div
                    onClick={() => {
                        setOpenSelect(!openSelect);
                        onClick?.();
                    }}
                    className={`w-full min-h-8 flex items-center justify-between gap-2 rounded-lg border ${
                        message ? "border-red-500" : "border-gray-300"
                    } transition-colors bg-white hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200`}
                >
                    <div className="w-full flex items-center justify-between py-[7px] px-[10px]">
                        {selectedItems.length === 0 ? (
                            <div className="w-full flex flex-wrap gap-2">
                                <span className="text-sm font-medium text-zinc-600/50">
                                    {placeholder}
                                </span>
                            </div>
                        ) : selectedItems.length !== data.length ? (
                            <div className="w-full flex flex-wrap gap-2">
                                {selectedItems.map((names, index) => (
                                    <div
                                        key={index}
                                        className="text-xs text-white bg-blue-600 px-3 py-1 rounded-md"
                                    >
                                        {names.name}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full flex flex-wrap gap-2">
                                <div className="text-xs text-white bg-blue-600 px-3 py-1 rounded-md">
                                    {data.length > 1 ? "Todos" : uniqueName}
                                </div>
                            </div>
                        )}
                        <div
                            className={`transform transition-transform ${
                                openSelect ? "rotate-180" : ""
                            }`}
                        >
                            <Arrow />
                        </div>
                    </div>
                </div>
                {message && (
                    <span className="text-[10px] absolute -bottom-4 right-2 text-red-600 font-medium">
                        {message}
                    </span>
                )}
                <div
                    className={`w-full flex flex-col gap-1 bg-gray-100 rounded-md shadow-md transition-max-height overflow-y-scroll absolute top-full left-0 right-0 z-10 ${
                        openSelect ? `max-h-[${heightBox}px]` : "max-h-0"
                    }`}
                >
                    {data.length > 1 && (
                        <div
                            onClick={handleSelectAll}
                            className="w-full flex items-center h-8 px-2 cursor-pointer hover:bg-gray-200 active:opacity-70"
                        >
                            <Checkbox checked={selectAll} readOnly />
                            <span className="text-xs text-gray-700 ml-2">
                                Selecionar todos
                            </span>
                        </div>
                    )}
                    {data.map((items, index) => (
                        <div
                            key={index}
                            onClick={() => handleIncludeValues(items)}
                            className="w-full flex items-center h-8 px-2 cursor-pointer hover:bg-gray-200 active:opacity-70"
                        >
                            <div className="pointer-events-none">
                                <Checkbox
                                    checked={selectedItems.some(
                                        (selectedItem) =>
                                            selectedItem.value === items.value
                                    )}
                                    readOnly
                                />
                            </div>

                            <span className="text-xs text-gray-700 ml-2">
                                {items.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);

MultiSelect.displayName = "MultiSelect";
