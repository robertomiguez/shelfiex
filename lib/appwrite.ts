import {
  Client,
  Account,
  Avatars,
  Databases,
  TablesDB,
} from 'react-native-appwrite';

const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const project = process.env.EXPO_PUBLIC_APPWRITE_PROJECT;
const platform = process.env.EXPO_PUBLIC_APPWRITE_PLATFORM;

if (!endpoint || !project || !platform) {
  throw new Error('Missing Appwrite environment variables');
}

export const client = new Client()
  .setEndpoint(endpoint)
  .setProject(project)
  .setPlatform(platform);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export const tablesDB = new TablesDB(client);
