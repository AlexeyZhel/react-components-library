import React from 'react';

export interface TestComponentProps {
  text?: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ text }) => <div>{text ? text : 'Test Component'}</div>;
