import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OnePet = (props) => {
    const [details, setDetails] = useState({})
    const [disabled, setDisabled] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res=>{
            console.log(res)
            setDetails(res.data.results)
        })
        .catch()
    }, [])

    const deletePet = (e, id)=>{
        console.log(id)
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            .catch(err=> console.log(err))
    }

    const likePet = (event, details) =>{
        
        console.log("liked", details)
        details.likes += 1
        console.log("like added")
        axios.put(`http://localhost:8000/api/pets/update/${details._id}`, details)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>console.log(err))
        setDisabled(true)
    }
    
    return (
        <div>
            
        <Link to="/">Home</Link>
        <h2>Details about: {details.name} <button onClick={(e)=> deletePet(e, details._id)}>Adopt {details.name}</button></h2>
        <div className="container">
           
            <p>Pet type: {details.type}</p>
            <p>Description: {details.description}</p>
            <p>Skills: {details.skill1}, {details.skill2}, {details.skill3}</p>
            <p>Likes: {details.likes}</p>
            <button disabled = {disabled} onClick = {(e)=>likePet(e, details)}  className="btn btn-success">Like {details.name}</button>
        </div>
        </div>
    );
};



export default OnePet;