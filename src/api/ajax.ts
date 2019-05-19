const apiProvider = {
  GITHUB: 1
}

const urls = {
  [apiProvider.GITHUB]: process.env.REACT_APP_API_GITHUB
}

export async function callApi<T>(
  url: string,
  { provider }: { provider: number } = {} as any
) {
  let baseUrl = urls[provider ? provider : apiProvider.GITHUB]
  return (await (await fetch(`${baseUrl}${url}`)).json()) as Promise<T>
}
