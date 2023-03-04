import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../../components/Button';

export default function Hotel() {
  const [price, setPrice] = useState('');
  const [isRemote, setIsRemote] = useState();
  const [includesHotel, setIncludesHotel] = useState();

  function remote() {
    setIncludesHotel();
    setIsRemote(true);
  }

  return (
    <Main>
      <h1>Ingresso e pagamento</h1>
      <p>Primeiro, escolha sua modalidade de ingresso</p>
      <div>
        <ButtonComponent
          onClick={() => setIsRemote(false)}
          text1="Presencial"
          text2="R$ 250"
          color={isRemote === false ? '#FFEED2' : ''}
        ></ButtonComponent>

        <ButtonComponent
          onClick={() => remote()}
          text1="Online"
          text2="R$ 100"
          color={isRemote === true ? '#FFEED2' : ''}
        ></ButtonComponent>
      </div>

      {isRemote === false ? (
        <>
          <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
          <div>
            <ButtonComponent
              onClick={() => setIncludesHotel(false)}
              text1="Sem Hotel"
              text2="+ R$ 0"
              color={includesHotel === false ? '#FFEED2' : ''}
            ></ButtonComponent>

            <ButtonComponent
              onClick={() => setIncludesHotel(true)}
              text1="Com Hotel"
              text2="+ R$ 350"
              color={includesHotel === true ? '#FFEED2' : ''}
            ></ButtonComponent>
          </div>
        </>
      ) : (
        ''
      )}

      {isRemote === true ? (
        <>
          <p>
            Fechado! O total ficou em <strong>$100</strong>. Agora é só confirmar:
          </p>
          <button>RESERVAR INGRESSO</button>
        </>
      ) : (
        ''
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  div {
    display: flex;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    margin-top: 37px;
    margin-bottom: 17px;

    color: #8e8e8e;
  }

  button {
    width: 162px;
    height: 37px;

    border: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;

    background: #e0e0e0;
    color: #000000;
  }
`;
