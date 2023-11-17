import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios";

function Post() {

    const [nombre,setNombre] = useState("")
    const [autor,setAutor] = useState("")
    const [tiempo, setTiempo] = useState("")

    const insertRecipe=()=>{
        Axios.post('http://localhost:3001/post',{
        nombre: nombre,
        autor: autor,
        tiempo: tiempo
    });
    }

    return(
        <>

            <h2>Post a new recipe</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"  onChange={(e)=>{
                        setNombre(e.target.value);
                        
                    }}/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Autor" onChange={(e)=>{
                        setAutor(e.target.value)
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tiempo</Form.Label>
                    <Form.Control type="text" placeholder="Tiempo" onChange={(e)=>{
                        setTiempo(e.target.value)
                    }}/>
                </Form.Group>

                <Button variant="primary"  onClick={(e)=>{
                    console.log("Nombre: " + nombre)
                    console.log("Tiempo: " + tiempo)
                    console.log("Autor: " + autor)

                    insertRecipe();
                }}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Post