import React, { useState } from "react";
import { useParams } from "react-router";
import axiosInterceptor from "../axios/axiosInterceptor";
const EditForm = ({
  questionName,
  setQuestionName,
  answer,
  setAnswer,
  first,
  setFirst,
  second,
  setSecond,
  third,
  setThird,
}) => {
  let { id } = useParams();
  let _id = id;

  const api = axiosInterceptor();

  const postSubmit = async (e) => {
    e.preventDefault();
    console.log(answer)
    try {
      const { data } = await api.put(`/update-question/${_id}`, {
        questionName,
        first,
        second,
        third,
        // incorrect_answer,
       answer,
      });
      if (data.error) {
        console.log("err");
      } else {
        window.alert("you Successfully  update this question")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center">Teacher Admin Panel</h2>
          <div className="col-lg-3">
            {/* <Sidebar /> */}
          </div>
          <div className="col-lg-9">
            <div className="dashboard">
              <div className="text-center">
                <form className="question-form" onSubmit={postSubmit}>
                  <h2>Update Questions</h2>
                  <input
                    className="form-control m-2"
                    type="text"
                    name="questionName"
                    value={questionName}
                    onChange={(e) => setQuestionName(e.target.value)}
                    placeholder="Enter Question Name"
                  />
                  {/* set option  */}
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

export default EditForm;
