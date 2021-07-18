import styled from "styled-components"
import Head from "next/head"
import {Button} from "@material-ui/core"

const Login = () => {
    return (
        <Container>
            <Head>
                <title>  Login In</title>
            </Head>
            <LoginContainer>
                <Logo
                src=""
                />
                <Button>Sign In</Button>
            </LoginContainer>
            
        </Container>
    )
}

export default Login;

const Container = styled.div`
display: flex;
flex-direction: column;
`;
const LoginContainer = styled.div`

`;
const Logo = styled.img`

`;
