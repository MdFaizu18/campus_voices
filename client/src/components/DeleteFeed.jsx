import React from 'react'
import customFetch from '../utils/CustomFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';


export async function action({ params }) {
    try {
        await customFetch.delete(`/dashboard-student/feedbacks/${params.id}`);
        toast.success('Feedback deleted successfully');
    } catch (error) {
        toast.error(error.response.data.msg);
    }
    return redirect('/dashboard-student/stuffs');
}


const DeleteFeed = () => {
  return (
    <>

    </>
  )
}

export default DeleteFeed