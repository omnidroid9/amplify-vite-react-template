import React from "react";
// import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  console.log("hello consolo 2")
  
  return (
      <div>
        <h1>Welcome to Amplify + Vite + React + TypeScript!</h1>
        <p></p>
      </div>
  );
}

export default App;




// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();

// function App() {
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

//   useEffect(() => {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }, []);

//   function createTodo() {
//     client.models.Todo.create({ content: window.prompt("Todo content") });
//   }

  
//   function deleteTodo(id: string) {
//     client.models.Todo.delete({ id })
//   }

//   return (
//     <main>
//       <h1>My todos</h1>
//       <button onClick={createTodo}>+ werid new</button>
//       <ul>
//         {todos.map((todo) => (
//           <li 
//           onClick={() => deleteTodo(todo.id)}
//           key={todo.id}>{todo.content}
//           </li>
//         ))}
//       </ul>
//       <div>
//         🥳 App successfully hosted. Try creating a new todo.
//         <br />
//         <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
//           Review next step of this tutorial.
//         </a>
//       </div>
//     </main>
//   );
// }

// export default App;
