const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'G',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gautam Hegde',
  role: 'Full Stack Developer',
  description:
    ' I\'m a web developer and designer based in Karnataka, India. I\'d really describe myself as a Front-end aficionado and I’ve been started to develop immense interest towards open source . Right now I\'m also trying a hand at Blockchain development. Always receptive to new opportunities and challenges.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/gautam-hegde-0660881b1/',
    github: 'https://github.com/Gautam-Hegde',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Santrupti',
    description:
      'A Web 3.0 based portal that connects wedding/party halls and individuals to the nearest locations where this food can be distributed to those in need',
    stack: ['React', 'TailwindCSS', 'Solidity'],
    sourceCode: 'https://github.com/Gautam-Hegde/Santrupti',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Pingfinity',
    description:
      'Realtime chat application where users can chat with each other in specific rooms',
    stack: ['Express', 'Socket', 'javascript'],
    sourceCode: 'https://github.com/Gautam-Hegde/pingfinity',
    livePreview: 'https://pingfinity.herokuapp.com/',
  },
  {
    name: 'Portfolio',
    description:
      'A portfolio website which showcases photographs and recent works by a freelancer',
    stack: ['javascript', 'mui', 'React'],
    sourceCode: 'https://github.com/Gautam-Hegde/adityabirkodi',
    livePreview: 'https://adityabirkodi.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'NodeJs',
  'React',
  'TailwindCSS',
  'ChakraUI',
  'Material UI',
  'Git',
  'Solidity',
  'Hardhat',
  'C++',
  'MongoDB',
  'Express',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gautamatjob@protonmail.com',
}

export { header, about, projects, skills, contact }
