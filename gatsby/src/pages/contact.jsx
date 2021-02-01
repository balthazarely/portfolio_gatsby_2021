import React from 'react';
import { navigate } from 'gatsby-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';
import FormButton from '../components/Common/FormButton';

const Layout = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 50px;
  text-align: left;
  color: white;
  form {
    margin-top: 40px;
  }
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 24px;
  }
  form {
  }
  input,
  textarea {
    margin: 24px 0;
    padding: 14px 0;
    font-size: 16px;
    display: block;
    background: transparent;
    border: none;
    border-bottom: 1px solid #b3b3b3;
    max-width: 500px;
    width: 100%;
    /* color: white; */
  }
  textarea {
    height: 150px;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`;

const container = {
  hidden: { rotate: 0 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.35,
    },
  },
};

const itemA = {
  hidden: { opacity: 0, y: 20, rotate: 0 },
  show: { opacity: 1, y: 0, rotate: 0 },
};

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <>
      <SEO title="Contact" />
      <Layout variants={container} initial="hidden" animate="show">
        <motion.h1 variants={itemA}>Contact</motion.h1>
        <motion.p variants={itemA}>
          wanna talk about a project or give me a job (hopefully)?
        </motion.p>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <motion.p variants={itemA}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="your name"
              required
              className="input-text-contact-form"
            />
          </motion.p>
          <motion.p variants={itemA}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="your email"
              required
              className="input-text-contact-form"
            />
          </motion.p>
          <motion.p variants={itemA}>
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="your message"
              required
              className="input-text-contact-form"
            />
          </motion.p>
          <motion.p variants={itemA}>
            {/* <button type="submit">Send</button> */}
            <FormButton type="submit" variants={itemA}>
              send
            </FormButton>
          </motion.p>
        </form>
      </Layout>
    </>
  );
}
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { Link } from 'gatsby';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
// import FormButton from '../components/Common/FormButton';

// const Layout = styled(motion.div)`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 60px 50px;
//   text-align: left;
//   color: white;
//   form {
//     margin-top: 40px;
//   }
//   h1 {
//     font-size: 48px;
//   }
//   p {
//     font-size: 24px;
//   }
//   form {
//   }
//   input,
//   textarea {
//     margin: 24px 0;
//     padding: 14px 0;
//     font-size: 16px;
//     display: block;
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid #b3b3b3;
//     max-width: 500px;
//     width: 100%;
//     color: white;
//   }
//   textarea {
//     height: 150px;
//   }
//   textarea:focus,
//   input:focus {
//     outline: none;
//   }
// `;

// const container = {
//   hidden: { rotate: 0 },
//   show: {
//     rotate: 0,
//     transition: {
//       staggerChildren: 0.075,
//       delayChildren: 0.35,
//     },
//   },
// };

// const itemA = {
//   hidden: { opacity: 0, y: 20, rotate: 0 },
//   show: { opacity: 1, y: 0, rotate: 0 },
// };

// export default function Contact() {
//   return (
//     <Layout variants={container} initial="hidden" animate="show">
//       <motion.h1 variants={itemA}>Contact</motion.h1>
//       <motion.p variants={itemA}>
//         wanna talk about a project or give me a job (hopefully)?
//       </motion.p>
//       <form
//         name="contact"
//         method="post"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="your name"
//           //   variants={itemA}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="your email"
//           //   variants={itemA}
//         />
//         <textarea
//           type="text"
//           name="message"
//           placeholder="your message"
//           //   variants={itemA}
//         />
//         <FormButton type="submit" variants={itemA}>
//           send
//         </FormButton>
//       </form>
//     </Layout>
//   );
// }
