import { Children, cloneElement, useEffect, useState } from 'react';
import s from './Carusel.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PAGE_WIDTH = 240;

export const Carusel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeft = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };
  const handleRight = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className={s.mainContainer}>
      <FaChevronLeft className={s.arrow} onClick={handleLeft} />
      <div className={s.window}>
        <div
          className={s.allPagesContainer}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className={s.arrow} onClick={handleRight} />
    </div>
  );
};
