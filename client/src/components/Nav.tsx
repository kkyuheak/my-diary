import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Container = styled.nav`
  height: 60px;
`;

const Wrapper = styled.div`
  max-width: calc(100% - 20%);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  .nav_title {
    font-size: 30px;
    cursor: pointer;
  }
`;

const NavItems = styled.ul`
  position: relative;
  height: 100%;
  font-size: 18px;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;

  .search_btn {
    height: 26px;
    font-size: 25px;
  }

  .user_more_btn {
    height: 26px;
    font-size: 25px;
    cursor: pointer;
  }
`;

const WriteBtn = styled.button`
  background-color: #fff;
  padding: 10px 10px;
  border-radius: 25px;
  border: 1px solid #000;
  font-size: 16px;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const HiddenNav = styled.ul`
  background-color: #b8b8b8;
  height: 200px;
  width: 100%;
  top: 60px;
  position: absolute;
  list-style: none;
  padding: 20px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  li {
    cursor: pointer;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);

  return (
    <Container>
      <Wrapper>
        <p
          className="nav_title"
          onClick={() => {
            navigate("/home");
          }}
        >
          Sdiary
        </p>

        <NavItems>
          <li className="search_btn">
            <FaMagnifyingGlass />
          </li>
          <li>
            <WriteBtn
              onClick={() => {
                navigate("/write");
              }}
            >
              새 일기 작성
            </WriteBtn>
          </li>
          <li
            className="user_more_btn"
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            <FaRegCircleUser />
            <IoMdArrowDropdown />
          </li>
          <HiddenNav className={hidden ? "" : "visible"}>
            <li>로그아웃</li>
          </HiddenNav>
        </NavItems>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Nav;
