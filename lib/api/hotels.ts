interface Hotel {
  id: string;
  name: string;
  country: string;
  city: string;
  stars: number;
  images: string[];
  created_at: string;
  updated_at: string;
}

interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  guest: number;
  amenities: string[];
  images: string[];
  hotel_id: string;
  created_at: string;
  updated_at: string | null;
}

interface HotelWithRooms extends Hotel {
  rooms: Room[];
}

const API_URL =
  process.env.NEXT_PUBLIC_HYPERFUNNEL_API_URL ||
  "https://hyperfunnel-api.arzion.com";

export async function fetchHotelWithRooms(id: string): Promise<HotelWithRooms> {
  const response = await fetch(`${API_URL}/hotels/${id}/with-rooms`);

  if (!response.ok) {
    throw new Error(`Failed to fetch hotel: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchRoomDetails(id: string): Promise<Room> {
  const response = await fetch(`${API_URL}/rooms/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch room: ${response.statusText}`);
  }

  return response.json();
}

export type { Hotel, Room, HotelWithRooms };
