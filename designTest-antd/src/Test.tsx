import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import "antd/dist/antd.css";

const { Panel } = Collapse;

const RedP = styled(Panel)`
  color: red;
`;

function callback(key: any) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Test() {
  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
    <RedP header="This is panel header 1" key="1">
      <p>{text}</p>
    </RedP>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" disabled>
      <p>{text}</p>
    </Panel>
  </Collapse>
  );
}

export default Test;
