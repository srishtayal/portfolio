import React from 'react';

const technologies = [
  { name: 'HTML5', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png' },
  { name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png' },
  { name: 'Java', logo: 'https://cdn.freebiesupply.com/logos/large/2x/java-14-logo-png-transparent.png' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' },
  { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' },
  { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' },
  { name: 'Node', logo: 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png' },
  { name: 'Express', logo: 'https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png' },
  { name: 'Python', logo: 'https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png' },
  { name: 'MongoDB', logo: 'https://images.seeklogo.com/logo-png/48/2/mongodb-logo-png_seeklogo-481256.png?v=1957221918686265648' },
  { name: 'MySQL', logo: 'https://pngimg.com/d/mysql_PNG23.png' }, 
];

const Hexagon = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 p-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain" />
        </div>
      ))}
    </div>
  );
};


export default Hexagon;
