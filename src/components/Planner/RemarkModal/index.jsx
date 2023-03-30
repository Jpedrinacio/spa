import React, {useState, useEffect} from 'react'
import Clock from '../../Geral/Input/clock';
import { TagComponent } from '../../Geral/TagComponent';
import ButtonDefault from '../../../assets/Buttons/ButtonDefault'
import SingleSelect from '../../Geral/Input/SingleSelect';
import { useClientContext } from "../../../hook/useClientContent";
import {usePlannerContext} from "../../../hook/usePlannerContext";
import {useSubjectContext} from "../../../hook/useSubjectContent";
import { Container,
     PositionButtonSave,
     PositionButtonCancel, 
     PositionTitle,
     InputPlanner,
     PositionInputs,
     PositionLabel,
     DivClocks,
     Form,
     PositionTags,
     PositionStatus,
     DivDate,
     InputDate,
     DivStart,
     DivFinish,
     LabelDate,
     } from './styles'
import ModalDiscardChanges from '../ModalDiscardChanges';
import ModalSave from '../ModalSuccessfuly';


const RemarkModal = ({ title, setOpenModal }) => {
      const [subjectObj,setSubjectObj]=useState({});
      const {subject: subjectList}=useSubjectContext();
      const subjectOption = subjectList.filter((s)=>s.status==="Progress").map((s)=>({id:s.id,value:s.id,label:s.title}))
      const { client: clientList} = useClientContext();
      const clientOption = clientList.filter((c)=>c.status==="Active").map((c)=>({id:c.id,value:c.id,label:c.client}))
      const [date,setDate]= useState();
      const [timeStart, setTimeStart] = useState();
      const [timeFinish, setTimeFinish] = useState();
      const [guest,setGuest]= useState();
      const {planner: plannerList, setPlanner: setPlannerList, modalEdit, setModalEdit, modalDiscard, setModalDiscard, setModalCreate, setModalRemark} = usePlannerContext();
      const {setModalSave} =  usePlannerContext()


      useEffect(()=>{
        if(modalEdit){
          const plannerEdit = plannerList.filter((p)=>  p.id === modalEdit) [0];
          handleSelectSubject=(plannerEdit.subject_id);
        }
      },[])
      
    const StatusOption = [
      {id: 1, value: "Scheduled", label: "Scheduled"},
      {id: 2, value: "Done", label: "Done"},
      {id: 3, value: "Canceled", label: "Canceled"},
      
    ]

    const handleSelectSubject=(id)=>{
        setSubjectObj(subjectList.filter((s)=>s.id===id)[0])
        console.log(subjectList.filter((s)=>s.id===id)[0])
    }

    const handleSubmit=(e)=>{
 
    }

    const handleModal = (newPlanner) => {
      setModalSave(true)
      setModalCreate(false)
      setModalEdit(false)
    }


    return (
    <Container>
        <PositionTitle>
            {title}
        </PositionTitle>
        <Form onSubmit={handleSubmit}>
            <PositionInputs>
                <SingleSelect 
                    set={(s) => handleSelectSubject(s)}
                    options={subjectOption} 
                    name={"subject"} 
                    label={"Subject"} 
                    sizeHeight={"3.5vh"}
                    sizeSingle={"26vw"} 
                    onChange={(s) => handleSelectSubject(s)}/>
                <PositionLabel>Client Name</PositionLabel>
                <InputPlanner type="text" placeholder="Client Name" value={subjectObj.client} disabled/>
                <PositionLabel>Email</PositionLabel>
                <InputPlanner type="text" placeholder="Email" value={subjectObj.client_email} disabled/>
                <PositionLabel>Business</PositionLabel>
                <InputPlanner type="text" placeholder="Business" value={subjectObj.business} disabled/>
                <PositionLabel>Release Train</PositionLabel>
                <InputPlanner  type="text" placeholder="Business" value={subjectObj.release} disabled/>
            </PositionInputs>
            <DivClocks>
              <DivDate>
                <LabelDate>Date</LabelDate>
                <InputDate type="Date" name="date" onChange={(e)=> setDate(e.target.value)} required></InputDate>
              </DivDate>
              <DivStart>
                <LabelDate>Start</LabelDate>
                <InputDate value={timeStart} type="time" name="time" onChange={(e) => setTimeStart(e.target.value)} required></InputDate>
              
              </DivStart>
              <DivFinish>
                <LabelDate>Finish</LabelDate>
                <InputDate value={timeFinish} type="time" name="time-finish" onChange={(e) => setTimeFinish(e.target.value)} required></InputDate>
              </DivFinish>
              
            </DivClocks>
            <PositionTags>
              <TagComponent options={clientOption}
                  label={"Guests"} 
                  width={"90%"}
                  set={(g)=> setGuest(g)}
                  sizeHeight={"3.5vh"}
               />
            </PositionTags>
            <PositionStatus>
              {modalEdit && ( <SingleSelect set={(c) => console.log()}
                  options={StatusOption}
                  label={"Status"} 
                  sizeSingle={"33%"} 
                  sizeMenuList={"100%"}
                  sizeMenu={"30%"}
                  isDisabled={false}
                  sizeHeight={"3.5vh"}
              />)}
              {!modalEdit && ( <SingleSelect set={(c) => console.log()}
                  options={StatusOption}
                  value={"Scheduled"} 
                  label={"Status"} 
                  sizeSingle={"33%"} 
                  sizeMenuList={"100%"}
                  sizeMenu={"30%"}
                  isDisabled={true}
                  sizeHeight={"3.5vh"}
              />)}
            </PositionStatus>
            <PositionButtonSave onClick={() => handleModal()}>
              <ButtonDefault type={"userSave"} name={"Save"} />
            </PositionButtonSave>
            <PositionButtonCancel onClick={() => setModalDiscard(true)}>
              <ButtonDefault type={"userCancel"} name={"Cancel"} />
            </PositionButtonCancel>
        </Form>
    </Container>
  )
}

export default RemarkModal