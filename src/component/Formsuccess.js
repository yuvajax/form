import React from 'react'
import {Table} from 'antd'

function Formsuccess({values}) {
    
    const dataSource = [];
      
    const columns = [
      {
        title: 'FirstName',
        dataIndex: 'firstname',
        key: 'firstname',
      },
      {
        title: 'Last name',
        dataIndex: 'lastname',
        key: 'lastname',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
    ];

    
  return (
      <div>
          <h1>sucess</h1>
      <Table dataSource={values} columns={columns} />;
      </div>
  )
}

export default Formsuccess
