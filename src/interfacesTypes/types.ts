export type SocialInfoT = {
    id: number;
    socialName: string;
    link: string;
    icon: string;
    copy: boolean; // en el caso del correo no es lin
    canDownload: boolean;
};

///////////////
type GitInfoT = {
    front: string; //(link)
    back?: string;
}

type Categories = 'juego' | 'landingPage' | 'e-commerce' | 'blog' | 'sitio web' | 'CMS' | 'SPA' | 'API' | 'e-commerce-dummy';

export type ProjectsInfoT = {
    id: string;
    name: string;
    hosting: string;
    url: string;
    description: string;
    tags: string[],
    techs: string[];
    category: Categories[]
    img: string; //(link)
    github: GitInfoT,
    year: string;
    size: string;
}


