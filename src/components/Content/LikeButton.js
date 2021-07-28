import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LikeButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    // If button is ever removed, or if we rapidly add one item after another, we want to clear the old timer and make sure a new timer is set
    return () => {
      clearTimeout(timer);
    };
  }, [isClicked]);

  const clickHandler = (e) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  };

  return (
    <Wrapper
      onClick={clickHandler}
      style={{ animation: isHighlighted ? "bump 300ms ease-out" : "" }}
    >
      <FontAwesomeIcon
        icon={faHeart}
        style={{ color: isClicked ? "#faa0a0" : "black" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.75);
  background: #fff;
  cursor: pointer;
  z-index: 10;

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default LikeButton;
