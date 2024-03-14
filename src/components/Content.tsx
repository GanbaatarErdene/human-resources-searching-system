import { useAsyncList } from "@react-stately/data";
import React, { useMemo } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue } from "@nextui-org/react";

const data = [
    { firstName: "Ганбаатар", lastName: "Эрдэнэ", company: "Ай Ти Зон", office:"Захиргаа,үйл ажилгааны алба", position:"Хуулйин мэргэжилтэн", RD:"УБ89308567", phoneNumber1:"96785433", phoneNumber2:"90876534", mail:"iT123@gmail.com"},
    { firstName: "Насанбат", lastName: "Батзориг", company: "Ай Ти Зон", office:"Маркетинг, стратегийн хэлтэс", position:"Маркетинг менежер", RD:"ЕН98546783", phoneNumber1:"96785743", phoneNumber2:"99879089", mail:"iT124@gmail.com"},
    { firstName: "Эрдэнэбаяр", lastName: "Төмөр", company: "Ай Ти Зон", office:"Захиргаа,үйл ажилгааны алба", position:"Хуулйин мэргэжилтэн", RD:"УГ90875467", phoneNumber1:"91657865", phoneNumber2:"99090908", mail:"iT125@Gmail.com"},
    { firstName: "Батзориг", lastName: "Эрдэнэбаяр", company: "Ай Ти Зон", office:"Маркетинг, стратегийн хэлтэс", position:"Маркетинг менежер", RD:"ЕГ78905467", phoneNumber1:"91657890", phoneNumber2:"99664433", mail:"iT126@gmail.com"},
    { firstName: "Цэнгэл", lastName: "Батзориг", company: "Ай Ти Зон", office:"Маркетинг, стратегийн хэлтэс", position:"Маркетинг менежер", RD:"ЛБ97584930", phoneNumber1:"99876543", phoneNumber2:"92756483", mail:"iT127@gmail.com"},
    { firstName: "Болдбаатар", lastName: "Уянга", company: "Ай Ти Зон", office:"Захиргаа,үйл ажилгааны алба", position:"Хуулйин мэргэжилтэн", RD:"НЭ90846844", phoneNumber1:"99070543", phoneNumber2:"99045678", mail:"iT128@gmail.com"},
    { firstName: "Тэргэл", lastName: "Тэмүүжин", company: "Ай Ти Зон", office:"Маркетинг, стратегийн хэлтэс", position:"Маркетинг менежер", RD:"ЕШ87563245", phoneNumber1:"99665437", phoneNumber2:"92675845", mail:"iT129@gmail.com"},
    { firstName: "Анужин", lastName: "Ану", company: "Ай Ти Зон", office:"Маркетинг, стратегийн хэлтэс", position:"Маркетинг менежер", RD:"ЕШ77885590", phoneNumber1:"96547393", phoneNumber2:"99056785", mail:"iT130@gmail.com"},
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
                <TableColumn key="firstName">Овог</TableColumn>
                <TableColumn key="lastName">Нэр</TableColumn>
                <TableColumn key="company">Компани</TableColumn>
                <TableColumn key="office">Алба хэлтэс</TableColumn>
                <TableColumn key="position">Албан тушаал</TableColumn>
                <TableColumn key="RD">РД</TableColumn>
                <TableColumn key="phoneNumber1">Утасны дугаар 1</TableColumn>
                <TableColumn key="phoneNumber2">Утасны дугаар 2</TableColumn>
                <TableColumn key="mail">Имэйл</TableColumn>
            </TableHeader>
            <TableBody
                items={data ?? []}
                loadingContent={<Spinner />}
            // loadingState={loadingState}
            >
                {(item) => (
                    <TableRow key={item?.firstName}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
