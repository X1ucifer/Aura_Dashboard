import { Table } from 'antd';
import { Button } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (text, record) => (
      <>
        <Button type="link" onClick={() => handleEdit(record)}>Edit</Button>
        <Button type="link" onClick={() => handleDelete(record)}>Delete</Button>
        <Button type="link" onClick={() => handleView(record)}>View</Button>
      </>
    ),
  },
];




const Tables = () => (

  <>

  <Button type="primary">
      Add New
    </Button>

  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
  
  </>
  
);

export default Tables;