import React, { useState, useEffect } from "react";
import IconSystem from "../../../assets/IconSystem";
import Body from "../../../assets/FontSystem/Body";

import {
  ContainerFather,
  Container,
  BodyAll,
  Close,
  DivStatus,
  Status,
  DivTitle,
  ClientName,
  DivNameManager,
  DivPhoto,
  DivPhotoI,
  CreatedBy,
  DivPages,
  Pages,
  ContainerBorder,
  ClickButton,
  IconTag,
  TabButton,
  Content,
} from "./styles";

import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useClientContext } from "../../../hook/useClientContent";

import ClientDetails from "../ClientsDetails"
import SubjectClient from "../SubjectsClient"

const ModalClientDetails = (props) => {
  const { setModal, id, modalEditClient } = props;
  const { setModalInfo, setId,setModalEditClient } = useClientContext();
  
  // UseEffect Clients //


  const { client: clientList } = useClientContext();
  const client = clientList.filter((item) => item.id === props.id)[0];
  const [statusClient, setStatus] = useState();
  const [clientName, setClientName] = useState();
  const [manager, setManager] = useState();


 useEffect(() => {
    if (props.title === "Client Details") {
      const client = clientList.filter((item) => item.id === props.id)[0];
      setStatus(client.status);
      setClientName(client.client_name);
      setManager(client.user_name);
    }
  }, [id]);
  
  const [activeContent, setActiveContent] = useState(0);
  const { toggleState, setToggleState } = useClientContext();
  const { activeTab, setActiveTab } = useClientContext();
  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };

    // Edit //
    const EditModal = () => {
      setModalInfo(false);
      setModalEditClient(true);
    };

console.log(EditModal)

  // Close page //
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ContainerFather>
      <Container $mode={client.status}>
        <BodyAll>
          <ClickButton>
          <Close onClick={closeModal}>X</Close>
          </ClickButton>

          <DivStatus>
            <Status $mode={client.status}>
            <span onChange={(event) => setStatus(event.target.value)}>
                {client.status}
              </span>
            </Status>
          </DivStatus>

          <DivTitle>
          <DivPhoto>
              <DivPhotoI>
                <Body
                  type={"Body1"}
                  name={client.client
                    .match(/(^\S\S?|\b\S)?/g)
                    .join("")
                    .match(/(^\S|\S$)?/g)
                    .join("")
                    .toUpperCase()}
                />
              </DivPhotoI>
            </DivPhoto>

<DivNameManager>
            <ClientName
            onChange={(event) => setClientName(event.target.value)}>
            {client.client}
            </ClientName>

           <IconTag onClick={EditModal}>
          <IconSystem icon={"Edit"} height={"16px"} width={"16px"} />
          </IconTag>
        
            <CreatedBy>
            Created by on {manager}
            </CreatedBy>
            </DivNameManager>

          </DivTitle>
    
          <DivPages>
            <Pages>
              <TabButton
                $mode={client.status}
                active={activeTab === 0}
                onClick={() => toggleTab(0)}
              >
                Client Details
              </TabButton>
              <TabButton
                $mode={client.status}
                active={activeTab === 1}
                onClick={() => toggleTab(1)}
              >
                Subjects
              </TabButton>
    
            </Pages>
          </DivPages>

          <ContainerBorder>
          <Content active={toggleState === 0}>
              <ClientDetails
                setId={(i) => setId(i)}
                id={id}
                title={"Details Clients"}
              />
            </Content>

            <Content active={toggleState === 1}>
              <SubjectClient
                setId={(i) => setId(i)}
                id={id}
                title={"Subject Clients"}
              />
            </Content>

          </ContainerBorder>
        </BodyAll>
      </Container>
    </ContainerFather>
  );
};

export default ModalClientDetails;