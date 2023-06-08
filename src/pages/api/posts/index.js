export default function handler(req, res) {
  return res.status(200).json({
    posts: [
      {
        id: 1,
        title: 'The Art of Web Design',
        category: 'front-end',
        description:
          'Discover the principles and techniques behind creating stunning web designs.',
      },
      {
        id: 2,
        title: 'Mastering JavaScript Fundamentals',
        category: 'front-end',
        description:
          'Dive deep into the core concepts of JavaScript and enhance your coding skills.',
      },
      {
        id: 3,
        title: 'Building Scalable APIs with Node.js',
        category: 'back-end',
        description:
          'Learn how to design and develop robust and scalable APIs using Node.js and Express.',
      },
      {
        id: 4,
        title: 'Introduction to React Hooks',
        category: 'front-end',
        description:
          'Explore the power of React Hooks and revolutionize your React development experience.',
      },
      {
        id: 5,
        title: 'Data Visualization with D3.js',
        category: 'front-end',
        description:
          'Harness the power of D3.js library to create interactive and stunning data visualizations.',
      },
      {
        id: 6,
        title: 'The Complete Guide to CSS Flexbox',
        category: 'front-end',
        description:
          'Master the art of building flexible and responsive layouts using CSS Flexbox.',
      },
      {
        id: 7,
        title: 'Building RESTful APIs with Express',
        category: 'back-end',
        description:
          'Learn how to build RESTful APIs using Express framework for your web applications.',
      },
      {
        id: 8,
        title: 'Advanced CSS Techniques for Modern Designs',
        category: 'front-end',
        description:
          'Level up your CSS skills with advanced techniques and create stunning modern designs.',
      },
      {
        id: 9,
        title: 'Introduction to Python Machine Learning',
        category: 'data-science',
        description:
          'Discover the basics of machine learning using Python and popular libraries.',
      },
      {
        id: 10,
        title: 'Secure Coding Practices for Web Applications',
        category: 'security',
        description:
          'Learn essential security practices to protect your web applications from common vulnerabilities.',
      },
    ],
  });
}
