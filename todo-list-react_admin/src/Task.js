import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
  Edit,
  SimpleForm,
  Create,
  required,
  ReferenceInput,
  SelectInput,
  DateInput,
} from 'react-admin';

export const TaskFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search by status" source="status" alwaysOn debounce={500} />
    <TextInput label="Task ID" source="id" debounce={500} />
    <TextInput label="User ID" source="user_id" debounce={500} />
    <TextInput label="Category ID" source="category_id" debounce={500} />
  </Filter>
);

export const TaskList = (props) => (
  <List filters={<TaskFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="description" />
      <DateField source="conclusion_date" />
      <TextField source="status" />
      <TextField source="user_id" />
      <TextField source="category_id" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const TaskEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="description" validate={required()} />
      <DateInput
        source="conclusion_date"
        validate={required()}
        parse={(value) => {
          const date = new Date(value);
          return date.toISOString();
        }}
      />
      <SelectInput
        source="status"
        validate={required()}
        choices={[
          { id: 'pending', name: 'Pending' },
          { id: 'completed', name: 'Completed' },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export const TaskCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="description" validate={required()} />
      <ReferenceInput source="user_id" reference="users" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="category_id" reference="categories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput
        source="conclusion_date"
        parse={(value) => {
          const date = new Date(value);
          return date.toISOString();
        }}
      />
      <SelectInput
        source="status"
        validate={required()}
        choices={[
          { id: 'pending', name: 'Pending' },
          { id: 'completed', name: 'Completed' },
        ]}
      />
    </SimpleForm>
  </Create>
);
