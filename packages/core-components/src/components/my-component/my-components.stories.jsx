import { h } from '@stencil/core';

export default {
  title: 'MyComponent',
  args: {
    first: 'John',
    middle: 'S',
    last: 'Doe',
  },
};

export const Primary = (args) => {
  return <my-component {...args}></my-component>;
};
