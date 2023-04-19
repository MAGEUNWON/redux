import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어 있는 객체
  changeInput,
  insert,
  toggle,
  remove
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // 비구조화 할당을 통해 todos를 분리하여
  // state.todos.input 대신 todos.input을 사용
  ({todos}) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);