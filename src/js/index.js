// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP
import { css } from 'styled-components';

const isObject = item => (
  item && typeof item === 'object' && !Array.isArray(item));

const deepFreeze = (obj) => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

export const dxc = deepFreeze({
  global: {
    colors: {
      background: '#ffffff',
      brand: '#222222',
      control: '#000000',
      focus: '#FFED00',
      'neutral-1': '#00C9FF',
      'neutral-2': '#64FF00',
      'neutral-3': '#D0011B',
      'neutral-4': '#FFED00',
      'neutral-5': undefined,
      'accent-1': '#FFED00',
      'accent-2': '#00C9FF',
      'accent-3': undefined,
      'status-critical': '#D0011B',
      'status-warning': '#FFED00',
      'status-ok': '#64FF00',
      'status-unknown': '#AAADAE',
      'status-disabled': '#AAADAE',
      'dark-1': '#000001',
      'dark-2': '#333333',
      'dark-3': '#666666',
      'light-1': '#D9D9D9',
      'light-2': '#AAADAE',
    },
    font: {
      family: "'Open Sans', Arial, sans-serif",
      face: undefined,
    },
  },
  anchor: {
    color: '#000000',
  },
  button: {
    extend: css`
      ${props => !props.plain && `
        font-weight: bold;
        border-radius: 0;
      `}
    `,
  },
  checkBox: {
    icon: {
      extend: css`
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        left: 0px;
        width: ${props => props.theme.checkBox.size};
        height: ${props => props.theme.checkBox.size};
      `,
    },
  },
});
