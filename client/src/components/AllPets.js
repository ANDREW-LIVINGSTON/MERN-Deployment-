import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const AllPets = () => {
    const [allPets, setAllPets] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
        .then(res=>{
            console.log(res)
            setAllPets(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])
    
    return (
        <div>
        <Link to="/pets/new">add a pet to the shelter</Link>   
        <h2>These pets are looking for a good home</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
      
                    </tr>
                </thead>
  
                <tbody>
                    {allPets.map((pet, i)=>{
                        return (
                        <tr key={i}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td><Link to={`/pets/${pet._id}`}>details</Link> <Link to={`/pets/edit/${pet._id}`}>edit</Link></td>
                    </tr> 
                        )
                })

                }
                </tbody>
            </table>
        </div>
    
      
    );
};



export default AllPets;