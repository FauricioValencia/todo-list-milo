import { tasksActions } from ".";
import todoActionType from "./actions.types.js";

const takstToTest = {
  title: " title test",
  state: false,
  uid: "2o212kp"
};

describe("todo actions", () => {
  it("should create an action to create task", () => {
    const expectedAction = {
      type: todoActionType.CREATE_TASK,
      task: takstToTest
    };
    expect(tasksActions.createTask(takstToTest)).toEqual(expectedAction);
  });
});
