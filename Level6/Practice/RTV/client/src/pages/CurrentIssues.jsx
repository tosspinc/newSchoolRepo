import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationDropDown from "./Navigation";
import '../CssFiles/currentIssues.css';


export default function currentIssues() {
    const [issues, setIssues] = useState([])
    const [visibleCommentIssuedId, setVisibleCommentIssueId] = useState(null)
    const [comments, setComments] = useState({})
    const [showCommentForm, setShowCommentForm] = useState({})
    const [newComment, setNewComment] = useState({})
    const   navigate =  useNavigate()


}