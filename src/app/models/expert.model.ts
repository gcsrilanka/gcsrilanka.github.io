export class Expert {
  id: number;
  name: string;
  university: string;
  avatarURL: string;
  github: string;
  facebook: string;
  instagram: string;
  twitter: string;

  constructor(
    id: number,
    name: string,
    university: string,
    avatarURL: string,
    github: string,
    facebook: string,
    instagram: string,
    twitter: string
  ) {
    this.id = id;
    this.name = name;
    this.university = university;
    this.avatarURL = avatarURL;
    this.github = github;
    this.facebook = facebook;
    this.instagram = instagram;
    this.twitter = twitter;
  }
}
