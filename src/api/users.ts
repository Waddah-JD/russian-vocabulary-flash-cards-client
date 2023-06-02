import axios from "../axios";

const path = `/v1/users`;

export async function createUser(idToken: string): Promise<void> {
  await axios.post(path, { idToken });
}
