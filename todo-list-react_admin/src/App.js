// No arquivo App.js

import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { UserList, UserEdit, UserCreate } from "./Users";
import { CategoryList, CategoryEdit, CategoryCreate } from "./Category";
import { TaskList, TaskEdit, TaskCreate } from "./Task"; 


const dataProvider = lb4Provider("http://localhost:3000/");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      options={{ label: "Users" }}
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name="categories"
      options={{ label: "Categories" }}
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource
      name="tasks"
      options={{ label: "Tasks" }}
      list={TaskList}
      edit={TaskEdit}
      create={TaskCreate}
    />
  </Admin>
);

export default App;
