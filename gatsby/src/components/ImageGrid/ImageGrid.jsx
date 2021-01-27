import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import { device } from '../../utils/breakpoints';

const Content = styled(Masonry)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.sm} {
    grid-template-columns: 2fr;
  }
  @media ${device.md} {
    grid-template-columns: 2fr;
  }
  @media ${device.lg} {
    grid-template-columns: 3fr;
  }
  img {
    border: 2px solid blue;
    max-width: 100%;
    width: 160px;
  }
  .blue {
    background: blue;
  }
  .red {
    background: red;
  }
  .green {
    background: green;
  }
  .orange {
    background: orange;
  }
}`;

const Item = styled.div`
  min-width: 100%;
  height: 250px;
  @media ${device.sm} {
    grid-template-columns: 2fr;
    min-width: 50%;
  }
  @media ${device.md} {
    min-width: 50%;
    grid-template-columns: 2fr;
  }
  @media ${device.lg} {
    min-width: 33.33%;
    grid-template-columns: 3fr;
  }
`;

const ImageGrid = () => (
  <>
    <Gallery />
  </>
);

const Gallery = () => {
  const times = [
    { color: 'blue', id: 1 },
    { color: 'orange', id: 2 },
    { color: 'red', id: 3 },
    { color: 'green', id: 4 },
    { color: 'blue', id: 5 },
    { color: 'orange', id: 6 },
    { color: 'red', id: 7 },
    { color: 'green', id: 8 },
    { color: 'blue', id: 9 },
    { color: 'orange', id: 10 },
    { color: 'red', id: 11 },
    { color: 'green', id: 12 },
  ];

  const blue = times.filter((x) => x.color === 'blue');
  const orange = times.filter((x) => x.color === 'orange');
  const all = times.filter(
    (x) =>
      x.color === 'red' ||
      x.color === 'green' ||
      x.color === 'blue' ||
      x.color === 'orange'
  );

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(all);
  }, []);

  const changeArray = (filter) => {
    if (filter === 'blue') {
      setItems(blue);
    }
    if (filter === 'orange') {
      setItems(orange);
    }
    if (filter === 'all') {
      setItems(all);
    }
  };

  return (
    <>
      <div style={{ zIndex: 200000, margin: '100px' }}>
        <button type="button" onClick={() => changeArray('blue')}>
          React
        </button>
        <button type="button" onClick={() => changeArray('orange')}>
          Vue
        </button>
        <button type="button" onClick={() => changeArray('all')}>
          All
        </button>
      </div>
      <Content>
        {items.map((item) => (
          <Item className={item.color} id={item.id} key={item.id} />
        ))}
      </Content>
    </>
  );
};

export default ImageGrid;
