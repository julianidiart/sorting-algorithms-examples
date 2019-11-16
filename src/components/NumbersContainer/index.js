import React, { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NumbersContext from "../../contexts/NumbersContext";

const NumbersContainer = () => {
  const context = useContext(NumbersContext);
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = result => {
    if (!result.destination) return;

    const items = reorder(
      context.numbers,
      result.source.index,
      result.destination.index
    );

    context.setNumbers(items);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {provided => (
            <div
              className="numbers-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {context.numbers.map((number, index) => (
                <Draggable
                  key={number.id}
                  draggableId={number.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={number.classes}
                    >
                      {number.merging && (
                        <div className="number number--merge-value">
                          {number.mergingValue}
                        </div>
                      )}
                      <div
                        className={
                          snapshot.isDragging
                            ? "number number--dragging"
                            : "number"
                        }
                      >
                        {number.value}
                      </div>
                      {context.showBars && (
                        <div
                          className={
                            snapshot.isDragging
                              ? "number-bar number-bar--dragging"
                              : "number-bar"
                          }
                          style={{ height: `${number.value * 2}px` }}
                        ></div>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default NumbersContainer;
