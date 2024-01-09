import {
  Datagrid,
  List,
  TextField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
  Edit,
  SimpleForm,
  Create,
  useRecordContext,
  required,
  EmailField,
} from 'react-admin';

export const UserFilter = (props) => {
  console.log(props.filterValues); 
  return (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
      <TextInput label="User id" source="id" />
    </Filter>
  );
};

const UserTitle = () => {
  const record = useRecordContext();
  return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserList = (props) => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="email" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={required()} />
    </SimpleForm>
  </Create>
);
