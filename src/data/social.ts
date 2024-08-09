import {SocialInfoT} from '../interfacesTypes/types';

export const socialInfo: SocialInfoT[] = [
    {
        id: 1,
        socialName: 'LinkedIn',
        link: 'https://www.linkedin.com/in/carlos-trinidad-b45956220/',
        icon: `fa-brands fa-linkedin`,
        copy: false,
        canDownload: false,
    },
    {
        id: 2,
        socialName: 'Github',
        link: 'https://github.com/CarlosTrini',
        icon: `fa-brands fa-github`,
        copy: false,
        canDownload: false,
    },
    {
        id: 3,
        socialName: 'Email',
        link: 'carlostrinidad952@gmail.com',
        icon: `fa-solid fa-envelope`,
        copy: true,
        canDownload: false,
    },
    {
        id: 4,
        socialName: 'C.V.',
        link: 'https://drive.google.com/file/d/1skyR_FdGSzydr2HRrgeTvYL_aPez3kml/view?usp=sharing',
        icon: `fa-solid fa-file-pdf`,
        copy: false,
        canDownload: false,
    }
];