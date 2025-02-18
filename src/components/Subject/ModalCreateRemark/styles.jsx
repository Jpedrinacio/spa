import styled from "styled-components";

// Div Father
export const ContainerCentral = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 2;
  justify-content: end;
  @media (min-width: 100px) and (max-width: 500px) {
    grid-column: 1;
    grid-row: 1;
    display: grid;
    position: relative;
    top: 0px;
    left: 0;
    justify-content: start;
  }
`;

// Div Title

export const DivHeader = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-row: 1;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  width: 100%;
  margin: 7%;
  @media (min-width: 50px) and (max-width: 500px) {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  margin: 7%;
  @media (min-width: 50px) and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

/// Button Close

export const DivClose = styled.div`
  align-items: center;
  display: grid;
  width: 50%;
  @media (min-width: 50px) and (max-width: 500px) {
  }
`;

export const Close = styled.button`
  background-color: #2b2b2b;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: grid;
  width: 100%;
  height: 20px;
  :hover {
    opacity: 0.8;
  }
`;

// Children

export const Container = styled.div`
  grid-column: 2;
  width: 80%;
  min-width: 400px;
  height: 100%;
  display: grid;
  background: #fff;
  border-left: 16.56px solid #007bff;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  grid-template-rows: 15% 60% 25%;
  @media (min-width: 100px) and (max-width: 502px) {
    height: 81vh;
    width: 100%;
    flex-direction: flex-start;
    position: relative;
  }
`;

// Div Content

export const Form = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 85%;
  padding-left: 7%;
  grid-row: 2;
  grid-template-columns: 30% 30% 40%;
  grid-template-rows: 20% auto;
  @media (min-width: 1600px) {
  }
`;

export const Input = styled.input`
  height: ${(props) => props.heightInput || "28px"};
  width: ${(props) => props.widthInput || "100%"};
  border-radius: 5px;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  background-color: ${(props) => props.backgroundInput || " rgba(0, 0, 0, 0) "};
  display: block;
  position: relative;
  margin-top: 5px;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

// Divs

export const DivDate = styled.div`
  grid-row: 1;
  width: 100%;
  grid-column: 1;
`;

export const DivDateReturn = styled.div`
  grid-row: 1;
  width: 100%;
  grid-column: 2;
`;

export const DivText = styled.div`
  grid-row: 3;
  width: 370%;
`;

// Button Save and Cancel

export const DivButton = styled.div`
  justify-content: center;
  display: grid;
  position: relative;
  align-items: center;
  width: 100%;
  height: 80%;
  grid-row: 3;
`;

export const PositionButtonCancel = styled.div``;

export const ClickButton = styled.div`
  display: block;
`;
export const DivTitle = styled.div`
  width: 312%;
  height: 100%;
  display: grid;
  grid-row: 2;
`;

export const TextArea = styled.textarea`
  height: ${(props) => props.heightInput || "130px"};
  width: ${(props) => props.widthInput || "83%"};
  border-radius: 5px;
  border: 2px solid ${(props) => (props.required ? "#b03535" : "#888C95")};
  background-color: ${(props) => props.backgroundInput || " #fff"};
  display: block;
  resize: none;
  position: relative;
  @media (min-width: 1355px) and (max-width: 1824px) {
    height: 100px;
  }
  @media (min-width: 1824px) and (max-width: 2000px) {
    height: 130px;
  }
`;
