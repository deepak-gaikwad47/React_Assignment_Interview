import React, { useState } from "react";

export default function Skillsdetails({ userData, setUserData }) {
  const [skills, setSkills] = useState([]);
  
  const handleAddSkill = () => {
    setSkills((prevSkills) => [...prevSkills, ""]);
  };
  const handleRemoveSkill = (index) => {
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills.splice(index, 1);
      setUserData((prevUserData) => ({
        ...prevUserData,
        skills: updatedSkills
      }))
      return updatedSkills;
    });
  };

  const handleSkillChange = (index, value) => {
    setSkills((prevSkills) => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index] = value;
      setUserData((prevUserData) => ({
        ...prevUserData,
        skills: updatedSkills
      }))
      return updatedSkills;
    });
  };

  return (
    <>
      <div className="flex w-full p-2">
        <div className="w-full">
          <h1 className="block text-left w-full text-gray-800 text-2xl font-bold mb-6">Skills Details</h1>
          <form action="/" method="post">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700 text-left" htmlFor="name">
                Skills
              </label>
              {skills.map((skill, index) => (
                <div className="flex space-x-6 mb-4" key={index}>
                  <input
                  id="skills"
                    type="text"
                    placeholder="Add Skills"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(index)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSkill}
                className="text-white bg-blue-700 text-left flex hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add Skills
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
