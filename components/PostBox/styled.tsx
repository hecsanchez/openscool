import styled from "styled-components";

const PostBoxWrapper = styled.div`
    border: 2px solid #f5f5f5;
    padding: 20px;
    border-radius: 5px;
    background: #ffffff;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  
   & > input {
     background: #f5f5f5;
     border-radius: 50px;
     padding: 15px;
     height: 42px;
     font-size: 16px;
     border: 0;
     width: 100%;
     box-sizing: border-box;
     cursor: pointer;
   }
`

export default PostBoxWrapper;