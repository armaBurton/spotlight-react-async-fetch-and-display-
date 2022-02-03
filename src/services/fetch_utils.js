import { checkError, client } from './client';

export async function getKTMMotorcycles(){
  const response = await client
    .from(`KTM_Motorcycles`);

  return checkError(response);
}

export async function getNostromoCrew(){
  const response = await client
    .from(`nostromo_crew`);

  return checkError(response);
}

export async function getTea(){
  const response = await client
    .from(`tea`);

  return checkError(response);
}

export async function getKill(){
  const response = await client
    .from(`kill_la_kill`);

  return checkError(response);
}