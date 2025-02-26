"use client";

import axios from "axios";

export const submitaction = async(formData) => {
    try
    {
        const data = {
            name: formData.get("name"),
            year: formData.get("year"),
            check: formData.get("check") === 'on' ? true : false
        };
        const response = await axios.post('/api/form', data);
        console.log(response.data);
    }
    catch(error)
    {
        console.log(error);
        
    }
    
};