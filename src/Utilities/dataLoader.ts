export async function Loader() {
  const res = await fetch(`products.json`);
  if (res.status === 404) {
    throw new Response('Not Found', { status: 404 });
  }
  const rootLoader = await res.json();

  return rootLoader;
}
