import React, { useEffect, useState } from 'react';
import axiosInterceptor from "../axios/axiosInterceptor";

import QuizCreate from '../components/QuizCreate';
import QusetionCard from '../component/QuestionCard';

const CreateQuestion = () => {
  const [questions,setQuestion] = useState([]);
  const api=axiosInterceptor()
  useEffect(() => {
    FechQuestion();
  }, [questions]);

  const FechQuestion = async () => {
    try {
      const { data } = await api.get("/get-all-question");
      setQuestion(data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(questions)
  const handleApprove = async (carouselId) => {
    try {
      // Make a request to approve the carousel with the specified ID
      await api.put(`/aproved-carusel/${carouselId}`);
      // Refresh the carousel data after approval
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };
const handleEdit=async(carouselId)=>{
  try {
    // Make a request to approve the carousel with the specified ID
    await api.put(`/-carusel/${carouselId}`);
    // Refresh the carousel data after approval
    fetchUserPosts();
  } catch (err) {
    console.log(err);
  }
}
  return (
    <div className=''>
      <QuizCreate />
      <div className="row">
                {questions.map((item, index) => (
                  <div key={index} className="">
                <QusetionCard
                data={item}
                handleEdit={() => handleDelete(item._id)}
                handleDelete={() => handleDelete(item._id)}
              />
                </div>
                ))}
            </div>
    </div>
  );
}

export default CreateQuestion;
