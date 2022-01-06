import styled from "styled-components";
import { useState } from "react";
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;    

const Wrapper = styled.div`
    padding: 20px;
    width: 35%;
    background-color: white;
    ${mobile({width:"75%"})};
`;

const Title = styled.div`
    font-size: 24px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Input = styled.input`
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 20%;
    border: none;
    padding: 15px 20px;
    background-color: lightblue;
    color: white;
    cursor: pointer;
    ${mobile({width:"50%"})};
`;

const LoginPage = ({ Login }) => {

    const [details, setDetails] = useState({username:"", password:""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details);
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={submitHandler}>
                    <Input placeholder="username" onChange={(event)=>{setDetails({...details, username:event.target.value})}}/>
                    <Input placeholder="password" onChange={(event)=>{setDetails({...details, password:event.target.value})}}/>
                    <Button>LOGIN</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LoginPage;