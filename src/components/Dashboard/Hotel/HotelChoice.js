import { useHotelRooms } from '../../../hooks/api/useHotelRooms';
import Splash from '../../Splash';
import styled from 'styled-components';
import RoomContainer from './RoomContainer';
import { useState, useEffect } from 'react';
import Text from '../../Text';
import ConfirmRoom from './ConfirmRoom';

export default function HotelChoice({ hotelId, setBookingSummary, changeInProgress, setChangeInProgress, booking }) {
  const { hotelWithRooms, hotelWithRoomsLoading, getHotelWithRooms } = useHotelRooms(hotelId);
  const [choosenRoom, setChoosenRoom] = useState();

  useEffect(() => {
    getHotelWithRooms();
    setChoosenRoom();
  }, [hotelId]);

  if (hotelWithRoomsLoading) {
    return <Splash loading />;
  }

  return (
    <>
      <Text text={'Ótima pedida! Agora escolha seu quarto'} />
      <RoomsContainer>
        {hotelWithRooms.Rooms.map((room) => (
          <RoomContainer 
            key={room.id} 
            room={room} 
            setChoosenRoom={setChoosenRoom} 
            choosenRoom={choosenRoom} 
            alreadyBooked={booking?.Room.id === room.id}
          />
        ))}
      </RoomsContainer>
      { choosenRoom && 
        <ConfirmRoom 
          booking={booking}
          roomId={choosenRoom} 
          setBookingSummary={setBookingSummary} 
          changeInProgress={changeInProgress} 
          setChangeInProgress={setChangeInProgress}
        />
      }
    </>
  );
}

const RoomsContainer = styled.div`
  margin: 33px 0 46px 0;
  display: flex;
  flex-wrap: wrap;
  max-height: 204px;
  max-width: 830px;
`;
