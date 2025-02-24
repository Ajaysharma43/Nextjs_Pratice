"use server"

import axios from "axios"

export const SubmitForm = async (e) => {
    const Form = {
        Firstname: e.get('Firstname'),
        Lastname: e.get('Lastname'),
        email: e.get('email'),
        date: e.get('date'),
        passoword: e.get('passoword'),
        ConfirmPassword: e.get('ConfirmPassword'),
    }
    
    const response = await axios.post('/api/Form' , {Data : Form} )
}