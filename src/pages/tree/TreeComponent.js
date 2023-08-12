// components/TreeComponent.js

import React, { useState } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

function TreeComponent() {
  const [treeData, setTreeData] = useState([
    { title: 'Folder 1', children: [{ title: 'File 1-1' }, { title: 'File 1-2' }] },
    { title: 'File 2' }
  ]);

  return (
    <div style={{ height: '400px' }}>
      <SortableTree
        treeData={treeData}
        onChange={data => setTreeData(data)}
      />
    </div>
  );
}

export default TreeComponent;
