import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationDropDown from './Navigation';
import '../CssFiles/addNewIssues.css'

export default function AddNewIssue() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    
}