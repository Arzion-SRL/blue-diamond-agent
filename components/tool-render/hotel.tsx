import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";
import { useState } from "react";
import { HotelModal } from "./hotel-modal";

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

interface HotelsProps {
  hotels: Hotel[];
  sendMessage?: (message: any) => void;
}

const renderStars = (stars: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < stars
          ? "fill-yellow-400 text-yellow-400"
          : "fill-gray-200 text-gray-200"
      }`}
    />
  ));
};

export const Hotels = ({ hotels, sendMessage }: HotelsProps) => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [modalHotelId, setModalHotelId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Don't render anything if there are no hotels
  if (!hotels || hotels.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-900 text-lg">
        Available Hotels ({hotels.length} found)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            className={`overflow-hidden hover:shadow-lg transition-shadow duration-200 p-2 rounded-lg gap-0 hover:cursor-pointer flex flex-col h-full ${
              selectedHotel?.id === hotel.id ? "ring-2 ring-black" : ""
            }`}
            onClick={() => {
              setModalHotelId(hotel.id);
              setIsModalOpen(true);
            }}
          >
            {/* Hotel Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img
                src={hotel.images[0]}
                alt={hotel.name}
                className="w-full h-full object-cover hover:scale-120 transition-transform duration-300"
              />
            </div>

            <CardContent className="p-1 pt-2 flex flex-col h-full">
              {/* Stars Badge */}
              <Badge
                variant="secondary"
                className="bg-white/90 backdrop-blur-sm p-0 w-fit"
              >
                <div className="flex items-center">
                  {renderStars(hotel.stars)}
                </div>
              </Badge>

              {/* Hotel Name - with proper truncation */}
              <h4 className="font-bold text-gray-900 leading-tight mt-2  mb-2">
                {hotel.name.length > 60
                  ? hotel.name.substring(0, 60) + "..."
                  : hotel.name}
              </h4>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-600 mb-auto">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{hotel.city}</span>
              </div>

              {/* Select Button - pushed to bottom */}
              <Button
                className="w-full  hover:cursor-pointer font-bold"
                variant={selectedHotel?.id === hotel.id ? "default" : "outline"}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  setSelectedHotel(hotel);
                  if (sendMessage) {
                    sendMessage({
                      role: "user",
                      parts: [
                        {
                          type: "text",
                          text: `Select the hotel ${hotel.name} `,
                        },
                      ],
                    });
                  }
                }}
              >
                {selectedHotel?.id === hotel.id ? "Selected" : "Select"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Hotel Modal */}
      <HotelModal
        hotelId={modalHotelId}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setModalHotelId(null);
        }}
        onSelect={(hotel) => {
          // Find the hotel in the current list to maintain selection state
          const currentHotel = hotels.find((h) => h.id === hotel.id);
          if (currentHotel) {
            setSelectedHotel(currentHotel);
          }
          if (sendMessage) {
            sendMessage({
              role: "user",
              parts: [
                {
                  type: "text",
                  text: `Select the hotel ${hotel.name}`,
                },
              ],
            });
          }
        }}
      />
    </div>
  );
};
