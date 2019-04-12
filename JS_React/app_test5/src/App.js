import React from "react";
import './App.css';
import './Sidebar';
import './Main';

import  _ from lodash

// const App = () => {
//   return (
//     <div className="App">
//       <Sidebar />
//       <Main />
//     </div>
//   );
// };



const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      {/* <Sidebar contacts={contacts} /> */}
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;
