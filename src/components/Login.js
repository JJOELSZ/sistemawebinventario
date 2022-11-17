import React from "react";
import styled from "styled-components";

export default function Login({ width }) {
  const ancho = width ? "25rem" : "6rem";

  const MyLogin = styled.div`
    overflow: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .login__formulario {
      color: #fff;
      display: flex;
      flex-direction: column;
      width: 400px;
      max-width: 95%;
      gap: 2rem;
      background-color: darkblue;
      padding: 2rem;
      border-radius: 1rem;
      .login__title {
        margin: 2rem 0;
      }
      .login__input {
        font-size: 1.9rem;
        padding: 10px;
        border-radius: 0.5rem;
        border: none;
        &:focus {
          outline: none;
        }
      }
      .login__button {
        align-self: center;
        padding: 7px 15px;
        cursor: pointer;
        font-size: 1.9rem;
        border: none;
        border-radius: .3rem;

        &:hover {
          background-color: green;
          color: #fff;
        }
      }
    }
  `;
  return (
    <MyLogin ancho={ancho} id="login">
      <form className="login__formulario">
        <h2 className="login__title"> Acceso al sistema </h2>
        <input
          className="login__input"
          type="text"
          name="user"
          placeholder="escriba su usuario"
        />
        <input
          className="login__input"
          type="text"
          name="password"
          placeholder="escriba su contraseña"
        />
        <button className="login__button" type="submit">
          {" "}
          Entrar
        </button>
      </form>
    </MyLogin>
  );
}
