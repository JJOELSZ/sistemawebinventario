import React from "react";
import styled from "styled-components";
import Item_DashBoard from "../components/Item_DashBoard";
import { BsTagsFill } from "react-icons/bs";
/* const list = [
  {
    title: "item",
    icon: "BsTagsFill",
    description: "Description",
  },
]; */
export default function DashBoard() {
  const MyDashBoard = styled.div`
    padding: 4rem 6rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    .dash__title {
      font-size: 3.5rem;
      margin-bottom: 3rem;
    }
    .dash__list {
      cursor: pointer;
      width: 95%;
      max-width: 90rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: 200px;
      place-content: center;
      gap: 2rem;
      color: #fff;

      .dash__list--item {
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        border: 1px solid yellowgreen;
        overflow: hidden;
        transition: all 0.7s linear;
        background-color: darkblue;

        .item__title {
          display: block;
          width: 100%;
          padding: 0.7rem 1rem;
          font-size: 3rem;
        }
        .item__description,
        .item__icon {
          margin-top: 2rem;
          transition: all 0.7s linear;
        }
        &:hover .item__icon {
          transform: scale(1.5);
        }
      }
    }
    @media (max-width: 996px) {
      .dash__list {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  `;
  return (
    <MyDashBoard id="dashboard">
      <h2 className="dash__title"> My Dashboard </h2>
      <div className="dash__list">
        <div className="dash__list--item">
          <div className="item__title"> Item</div>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
        <div className="dash__list--item">
          <h3 className="item__title"> Item</h3>
          <span className="item__icon">
            <BsTagsFill size={40} />
          </span>
          <span className="item__description"> Description </span>
        </div>
      </div>
      {/*  {list.map((item, index) => (
        <Item_DashBoard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))} */}
    </MyDashBoard>
  );
}
