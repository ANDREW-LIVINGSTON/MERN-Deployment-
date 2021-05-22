import React, {useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router'

const NewPet = () => {
    const [forminfo, setforminfo] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })
    const [errors, seterrors]= useState({})

    const changeHandler = (e)=>{
        console.log("changing inputs")
        console.log(e.target.name)
        setforminfo({
                ...forminfo,
                [e.target.name]: e.target.value
            })
        
        }
        
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/create", forminfo)
            .then(res=>{
                console.log(res)
                if(res.data.errors){
                    seterrors(res.data.errors)
                }else{
                    navigate("/")
                }

            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div className="container">
            <Link to="/">Home</Link>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <p className="text-danger">{errors.name? errors.name.message:""}</p>
                    <label htmlFor="">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <p className="text-danger">{errors.type? errors.type.message:""}</p>
                    <label htmlFor="">Type:</label>
                    <input onChange={changeHandler} type="text" name="type" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <p className="text-danger">{errors.description? errors.description.message:""}</p>
                    <label htmlFor="">Description:</label>
                    <input onChange={changeHandler} type="text" name="description" id="" className="form-control"/>
                </div>
                <h3>Skills (optional)</h3>
                <div className="form-group">
                    <p className="text-danger">{errors.skill1? errors.skill1.message:""}</p>
                    <label htmlFor="">Skill 1:</label>
                    <input onChange={changeHandler} type="text" name="skill1" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <p className="text-danger">{errors.skill2? errors.skill2.message:""}</p>
                    <label htmlFor="">Skill 2:</label>
                    <input onChange={changeHandler} type="text" name="skill2" id="" className="form-control"/>
                </div>
                <div className="form-group">
                <p className="text-danger">{errors.skill3? errors.skill3.message:""}</p>
                    <label htmlFor="">Skill 3:</label>
                    <input onChange={changeHandler} type="text" name="skill3" id="" className="form-control"/>
                </div>
                <input type="submit" value="Add Pet"/>
            </form>
        </div>
    );
};



export default NewPet;