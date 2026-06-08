export interface ProfileLocation {
  city: string;
  country: string;
  countryCode: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatarUrl: string;
  location: ProfileLocation;
}
