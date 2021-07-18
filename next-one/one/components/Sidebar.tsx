import styled from 'styled-components'
import { Avatar, IconButton, Button } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVerticon from "@material-ui/icons/MoreVert"
import SearchIcon from "@material-ui/icons/Search"
import * as EmailValidator from "email-validator"
const Sidebar = () => {
const createChat = () =>{
    const input = prompt("Email address of the user")
    if(!input) return null;
    if(EmailValidator.validate(input)){
        
    }

}
    return (
        <Container>
            <Header>
<UserAvatar/>
<IconContainer>
<IconButton>
<ChatIcon />
</IconButton>
<IconButton>
    <MoreVerticon/>
</IconButton>
</IconContainer>
            </Header>
            <Search>
            <SearchIcon/>
                <SearchInput placeholder="Search"/>
            </Search>
            <SidebarButton onClick={()=> createChat()}>Start a chat</SidebarButton>
        </Container>
    )
}

export default Sidebar;
const Container = styled.div`

`;
const Search = styled.div`
 display: flex;
 align-items: center;
 padding: 20px;
 border-radius: 2px;
`;

const SidebarButton = styled(Button)`
width: 100%;
&&&{
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
}

`;

const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
background-color: white;
z-index: 1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;
`;
 
const UserAvatar = styled(Avatar)`
cursor: pointer;
margin: 10px;
:hover{
    opacity: 0.8;
}
`;

const IconContainer = styled.div`
margin: 10px;
`;
