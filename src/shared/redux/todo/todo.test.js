import { tasksActions, tasksReducer } from ".";
import todoActionType from "./actions.types.js";

const takstToTest = {
  title: " title test",
  state: false,
  uid: "2o212kp"
};
const tasksListToTest = [
  takstToTest,
  {
    title: " 2 title test",
    state: true,
    uid: "1234"
  }
];

describe("todo actions", () => {
  it("should create an action to create task", () => {
    const expectedAction = {
      type: todoActionType.CREATE_TASK,
      task: takstToTest
    };
    expect(tasksActions.createTask(takstToTest)).toEqual(expectedAction);
  });
});

// describe("todo reducers", () => {
//   it("should update a task", () => {
//     const todoToUpdate = {
//       ...takstToTest,
//       state: true
//     };
//     const expectAction = {
//       type: todoActionType.UPDATE_TASK,
//       task: todoToUpdate
//     };
//     expect(
//       tasksReducer(
//         {
//           data: tasksListToTest
//         },
//         {
//           type: todoActionType.UPDATE_TASK,
//           task: todoToUpdate
//         }
//       )
//     ).toMatchObject({
//       data: [...tasksListToTest].map(tk => {
//         if (tk.uid === todoToUpdate.uid) {
//           return todoToUpdate;
//         }
//         return tk;
//       })
//     });
//   });
// });
