import { CategoryContext } from '@/contexts/CategoryContext';
import { ProductCategoryType } from '@/global/types';
import firstLetterToUppercase from '@/utils/firstLetterToUpperCase';
import { useContext, useState } from 'react';

import { Container, CarouselItem, Wrapper, Item } from './styles';

type Props = {
  items: ProductCategoryType[];
};

const Carousel = ({ items }: Props) => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  const handleClick = (id: number) => {
    setSelectedCategory(id === selectedCategory ? null : id);
  };

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
        {items
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => (
            <CarouselItem
              key={item.id}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <Item>{firstLetterToUppercase(item.name)}</Item>
            </CarouselItem>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Carousel;
