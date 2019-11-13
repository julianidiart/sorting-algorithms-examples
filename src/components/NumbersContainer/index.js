import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const NumbersContainer = () => {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    generateRandomNumbers();
    // eslint-disable-next-line
  }, []);
  const generateRandomNumbers = () => {
    const numbersArray = [];
    for (let i = 0; i < 10; i++) {
      numbersArray.push({ id: uniqueID(), value: getRandomNumber(0, 99) });
    }
    setNumbers(numbersArray);
  };
  const uniqueID = () => {
    function chr4() {
      return Math.random()
        .toString(16)
        .slice(-4);
    }
    return (
      chr4() +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      "-" +
      chr4() +
      chr4() +
      chr4()
    );
  };
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = result => {
    if (!result.destination) return;

    const items = reorder(
      numbers,
      result.source.index,
      result.destination.index
    );

    setNumbers(items);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="numbers-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {numbers.map((number, index) => (
                <Draggable
                  key={number.id}
                  draggableId={number.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className={
                        snapshot.isDragging
                          ? "number number--dragging"
                          : "number"
                      }
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {number.value}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="numbers-container">
        <button className="button" onClick={generateRandomNumbers}>
          Generate random numbers
        </button>
      </div>
    </>
  );
};

export default NumbersContainer;
