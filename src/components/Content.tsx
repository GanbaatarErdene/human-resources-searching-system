import { useAsyncList } from "@react-stately/data";
import React, { useMemo } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue } from "@nextui-org/react";

const data = [
    { name: "Erdene", age: "19" },
    { name: "Dulguun", mass: "56" },
    { name: "Erdene", birth_year: "11-24" },
    { name: "Anu", age: "20" },
    { name: "Tsengel", mass: "80" },
    { name: "Bold", birth_year: "11-24" },
    { name: "Choijoo", mass: "100" },
    { name: "Dulguun", age: "21" },
    { name: "Dulguun", mass: "89" },
    { name: "Anu", birth_year: "12-24" }
]
const isLoading = false

export default function Content() {
    const [page, setPage] = React.useState(1);

    return (
        <Table
            aria-label="Example table with client async pagination"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={11}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
        >
            <TableHeader>
                <TableColumn key="name">Name</TableColumn>
                <TableColumn key="age">AGE</TableColumn>
                <TableColumn key="mass">Mass</TableColumn>
                <TableColumn key="birth_year">Birth year</TableColumn>
            </TableHeader>
            <TableBody
                items={data ?? []}
                loadingContent={<Spinner />}
            // loadingState={loadingState}
            >
                {(item) => (
                    <TableRow key={item?.name}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
