import styled from "styled-components";
import { MdOutlineInventory } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSellCard } from "react-icons/gi";
import { IoIosLogIn } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MySlider = styled.div`
  position: fixed;
  width: ${({ ancho }) => (ancho ? "25rem" : "6rem")};
  height: 100vh;
  background-color: darkblue;
  color: #fff;
  //transition: width 0.7s linear;
  overflow: hidden;

  .slider__header {
    white-space: nowrap;
    position: relative;
    padding: 2rem;
    display: flex;
    align-items: center;

    .slider__hamburger {
      width: 6rem;
      text-align: center;
      position: absolute;
      top: 2rem;
      right: 0;
      transition: all 0.3s linear;
      background-color: darkblue;
    }
    .slider__logo {
      transition: opacity 0.7s linear;
      opacity: ${({ ancho }) => (ancho ? "1" : "0")};
    }
    .slider__title {
      opacity: ${({ ancho }) => (ancho ? "1" : "0")};
    }
  }

  .slider__body {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;

    .slider__list {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      list-style: none;
      gap: 3rem;

      a {
        width: 8rem;
        text-decoration: none;
        color: #fff;
        font-size: 2.2rem;
        white-space: nowrap;
        text-align: center;
        transition: all 0.5s ease-in-out;
        padding: 1rem;
        cursor: pointer;
        border-radius: 2rem;
        &:hover {
          background-color: ${({ ancho }) => (ancho ? "white" : "")};
          color: ${({ ancho }) => (ancho ? "darkblue" : "")};
        }
        p {
          opacity: ${({ ancho }) => (ancho ? "1" : "0")};
          // transition: opacity 0.5s linear;
          font-size: 1.5rem;
        }
      }
    }
    .slider__close {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
export default function SliderInventario({ handleWidth, width }) {
  return (
    <MySlider ancho={width}>
      <div className="slider__header">
        <span className="slider__logo">
          <MdOutlineInventory size={40} />
        </span>
        <span className="slider__title"> Sistema Inventario</span>
        <span className="slider__hamburger">
          <GiHamburgerMenu size={40} onClick={handleWidth} />
        </span>
      </div>
      <div className="slider__body">
        <ul className="slider__list">
          <a href="#login">
            <IoIosLogIn size={40} />
            <p>Login</p>
          </a>
          <a href="#dashboard">
            <MdDashboard size={40} />
            <p>Dasboard</p>
          </a>
          <a href="#products">
            <GiSellCard size={40} />
            <p>Prouctos</p>
          </a>
          <a href="#providers">
            <FaShippingFast size={40} />
            <p>Proveedores</p>
          </a>
          <a>
            <GrLogout size={40} />
            <p>Logout</p>
          </a>
        </ul>
      </div>
    </MySlider>
  );
}
