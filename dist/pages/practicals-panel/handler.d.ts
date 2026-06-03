export type JSONElement = JSONStandardElement | TableElement;
type K = keyof HTMLElementTagNameMap;
export type ExperimentSection = {
    header: string;
    content: JSONElement[];
};
export type JSONStandardElement = {
    element: K;
    properties?: Partial<HTMLElementTagNameMap[K]>;
    children?: JSONElement[];
};
export type TableElement = {
    element: "experiment-table";
    header: string;
    columns: TableColumn[];
};
type TableColumn = {
    header: string;
    properties: {
        id: string;
        readOnly: boolean;
    };
};
export declare function generateUI(source: {
    experiment: ExperimentSection[];
}): HTMLDivElement;
export declare function createElementFromJson(src: JSONElement): Node;
export {};
//# sourceMappingURL=handler.d.ts.map