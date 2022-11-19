import styled from "styled-components";
import { AiOutlineIdcard } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { BiSave } from "react-icons/bi";

export default function Products() {
  const MyProviders = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 3rem 2rem;
    .provider__list {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      a {
        padding-bottom: 1rem;
        font-size: 2.5rem;
        border-bottom: 1px solid #ccc;
        text-decoration: none;
        color: #202020;
      }
      a:first-child {
        color: darkblue;
      }
    }
    .provider__form {
      height: 70vh;
      margin-top: 2rem;
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
      .privider__title {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 3rem;
      }
      .provider__card {
        //background-color: darkgray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        margin-bottom: 3rem;
        .provider__group {
          input {
            text-transform: capitalize;
            display: block;
            padding: 1rem;
            border: none;
            border-bottom: 1px solid #ccc;
            width: 100%;
            color: #cdcdcd;
          }
          input:focus {
            outline: none;
          }
        }
      }
      .provider__buttons {
        display: flex;
        justify-content: center;
        gap: 2rem;
        button {
          font-size: 2rem;
          padding: 0.7rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      }
    }
  `;
  return (
    <MyProviders id="products">
      <div className="provider__list">
        <a href="#"> Nuevo producto </a>
        <a href="#"> Buscar producto </a>
        <a href="#"> Productos en almacen </a>
        <a href="#"> Productos por vencimiento </a>
      </div>
      <form className="provider__form">
        <h2 className="privider__title">
          <AiOutlineIdcard size={30} />
          Informacion del producto
        </h2>
        <div className="provider__card">
          <div className="provider__group">
            <input
              type="text"
              className="provider__input"
              placeholder="Stock existencias"
            />
          </div>
          <div className="provider__group">
            <input
              type="text"
              className="provider__input"
              placeholder="Stock minimo"
            />
          </div>
          <div className="provider__group">
            <input
              type="text"
              className="provider__input"
              placeholder="Presentacion del producto"
            />
          </div>
          <div className="provider__group">
            <input
              type="text"
              className="provider__input"
              placeholder="Precio compra"
            />
          </div>
          <div className="provider__group">
            <input
              type="text"
              className="provider__input"
              placeholder="Precio venta"
            />
          </div>
          <div className="provider__group">
            <input
              type="text"
              className="provider__input"
              placeholder="Marca"
            />
          </div>
          <div className="provider__group">
            <input
              type="text"
              className="provider__input"
              placeholder="Modelo"
            />
          </div>
        </div>
        <h2 className="privider__title">
          <FiPhoneCall size={30} />
          Vencimiento del producto
        </h2>
        <div className="provider__card">
          <div className="provider__group">
            <input
              type="date"
              className="provider__input"
              placeholder="telefono"
            />
          </div>
        </div>
        <div className="provider__buttons">
          <button>
            <MdOutlineCleaningServices size={25} />
            Limpiar
          </button>
          <button>
            Guardar
            <BiSave size={25} />
          </button>
        </div>
      </form>
    </MyProviders>
  );
}
