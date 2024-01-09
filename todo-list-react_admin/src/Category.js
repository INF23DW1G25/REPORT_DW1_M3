import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
  Edit,
  SimpleForm,
  Create,
  required,
} from 'react-admin';

export const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
    <TextInput label="Category Id" source="id" />
  </Filter>
);

export const CategoryList = (props) => (
  <List filters={<CategoryFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Create>
);
