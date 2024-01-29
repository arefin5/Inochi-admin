import React, { useState } from "react";
import "./CreateQuestionForm.css";
import axiosInterceptor from "../axios/axiosInterceptor";

const QuizCreate = () => {
  const api = axiosInterceptor();

  const [questionName, setQuestionName] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allquestion, setAllQuestion] = useState([]);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [category,setCategory ] = useState("");
   const[answer,setAnswer]=useState("");

   const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const createQuestionSubmitHandler = async (e) => {
    e.preventDefault();
    try {

      const response = await api.post("/create-question", {
        questionName,
        first,
        second,
        third,
        answer,
        category
      });
    //   console.log(response);
      const  data  = response.data;
      if (data.error) {
        window.alert("Question Created UnSuccess");
        console.log(data.error);
      } else {
        window.alert("Question Created Successfully");
        setQuestionName("");
        setFirst("");
        setSecond("");
        answer(" ");
        setThird("");
      }
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* <Sidebar /> */}
          </div>
          <div className="col-lg-9">
            <div className="dashboard">
              <div className="text-center">
                <form
                  className="question-form"
                  onSubmit={createQuestionSubmitHandler}
                >
                  <h2>Creat Questions</h2>
                 
                  {/*  Catagory*/}
                  <label className="form-label">Category</label>
                  <select
              value={category}
              onChange={handleCategoryChange}
              className="form-control m-2"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Vocabulary">N5 Vocabulary Test</option>
              <option value="Grammer">N5 Grammer Test</option>
              <option value="Reading">N5 Reading Test </option>
              <option value="Kanji">N5 Kanji Test</option>
              <option value="FullOne">N5 Full Test 1</option>
              <option value="FullTwo">N5 Full Test 2</option>

            </select>
                  {/*  */}
                  <input
                    className="form-control m-2"
                    type="text"
                    name="questionName"
                    value={questionName}
                    onChange={(e) => setQuestionName(e.target.value)}
                    placeholder="Enter Question Name"
                  />
                  <input
                    className="form-control m-2"
                    type="text"
                    name="correctAnswer"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    placeholder="Enter first option"
                  />

                  <input
                    className="form-control m-2"
                    type="text"
                    name="option"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                    placeholder="Enter second option"
                  />
                  {/*  */}
                  <input
                    className="form-control m-2"
                    type="text"
                    name="incorrectAnswers"
                    value={third}
                    onChange={(e) => setThird(e.target.value)}
                    placeholder="Enter incorrect answers"
                  />
                  {/*  */}
                  <input
                    className="form-control m-2"
                    type="text"
                    name="incorrectAnswers"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter Correct answers"
                  />
                  {/*  */}
                  <button type="submit" className="btn btn-success">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default QuizCreate;
