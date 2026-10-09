import { ProjectsInfoT } from "../interfacesTypes/types";

export const projectsInfo: ProjectsInfoT[] = [
  {
    id: "69f43843-1049-4pwc-9ba7-606ae54a0502",
    year: '2026',
    name: "Simon Dice",
    hosting: "netlify",
    url: "https://juego-simon-dice-react.netlify.app/",
    description:
      "El clásico juego de simón dice pero con 4 niveles de dificultad y hasta 4 jugadores. Puedes ver número de jugadores, puntajes, turno en curso y turno siguiente, número de ronda",
    tags: ["Typescript", "React", "Context", "Tailwind", "Github", "lucide icons"],
    techs: ["react", "context", "typescript", "tailwind", "react icons", 'SweetAlert2', 'canvas-conffetti'],
    category: ['juego'],
    img: "/img/sites/simon-dice.png",
    github: {
      front: "https://github.com/CarlosTrini/2026-SIMON-DICE-REACT",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "623g334d-3ece-40e1-68c9-9e5129674732",
    year: '2026',
    name: "Arquitectos MX",
    hosting: "netlify",
    url: "https://despacho-arquitectos-mx.netlify.app/",
    description:
      "Portal de arquitectura con diferentes secciones: proyectos, servicios, proceso, equipo, blog y contacto. Los posts de blog y proyectos son creados con Markdown para posteriormente ser consumidos y mostradas.  Puedes dar click y leer las notas, puedes también ir a la página donde encontrar solo las notas creadas con el tema que elijas",
    category: ['sitio web', 'blog'],
    tags: [
      "Typescript",
      "Astro",
      "Markdown",
      "Tailwind",
      "Lucide icons",
      "swiper",
      "Github",
      "getStaticPaths",
      "React",
      "picsum"
    ],
    techs: [
      "tailwind",
      "react",
      "astro",
      "typescript",
    ],
    img: "/img/sites/arquitectos.png",
    github: {
      front:
        "https://github.com/CarlosTrini/2026-ARQUITECTOS-MX-ASTRO",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "623g334d-3ece-40e1-80c9-9e5142278132",
    year: '2024',
    name: "Online Academy",
    hosting: "netlify",
    url: "https://online-academy-trinidad.netlify.app/",
    description:
      "Sitio de cursos online en el que se puede registrar al usuario e iniciar sesión, simular compras de cursos, visitar cursos por categorias, visitar perfiles de profesores y perfiles de cada curso, agregar comentarios con calificación al curso, el usuario tiene un perfil donde puede agregar tarjetas (FAKE) de pago, cambiar foto de perfil, ver sus cursos adquiridos y agregar a favoritos... cuenta con persitencia. Todo es desde localStorage",
    category: ['sitio web', 'blog', 'e-commerce-dummy'],
    tags: [
      "Typescript",
      "React Ts",
      "React Router Dom /sites/v6.png",
      "SweetAlert",
      "Github",
    ],
    techs: [
      "ant",
      "react",
      "reactts",
      "sweetalert",
    ],
    img: "/img/sites/onlineAcademy.png",
    github: {
      front:
        "https://github.com/CarlosTrini/Online-Academy",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "623g334d-3ece-40e1-80c9-9e5142938732",
    year: '2026',
    name: "Pets Vet ",
    hosting: "netlify",
    url: "https://petsvet.netlify.app/",
    description:
      "Landing page para veterinaria Pets Vet. Responsive con formulario de contacto y sección de FAQ",
    category: ['landingPage'],
    tags: [
      "Typescript",
      "React Ts",
      "Astro",
      "Tailwind",
      "Github",
    ],
    techs: [
      "tailwind",
      "react",
      "astro",
      "typescript",
    ],
    img: "/img/sites/petsvet.png",
    github: {
      front:
        "https://github.com/CarlosTrini/2026-PETS-VET",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "623g334d-3ece-40e1-68c9-9e5142938732",
    year: '2026',
    name: "Vertice Global",
    hosting: "netlify",
    url: "https://vertice-global-portal.netlify.app/",
    description:
      "portal de noticias con diferentes tópicos/categorías. Las notas son creadas con Markdown para posteriormente ser consumidas y mostradas. El sitio cuenta con diferentes secciones de tópicos. Puedes dar click y leer las notas, puedes también ir a la página donde encontrar solo las notas creadas con el topico que elijas. Página de nosotros y avisos de privacidad",
    category: ['sitio web', 'blog'],
    tags: [
      "Typescript",
      "Astro",
      "Markdown",
      "Tailwind",
      "Lucide icons",
      "swiper",
      "Github",
      "getStaticPaths"
    ],
    techs: [
      "tailwind",
      "react",
      "astro",
      "typescript",
    ],
    img: "/img/sites/verticeglobal.png",
    github: {
      front:
        "https://github.com/CarlosTrini/2026-VERTICE-GLOBAL",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "69f43845-1372-441c-9ba7-606ae54a4852",
    year: '2026',
    name: "Café Komorebi",
    hosting: "netlify",
    url: "https://komorebi-cafeshop.netlify.app/",
    description:
      "Landing page para café Komorebi. Diseño minimalista y elegante",
    category: ['landingPage'],
    tags: ["Typescript", "Astro", "Markdown", "Tailwind", "Lucide icons", "swiper", "Github"],
    techs: ["html", "css", "js"],
    img: "/img/sites/komorebi.png",
    github: {
      front: "https://github.com/CarlosTrini/2026-CAFETERIA-ASTR",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "69f43843-1049-441c-9ba7-606ae54a0502",
    year: '2024',
    name: "Juego Rick&Morty",
    hosting: "netlify",
    url: "https://rickymortygame.netlify.app/",
    description:
      "Juego de memorama de la caricatura de Rick & Morty con tres niveles de dificultad. Las imágenes son dinámicas en cada juego ya que son traidas desde la misma API de rickymorty",
    category: ['juego'],
    tags: ["HTML", "Javascript", "SCSS", "SweetAlert", "Github"],
    techs: ["html", "css", "js"],
    img: "/img/sites/rym.png",
    github: {
      front: "https://github.com/CarlosTrini/RickyMorty",
      back: "",
    },
    size: '1920 × 1080'
  },

  // {
  //   id: "258d600d-e20b-4f44-b26c-44a49d1d49ff",
  //   year: '2021',
  //   name: "MyFeeling",
  //   hosting: "vercel y firebase",
  //   url: "https://my-feeling-carlostrini.vercel.app/",
  //   description:
  //     "MyFeeling es un sitio en el que te puedes registrar, iniciar sesión, publicar historias breves con una imagen de portada, dar like y comentar tus publicaciones y las de otros. Tambien puedes visitar los perfiles de otros usuarios",
  //   tags: [
  //     "react",
  //     "/sites/nextjs.png",
  //     "server-Side-Props",
  //     "firebase-database",
  //     "firebase-auth",
  //     "firebase-storage",
  //     "css-module",
  //     "javascript",
  //     "react-useContext",
  //     "SweetAlert",
  //     "Github",
  //   ],
  //   techs: ["react", "nextjs", "firebase", "css", "sweetalert"],
  //   img: "/img/sites/myfeeling.png",
  //   github: {
  //     front: "https://github.com/CarlosTrini/myFeeling",
  //     back: "",
  //   },
  //   size: '1879 × 919'
  // },
  {
    id: "69f43843-1049-441c-9ba7-606ae54a4852",
    year: '2024',
    name: "Developers bar",
    hosting: "netlify",
    url: "https://developersbar.netlify.app/",
    description:
      "Sitio para desarrolladores construido con HTML, JavaScript y SCSS. Incluye secciones de presentación, tecnologías, servicios y contacto, con diseño responsivo y animaciones de scroll.",
    category: ['landingPage'],
    tags: ["HTML", "Javascript", "SCSS", "Github"],
    techs: ["html", "css", "js"],
    img: "/img/sites/developersbar.png",
    github: {
      front: "https://github.com/CarlosTrini/DevelopersBar",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "003fb9d6-25c8-404c-aabe-b64c9b4c2c63",
    year: '2021',
    name: "BarberShop stack-MERN",
    hosting: "netlify y heroku",
    url: "https://barber-shop-mern.netlify.app/",
    description:
      "BarberShop esta construida en dos partes. FrontEnd: React, Backend: Nodejs, express, JsonWebToken, Mongodb Atlas, Mongoose. Es una barbería en la cual se pueden registrar, iniciar sesión y agendar citas siempre y cuando se este registrado. Los servicios son agregados a un carrito con localstorage. cuenta con una sección para el administrador en el cual se puede buscar citas agendadas, dar por atendidas, agregar, eliminar, ver y editar servicios. Para acceder como administrador usar: user => carlos@carlos.com, pass => contrasena",
    category: ['sitio web', 'e-commerce-dummy', 'API'],
    tags: [
      "react",
      "react-/sites/redux.png",
      "axios",
      "scss",
      "SweetAlert",
      "Github",
      "localstorage",
      "nodejs",
      "express",
      "mongoose",
      "mongoDB",
      "json-web-token"
    ],
    techs: ["react", "mongodb", "express", "scss", "sweetalert", "nodejs", "jsonwebtoken"],
    img: "/img/sites/barbershop.png",
    github: {
      front: "https://github.com/CarlosTrini/barbershop-front",
      back: "https://github.com/CarlosTrini/barbershop-back",
    },
    size: '1920 × 1080'
  },
  // {
  //   id: "614d334d-3ece-40e1-80c9-9e5142278132",
  //   year: '',
  //   name: "Login stack-MERN",
  //   hosting: "netlify y heroku",
  //   url: "https://login-mern-front.netlify.app/",
  //   description:
  //     "Simulador de login contruido en dos partes: FrontEnd con React y BackEnd con NodeJs, Express, JWT, MongoDB atlas, Mongoose y NodeMailer. Una vez registrado se envia un mensaje a tu correo con ayuda de NodeMailer para verificar la cuenta, una vez verificada se permite el acceso. Igualmente se cuenta con el poder recuperar una contraseña olvidada mediante un mensaje enviado con NodeMailer. El acceso se permite gracias al manejo de Token con Json Web Token",
  //   tags: [
  //     "React",
  //     "React Router Dom /sites/v6.png",
  //     "Styled Components",
  //     "SweetAlert",
  //     "NodeJS",
  //     "NodeMailer",
  //     "Github",
  //     "mongoose",
  //     "mongodb",
  //   ],
  //   techs: [
  //     "react",
  //     "styledcomponents",
  //     "sweetalert",
  //     "nodemailer",
  //     "mongodb",
  //     "nodejs",
  //     "jsonwebtoken",
  //     "express"
  //   ],
  //   img: "/img/sites/loginmern.png",
  //   github: {
  //     front:
  //       "https://github.com/CarlosTrini/login-MERN-FROM/blob/main/src/styles/home.js",
  //     back: "https://github.com/CarlosTrini/login-MERN-BACK",
  //   },
  // },
  {
    id: "31b4fa1f-7eee-4f1e-b3cb-2b1226677379",
    year: '2021',
    name: "Star Wars",
    hosting: "netlify",
    url: "https://star-wars-api-react.netlify.app/",
    description:
      "Página construida con  ReactJs, la cual consume una api de star wars. Aplicando scroll infinito, modo oscuro. Haciendo uso de Redux, permite agregar y eliminar un personaje de favoritos con data persistente , y ejecutar peticiones para llenar el state de los personajes",
    category: ['landingPage'],
    tags: ["React", "SCSS", "JavaScript", "Github", "React-intersection-observer", "Redux", "Redux-thunk"],
    techs: ["react", "scss", "js", "github", "redux"],
    img: "/img/sites/starwars.png",
    github: {
      front: "https://github.com/CarlosTrini/star-wars-api",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "821fb4j7-903cs-2943c-ñlks-g239a3i7s1t09",
    year: '2022',
    name: "Portafolio versión 1",
    hosting: "vercel",
    url: "https://portafolio-nine-zeta.vercel.app/",
    description:
      "Mi portafolio web. Realizado con Nextjs, SCSS module",
    category: ['landingPage'],
    tags: [
      "react",
      "NextJs",
      "scss",
      "Github",
    ],
    techs: ["react", "nextjs", "scss"],
    img: "/img/sites/portafolio.png",
    github: {
      front: "https://github.com/CarlosTrini/PORTAFOLIO",
      back: "",
    },
    size: '1920 × 1080'
  },
  {
    id: "54792ac4-3294-413e-bc46-28ef03025478",
    year: '2021',
    name: "Event Organizer",
    hosting: "netlify",
    url: "https://event-organizer-gulp.netlify.app/",
    description:
      "Página para organizador de eventos, que extrae los datos desde archivos JavaScript simulando dicha data como si fuera traida desde alguna API. Realizada con Gulp, SCSS y libreria ScrollReveal",
    category: ['landingPage'],
    tags: ["HTML", "SCSS", "JavaScript", "Github", "Gulp"],
    techs: ["html", "scss", "js", "gulp"],
    img: "/img/sites/eventorganizer.png",
    github: {
      front: "https://github.com/CarlosTrini/event-organizer",
      back: "",
    },
    size: '1920 × 1080'
  },

];

