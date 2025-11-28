export async function getUserRepos(username: string = "", perPage: number = 6) {
  console.log('hello from the api folder');

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}&sort=updated&direction=desc`
  );

  if (!res.ok) {
    throw new Error(`GitHub request failed: ${res.status}`);
  }

  return res.json();
}
