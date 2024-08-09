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

export type ProjectsInfoT = {
    id: string;
    name: string;
    hosting: string;
    url: string;
    description: string;
    tags: string[],
    techs: string[];
    img: string; //(link)
    github: GitInfoT,
    year: string;
}


