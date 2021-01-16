import styled from 'styled-components'

const ButtonStyled=styled.button`
    cursor: pointer; 
    padding: 9px 14px; 
    border-radius: 5px;
    background-color:#4a77d4;
    display:block;
`
const DeleteButton=styled(ButtonStyled)`
    border-color:red;
    &:hover{
        border-color:black;
        background:red;
    }
    
`
const InputStyled=styled.input`
    background: rgba(0,0,0,0.3);
    border: none;
    outline: none;
    width:${props => props.secondary ? "100%":"40%"};
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 5px;   
`
const HeadingStyled=styled.h2`
    color: purple; 
    text-shadow: 0 0 10px rgba(0,0,0,0.3); 
    letter-spacing:1px; 
    text-align:center;
    margin:1em;
`
const TableStyled=styled.table `
    border-collapse: separate;
    background:#fff;
    border-radius:5px;
    margin:50px auto;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3); 

tbody tr td {
  font-family: 'Open Sans', sans-serif;
  font-weight:900;
  color:#5f6062;
  font-size:13px;
  padding:20px 20px 20px 20px;
  border-bottom:1px solid #e0e0e0;
  
}


`
export {ButtonStyled,DeleteButton,InputStyled,HeadingStyled,TableStyled}