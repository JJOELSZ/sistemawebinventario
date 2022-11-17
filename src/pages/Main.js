import styled from "styled-components";
import Login from "../components/Login";
import DashBoard
 from "./DashBoard";
export default function Main({ width }) {
  const MyMain = styled.div`
    width: calc(100% - ${({ ancho }) => (ancho ? "25rem" : "6rem")});
    min-height: 100vh;
    transition: all 0.7s linear;
    margin-left: ${({ ancho }) => (ancho ? "25rem" : "6rem")};
  `;
  return <MyMain ancho={width}>
    <Login />
    <DashBoard />

  </MyMain>;
}
