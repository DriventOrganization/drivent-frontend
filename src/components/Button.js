import styled from 'styled-components';

export default function Button({ text1, text2 }) { 
  return <ButtonStyle>
    <Text1Style>{`${text1}`}</Text1Style>
    <Text2Style>{`${text2}`}</Text2Style>
  </ButtonStyle>;
}

const ButtonStyle = styled.div`
height: 145px;
width: 145px;
border: 1px solid #cfcfcf;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 24px;
`;

const Text1Style = styled.div`
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
color: #454545;
margin-bottom: 3px;
`;

const Text2Style = styled.div`
font-family: 'Roboto';
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
color: #898989;
`;
