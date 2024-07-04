import { TextField, Button, Box } from '@mui/material';
import { FEED_SORT_BY } from '../../../utils/constant';
import React, { useState } from 'react';
import { SearchSubBox } from '../assets/wrappers/AdminStudentFeedbackWrapper';
import { useSubmit } from 'react-router-dom';

const PersonalSearchContainer = ({onSubmit }) => {
    const submit = useSubmit();
    const initialFormData = {
        search: '',
        sort: '',
        year: '',
        startDate: '',
        endDate: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        submit(e.currentTarget.form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleReset = () => {
        console.log("Initial Form Data:", initialFormData);
        setFormData(initialFormData);
        onSubmit({
            sort: '',
            startDate: '',
            endDate: ''
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
                    <SearchSubBox>
                       
                        <TextField
                            sx={{
                                width: { xs: '250px', sm: '340px' } 
                            }}
                            name='sort'
                            select
                            value={formData.sort}
                            onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {Object.values(FEED_SORT_BY).map((sortOption, index) => (
                                <option key={index} value={sortOption}>{sortOption}</option>
                            ))}
                        </TextField>
                        <TextField
                            sx={{
                                width: { xs: '250px', sm: '340px' }
                            }}
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleChange}
                            label="Start Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            sx={{
                                width: { xs: '250px', sm: '340px' }
                            }}
                            name="endDate"
                            type="date"
                            value={formData.endDate}
                            onChange={handleChange}
                            label="End Date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </SearchSubBox>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        {/* <Button type="submit" variant="outlined" sx={{ mr: 1, width: '130px' }}>Submit</Button> */}
                        <Button type="button" variant="outlined" color='error' sx={{ width: '230px',marginRight:'3%' }} onClick={handleReset}>Reset</Button>
                    </Box>
                </Box>

            </form>
        </>
    );
}

export default PersonalSearchContainer;


