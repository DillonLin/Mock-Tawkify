import styled from "styled-components";
import header_photo from "../assets/images/header_photo.jpg";

export default styled.div`
  padding: 0;
  margin: 0;
  height: 400px;
  grid-column-start: 1; 
  grid-column-end: 5;
  background-image: url(${header_photo});
  background-size: cover;
`;
