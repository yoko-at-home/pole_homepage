export const NEWS_PER_PAGE = 6;

export type NewsItem = {
  content?: string;
  description?: string;
  id: string;
  publishedAt?: string;
  revisedAt?: string;
  title: string;
  updatedAt?: string;
};

type NewsListResponse = {
  contents: NewsItem[];
  totalCount: number;
};

const newsHeaders = (): HeadersInit => {
  return { "X-MICROCMS-API-KEY": process.env.API_KEY || "" };
};

const fetchNews = async (params: URLSearchParams): Promise<NewsListResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news?${params.toString()}`, {
    headers: newsHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch news: ${res.status}`);
  }

  return res.json();
};

export const fetchNewsPage = async (page: number): Promise<NewsListResponse> => {
  const params = new URLSearchParams({
    limit: String(NEWS_PER_PAGE),
    offset: String((page - 1) * NEWS_PER_PAGE),
    orders: "-updatedAt",
  });

  return fetchNews(params);
};

export const fetchNewsIds = async (): Promise<string[]> => {
  const limit = 100;
  const ids: string[] = [];
  let offset = 0;
  let totalCount = 0;

  do {
    const params = new URLSearchParams({
      fields: "id",
      limit: String(limit),
      offset: String(offset),
      orders: "-updatedAt",
    });
    const data = await fetchNews(params);
    totalCount = data.totalCount;
    ids.push(
      ...(data.contents ?? []).map((item) => {
        return item.id;
      }),
    );
    offset += limit;
  } while (offset < totalCount);

  return ids;
};

export const fetchAllNews = async (): Promise<NewsListResponse> => {
  const limit = 100;
  const contents: NewsItem[] = [];
  let offset = 0;
  let totalCount = 0;

  do {
    const params = new URLSearchParams({
      limit: String(limit),
      offset: String(offset),
      orders: "-updatedAt",
    });
    const data = await fetchNews(params);
    totalCount = data.totalCount;
    contents.push(...(data.contents ?? []));
    offset += limit;
  } while (offset < totalCount);

  return { contents, totalCount };
};
