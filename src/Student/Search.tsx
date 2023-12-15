import React from 'react';
import { STUDENTS } from "./students";
import { useState } from "react";
import Error from "./Error";

const Search = () => {
  const [studentName, setStudentName] = useState("");
  const [date, setDate] = useState("");
  const [eligibleStudents, setEligibleStudents] = useState<string[]>([]);
  const [error, setError] = useState("")


  const checkValidity = (joiningDate: any, validityDate: any) => {
    return new Date(joiningDate) <= new Date(validityDate)
  }

  const handleAddingStudent = () => {
    if (!studentName || !date) {
      return setError("Fields cannot be empty");
    } setError('')

    const varifiedStudent = STUDENTS.find(student => student.name.toLowerCase() === studentName.toLowerCase())

    if (varifiedStudent) {

      // getting unique student check before listing them
      const uniqueStudentSet = new Set(eligibleStudents);

      if (!uniqueStudentSet.has(studentName)) {

        // now checking validity of student
        const isValid = checkValidity(date, varifiedStudent.validityDate);

        if (isValid) {
          setEligibleStudents((prev) => [...prev, studentName]);
        } else setError(`sorry, ${studentName}'s validity has Expired!`);

      } else setError(`${studentName} already added!`);
    } else {
      setError(`${studentName} is not varified!`);
    }

    setStudentName("")
    setDate("")
  }



  return (
    <div className="h-screen grid place-content-center">
      <div className="flex gap-5">
        <input
          type="text"
          className="bg-zinc-200"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="student"
        />
        <input
          type="date"
          className="bg-zinc-200"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="date picker"
        />
      </div>
      <button className="py-2 px-4 bg-green-400 rounded-md my-4" onClick={handleAddingStudent} type="button">
        Add
      </button>
      {error !== '' && <Error error={error} />}
      {eligibleStudents &&
        eligibleStudents.map((name, index) => <div key={index}>{name}</div>)}
    </div>
  )
}

export default Search;
