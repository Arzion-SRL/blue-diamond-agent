interface HotelChain {
  id: string;
  name: string;
  created_at: string;
  updated_at: string | null;
}

const API_URL =
  process.env.NEXT_PUBLIC_HYPERFUNNEL_API_URL ||
  "https://hyperfunnel-api.arzion.com";

export async function fetchHotelChainByName(name: string): Promise<HotelChain | null> {
  const response = await fetch(`${API_URL}/hotel-chains/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch hotel chains: ${response.statusText}`);
  }

  const chains: HotelChain[] = await response.json();

  // Find the chain with the matching name
  const chain = chains.find(chain => chain.name === name);

  return chain || null;
}

export async function fetchAllHotelChains(): Promise<HotelChain[]> {
  const response = await fetch(`${API_URL}/hotel-chains/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch hotel chains: ${response.statusText}`);
  }

  return response.json();
}

export type { HotelChain };
