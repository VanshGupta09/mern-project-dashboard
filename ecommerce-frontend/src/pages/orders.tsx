import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
}

const column: Column<DataType>[] = [
    {
        Header: "ID",
        accessor: "_id"
    },
    {
        Header: "Quantity",
        accessor: "quantity"
    },
    {
        Header: "Discount",
        accessor: "discount"
    },
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Status",
        accessor: "status"
    },
    {
        Header: "Action",
        accessor: "action"
    }
]

const Orders = () => {

    const [rows] = useState<DataType[]>([
        {
            _id: "vhgv",
            amount: 45454,
            quantity: 23,
            discount: 2366,
            status: <span className="red">processing</span>,
            action: <Link to={`/order/vhgv`}>View</Link>
        }
    ])

    const Table = TableHOC<DataType>(column, rows, "dashboard-product-box", "Orders", rows.length > 6)();

    return (
        <div className="container">
            <h1>My Orders</h1>
            {Table}
        </div>
    )
}

export default Orders