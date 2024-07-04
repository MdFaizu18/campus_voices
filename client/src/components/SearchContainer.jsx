import { TextField, Button, Box, Autocomplete } from '@mui/material';
import { FEED_SORT_BY, YEAR_STATUS } from '../../../utils/constant';
import React, { useState } from 'react';
import { SearchSubBox } from '../assets/wrappers/AdminStudentFeedbackWrapper';
import { useSubmit } from 'react-router-dom';

const SearchContainer = ({ onSubmit }) => {
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

    const handleReset = () => {
        setFormData(initialFormData);
        onSubmit({
            search: '',
            sort: '',
            year: '',
            startDate: '',
            endDate: ''
        });
    };

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
                    <SearchSubBox>
                     <TextField
                            sx={{ width: '220px' }}
                            name="search"
                            value={formData.search}
                            onChange={handleChange}
                            label="Search"
                        /> 
                       
                        <TextField
                            sx={{ width: '220px' }}
                            name='year'
                            select
                            value={formData.year}
                            onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            <option value="">All</option>
                            {Object.values(YEAR_STATUS).map((yearOption, index) => (
                                <option key={index} value={yearOption}>{yearOption}</option>
                            ))}
                        </TextField>
                        <TextField
                            sx={{ width: '220px' }}
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
                            sx={{ width: '220px' }}
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            sx={{ width: '220px' }}
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
                        <Button type="button" variant="outlined" color='error' sx={{ width: '190px' }} onClick={handleReset}>Reset</Button>
                    </Box>
                </Box>
            </form>
        </>
    );
}

export default SearchContainer;
