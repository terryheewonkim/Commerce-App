import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

import styled from "styled-components";

const CheckoutBtn = (props) => {
  const CartCtx = useContext(CartContext);

  return (
    <Wrapper>
      <StyledBtn
        type="button"
        className={CartCtx.items.length === 0 ? "disable" : "glow"}
      >
        {props.text}
      </StyledBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .glow {
    &:before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
    }

    &:active {
      color: #000;
    }

    &:active:after {
      background: transparent;
    }

    &:hover:before {
      opacity: 1;
    }

    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #111;
      left: 0;
      top: 0;
      border-radius: 10px;
    }

    @keyframes glowing {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  }

  .disable {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const StyledBtn = styled.button`
  width: 18rem;
  height: 3rem;
  margin-left: calc((100% - 18rem) / 2);
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-size: 1.2rem;
`;

export default CheckoutBtn;
