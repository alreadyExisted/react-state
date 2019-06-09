enum ApiProvider {
  Github
}

const urls = {
  [ApiProvider.Github]: process.env.REACT_APP_API_GITHUB
}

interface ApiOpts {
  provider?: ApiProvider
}

export async function callApi<T>(
  url: string,
  { provider }: ApiOpts = {} as any
): Promise<T> {
  let baseUrl = urls[provider ? provider : ApiProvider.Github]
  return await (await fetch(`${baseUrl}${url}`)).json()
}
