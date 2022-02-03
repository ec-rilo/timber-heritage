import { useState } from 'react'
import styled from 'styled-components';

const TextAnimateLi = styled.li`
  display: flex;
  align-items: center;
  color: black;
  transition: color 0.2s;
  cursor: pointer;
  ${({ content, index }) => {
    if (content[index].isActive === false) {
      return `
      color: rgba(0, 0, 0, 0.3);
    `;
    }
  }}
`;

const useTextAnimate = (data) => {
  const [content, setContent] = useState(data);

  const setOneActive = (name) => {
    let contentCopy = [...content];

    contentCopy.forEach((item, index, arr) => {
      if (arr[index].name !== name) {
        arr[index].isActive = false;
      }
    });

    setContent(contentCopy);
  };

  const setAllActive = () => {
    let contentCopy = [...content];

    contentCopy.forEach((item, index, arr) => {
      arr[index].isActive = true;
    });

    setContent(contentCopy);
  };

  return { setOneActive, setAllActive, content };
};

export { useTextAnimate, TextAnimateLi }