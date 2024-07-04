import React from 'react'
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import customFetch from '../utils/CustomFetch';


export async function action({ params }) {
    try {
        await customFetch.delete(`/dashboard-head/staff/${params.id}`);
        toast.success('Staff deleted !!');
    } catch (error) {
        toast.error(error.response.data.msg);
    }
    return redirect('/dashboard-head/staffs-list');
 
}


const DeleteFeed = () => {
    return (
        <>

        </>
    )
}

export default DeleteFeed