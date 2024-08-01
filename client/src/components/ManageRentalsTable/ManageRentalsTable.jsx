import axios from 'axios';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2'

const ManageRentalsTable = ({ data, refetch }) => {

    const handleDelete = async(id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const data = await axios.delete(`https://heritagenest-tau.vercel.app/bid/${id}`)
                if(data.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    const columns = [
        {
            name: 'ID',
            selector: (id, idx) => idx + 1,
            sortable: true,
            maxWidth: "100px"
        },
        {
            name: 'Properties Name',
            selector: (data) => data.propertiesName,
            sortable: true,
            width: "25%"
        },
        {
            name: 'Location',
            selector: (data) => <div>{data.location}</div>,
            sortable: true,
            width: "25%"

        },
        {
            name: 'Price',
            selector: (data) => <div>${data.price / 1000}K</div>,
            sortable: true,
            width: "10%"

        },
        {
            name: 'Minimum Price',
            selector: (data) => <div>${data.minPrice}K</div>,
            sortable: true,
            width: "10%"
        },
        {
            name: 'Maximum Price',
            selector: (data) => <div>${data.maxPrice}K</div>,
            sortable: true,
            width: "10%"

        },
        {
            name: 'Actions',
            selector: (data) => <div>
                <button onClick={() => handleDelete(data.propertiesId)} className='text-2xl flex justify-center items-center ml-3'> <MdDelete /> </button>
            </div>,
            sortable: true
        }
    ]

    return <DataTable columns={columns} data={data} fixedHeader highlightOnHover />
};

ManageRentalsTable.propTypes = {
    data: PropTypes.object,
    refetch: PropTypes.func
};


export default ManageRentalsTable;