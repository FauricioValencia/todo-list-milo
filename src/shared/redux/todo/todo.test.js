import { tasksActions } from ".";
import todoActionType from "./actions.types.js";

const takstToTest = {
  title: " title test",
  state: false,
  uid: "2o212kp",
  time: 1234
};

describe("todo actions", () => {
  it("should create an action to create task", () => {
    const expectedAction = {
      type: todoActionType.CREATE_TASK,
      payload: takstToTest
    };
    const response = tasksActions.createTask(takstToTest);
    expect(response).toEqual(expectedAction);
  });
});
