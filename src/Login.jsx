import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(){
    
        const [formData, setFormData] = useState({
            username: '',
          email: '',
          password: '',
        });
        const navigate=useNavigate()
        const handleSubmit = (e) => {
          e.preventDefault();
          // Your signup logic here
          
          const {email, password } = formData;
          axios.post('http://localhost:3001/login',{username,email,password})
          .then(result=>{console.log(result)
            if(result.data==="success"){
                navigate('/home')
            }
            
          })
          .catch(err=>console.log(err))
        };
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        return (
          <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              
            </form>
          </div>
        );
      };


export default Login;