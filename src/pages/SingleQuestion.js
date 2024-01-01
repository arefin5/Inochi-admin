import { useEffect, useState } from "react";
import {  useParams} from "react-router-dom"
import axios from "axios";
import CreateQuestion from './CreateQuestion'
import { BaseUrl } from "../utils/constant";
import EditForm from "./EditForm";
const SingleQuestion = () => {

  const [questionName, setQuestionName] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
   const[answer,setAnswer]=useState("");

  const [post, setPost] = useState({});
  // state
  const [content, setContent] = useState("");
  let  {id} = useParams();
  let _id=id;
  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);


  const fetchPost = async () => {
    try {
      const { data } = await axios.get(BaseUrl+`/single-post/${_id}`);
        setPost(data)
        setQuestionName(data.questionName)
         setAnswer(data.answer)
       setFirst(data.incorrect_answer[0])
       setSecond(data.incorrect_answer[1])
       setThird(data.incorrect_answer[2])
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <>
      <EditForm 
          setQuestionName={setQuestionName}
          questionName={questionName}          
          answer={answer}
          setAnswer={setAnswer}
          setFirst={setFirst}
          first={first}
          setSecond={setSecond}
          second={second}
          third={third}
          setThird={setThird}


          />
    </>
  );
};

export default SingleQuestion;
