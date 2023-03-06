import { useState } from 'react';

import Category from '../Category';
import { Container, CarouselItem, Wrapper } from './styles';

type Props = {
  items: string[];
};

const Carousel = ({ items }: Props) => {
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  const handleDragStart = (event: React.MouseEvent) => {
    setDragging(true);
    setDragStartX(event.clientX);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setDragStartX(null);
  };

  const handleDragMove = (event: React.MouseEvent) => {
    if (!dragging || dragStartX === null) {
      return;
    }

    const dragCurrentX = event.clientX;
    const difference = dragStartX - dragCurrentX;
    setTranslateX(translateX - difference);
    setDragStartX(dragCurrentX);
  };

  return (
    <Container>
      <Wrapper
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleDragMove}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {items.map((item) => (
          <CarouselItem key={item}>
            <Category text={item} />
          </CarouselItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Carousel;
