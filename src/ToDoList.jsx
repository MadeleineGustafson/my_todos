import React, { useState } from "react";

import { GoChevronDown, GoChevronUp } from "react-icons/go";

import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <BigDiv>
      <Title>To dos</Title>
      <ContainerDiv>
        <SmallDiv>
          <InputField
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <RoundButton onClick={addTask}>Add</RoundButton>
        </SmallDiv>
        <Task>
          <ol>
            {tasks.map((task, index) => (
              <List key={index}>
                <TaskSpan>{task}</TaskSpan>

                <OtherButton onClick={() => moveTaskUp(index)}>
                  <UpIcon />
                </OtherButton>
                <OtherButton onClick={() => moveTaskDown(index)}>
                  <DownIcon />
                </OtherButton>
                <OtherButton onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </OtherButton>
              </List>
            ))}
          </ol>
        </Task>
      </ContainerDiv>
    </BigDiv>
  );
}

export default ToDoList;

const Title = styled.h1`
  font-size: 2rem;

  color: black;
`;

const BigDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SmallDiv = styled.div``;

const Task = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
`;

const InputField = styled.input`
  width: 300px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 1rem;
`;

const RoundButton = styled.button`
  border-radius: 20px;
  padding: 10px;
  border: none;
  margin: 1rem;
  color: white;
  background: black;
  font-weight: bold;
`;

const OtherButton = styled.button`
  background: none;
  border: none;
`;

const TaskSpan = styled.span`
  flex: 1;
  word-break: break-word;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding-bottom: 1rem;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteIcon = styled(RxCross1)`
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

const UpIcon = styled(GoChevronUp)`
  font-size: 1.5rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

const DownIcon = styled(GoChevronDown)`
  font-size: 1.5rem;

  &:hover {
    transform: translateY(2px);
  }
`;
