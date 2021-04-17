import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #36393f;
  flex: 1 0 auto;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background: #202225;
  flex: 0 0 auto;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #202225;
  flex: 0 0 auto;
  height: 80px;
`;

export const FormSpan = styled.span`
  font-size: 2.5rem;
  margin: 1rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
`;

export const FormGroup = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  color: #99aab5;
  background: #23272a;
  margin: 1rem;
  font-size: 1.125rem;
  padding: 7px 16px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  place-items: center;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #43b581;
  margin: 1rem;
  font-size: 1.125rem;
  padding: 7px 7px;
  &:hover {
    background: rgba(67, 181, 129, 0.9);
  }
  &:focus {
    outline: none;
  }
`;

export const SideButton = styled.button`
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #43b581;
  font-size: 1rem;
  padding: 7px;
  width: 80px;
  margin-bottom: 1rem;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(67, 181, 129, 0.9);
  }
  &:focus {
    outline: none;
  }
`;

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: calc(100vw - 100px);
  flex: 1 0 auto;
  color: #fff;
  table-layout: fixed;
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 7px;
  background: #202225;

  &:first-child {
    text-align: center;
    width: 40%;
  }
  &:last-child {
    text-align: center;
    width: 5%;
  }
`;

export const TableRow = styled.tr`
  font-size: 1.1rem;

  &:nth-child(even) {
    background: #202225;
  }
`;
export const MenuTableContainer = styled.div`
  display: flex;
  flex-direction: 1 0 auto;
`;
