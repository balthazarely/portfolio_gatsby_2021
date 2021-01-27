import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import Arrow from '../../assets/image/png/signature.png';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
  }),
  center: {
    x: 0,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    zIndex: 0,
  }),
};

export default function Slider(props) {
  const { images } = props;

  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const imageIndex = wrap(0, images.length, page);

  return (
    <div
      sx={{
        position: ['relative', null, 'relative'],
        height: '100%',
        width: 'auto',
        overflow: ['hidden', null, 'hidden'],
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
          }}
          sx={{
            position: ['absolute', 'absolute', 'absolute'],
            minHeight: [null, null, '600px'],
            objectFit: 'cover',
          }}
          src={images[imageIndex]}
          // alt={node.name.replace(/-/g, " ").substring(2)}
        />
        })}
      </AnimatePresence>

      <div>
        {images.map((image) => (
          <img
            src={image}
            key={image + 1}
            sx={{ width: '1px', height: '1px' }}
            alt={image}
          />
        ))}
      </div>

      <motion.button
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{ scale: 1.2 }}
        css={{
          position: 'absolute',
          top: '50%',
          left: '3%',
          background: 'none',
          border: 'none',
          outline: 'none',
          zIndex: 2,

          '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0)',
        }}
      >
        <Arrow
          css={{
            height: '28px',
            width: 'auto',
            cursor: 'pointer',
            transform: 'rotate(180deg)',
          }}
          onClick={() => paginate(1)}
        />
      </motion.button>
      <motion.button
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{ scale: 1.2 }}
        css={{
          position: 'absolute',
          top: '50%',
          right: '3%',
          background: 'none',
          border: 'none',
          outline: 'none',
          zIndex: 2,
          '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0)',
        }}
      >
        <Arrow
          css={{ height: '28px', width: 'auto', cursor: 'pointer' }}
          onClick={() => paginate(-1)}
        />
      </motion.button>
    </div>
  );
}
