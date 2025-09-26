import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  MapPin,
  Star,
  Calendar,
  Wifi,
  Accessibility,
  Waves,
  Bath,
  Users,
  Square,
  Bed,
  Sun,
  Loader2,
  Tv,
  Radio,
  Volume2,
  Phone,
  MessageSquare,
  Vault,
  Zap,
  Snowflake,
  Fan,
  Wind,
  Shirt,
  ShowerHead,
  Coffee,
  Martini,
  Home,
  Armchair,
} from "lucide-react";
import { useState, useEffect } from "react";
import { fetchHotelWithRooms, type HotelWithRooms } from "@/lib/api/hotels";

interface HotelModalProps {
  hotelId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (hotel: HotelWithRooms) => void;
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

const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase();

  // Wi-Fi & Internet
  if (
    amenityLower.includes("wifi") ||
    amenityLower.includes("internet") ||
    amenityLower.includes("wireless")
  ) {
    return <Wifi className="w-4 h-4" />;
  }

  // Television & Entertainment
  if (
    amenityLower.includes("tv") ||
    amenityLower.includes("television") ||
    amenityLower.includes("cable") ||
    amenityLower.includes("satellite")
  ) {
    return <Tv className="w-4 h-4" />;
  }
  if (amenityLower.includes("radio") || amenityLower.includes("am/fm")) {
    return <Radio className="w-4 h-4" />;
  }
  if (amenityLower.includes("bluetooth") || amenityLower.includes("audio")) {
    return <Volume2 className="w-4 h-4" />;
  }
  if (amenityLower.includes("movie") || amenityLower.includes("premium")) {
    return <Star className="w-4 h-4" />;
  }

  // Phone & Communication
  if (amenityLower.includes("telephone") || amenityLower.includes("phone")) {
    return <Phone className="w-4 h-4" />;
  }
  if (
    amenityLower.includes("voice mail") ||
    amenityLower.includes("voicemail")
  ) {
    return <MessageSquare className="w-4 h-4" />;
  }

  // Safety & Security
  if (amenityLower.includes("safe") || amenityLower.includes("security")) {
    return <Vault className="w-4 h-4" />;
  }
  if (
    amenityLower.includes("fire detector") ||
    amenityLower.includes("detector")
  ) {
    return <Zap className="w-4 h-4" />;
  }

  // Air & Climate
  if (
    amenityLower.includes("air conditioning") ||
    amenityLower.includes("a/c")
  ) {
    return <Snowflake className="w-4 h-4" />;
  }
  if (amenityLower.includes("ceiling fan") || amenityLower.includes("fan")) {
    return <Fan className="w-4 h-4" />;
  }
  if (amenityLower.includes("hypoallergenic")) {
    return <Wind className="w-4 h-4" />;
  }

  // Bathroom & Personal Care
  if (
    amenityLower.includes("hairdryer") ||
    amenityLower.includes("hair dryer")
  ) {
    return <Wind className="w-4 h-4" />;
  }
  if (
    amenityLower.includes("bath") ||
    amenityLower.includes("shower") ||
    amenityLower.includes("jacuzzi") ||
    amenityLower.includes("tub")
  ) {
    return <Bath className="w-4 h-4" />;
  }
  if (amenityLower.includes("bathrobe") || amenityLower.includes("robe")) {
    return <Shirt className="w-4 h-4" />;
  }
  if (amenityLower.includes("walk-in shower")) {
    return <ShowerHead className="w-4 h-4" />;
  }

  // Food & Beverages
  if (amenityLower.includes("coffee") || amenityLower.includes("tea maker")) {
    return <Coffee className="w-4 h-4" />;
  }
  if (amenityLower.includes("minibar") || amenityLower.includes("stocked")) {
    return <Martini className="w-4 h-4" />;
  }

  // Accessibility
  if (
    amenityLower.includes("accessible") ||
    amenityLower.includes("wheelchair")
  ) {
    return <Accessibility className="w-4 h-4" />;
  }

  // Pool & Water
  if (amenityLower.includes("pool") || amenityLower.includes("swimming")) {
    return <Waves className="w-4 h-4" />;
  }

  // Balcony & Outdoor
  if (
    amenityLower.includes("balcony") ||
    amenityLower.includes("terrace") ||
    amenityLower.includes("lanai")
  ) {
    return <Home className="w-4 h-4" />;
  }

  // Seating & Living
  if (
    amenityLower.includes("sitting") ||
    amenityLower.includes("living") ||
    amenityLower.includes("area")
  ) {
    return <Armchair className="w-4 h-4" />;
  }

  // Desk & Work
  if (amenityLower.includes("desk") || amenityLower.includes("chair")) {
    return <Square className="w-4 h-4" />;
  }

  // Non-smoking
  if (amenityLower.includes("non-smoking") || amenityLower.includes("smoke")) {
    return <Wind className="w-4 h-4" />;
  }

  return null;
};

export const HotelModal = ({
  hotelId,
  isOpen,
  onClose,
  onSelect,
}: HotelModalProps) => {
  const [hotel, setHotel] = useState<HotelWithRooms | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!hotelId || !isOpen) {
      setHotel(null);
      setError(null);
      return;
    }

    const loadHotel = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchHotelWithRooms(hotelId);
        setHotel(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load hotel");
      } finally {
        setIsLoading(false);
      }
    };

    loadHotel();
  }, [hotelId, isOpen]);

  if (!hotelId || !isOpen) return null;

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Know more about...
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center h-64">
            <div className="flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Loading hotel details...</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (error) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="!max-w-4xl sm:!max-w-4xl max-h-[95vh] overflow-y-auto p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Know more about...
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-red-600 mb-2">Failed to load hotel details</p>
              <p className="text-gray-500 text-sm">{error}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!hotel) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl sm:!max-w-4xl max-h-[95vh] p-0 flex flex-col gap-0">
        <DialogHeader className="p-6 pb-4 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Know more about...
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pt-4 px-6">
          {/* Hotel Name and Rating */}
          <div className="space-y-1">
            <div className="flex flex-middle justify-between">
              <h1 className="text-xl font-bold text-gray-900">{hotel.name}</h1>
              <div className="flex items-center">{renderStars(hotel.stars)}</div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {hotel.city}, {hotel.country}
              </span>
            </div>
          </div>

          {/* Hotel Images */}
          <div className="grid grid-cols-3 gap-2 py-4">
            {/* Main Image */}
            <div className="col-span-2 relative overflow-hidden rounded-lg">
              <img
                src={hotel.images[0]}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Side Images */}
            <div className="space-y-2">
              {hotel.images.slice(1, 3).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg h-[calc(50%-4px)]"
                >
                  <img
                    src={image}
                    alt={`${hotel.name} view ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Description and Amenities */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Side - Description */}
            <div className="col-span-8 space-y-4">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  {`Experience luxury and comfort at ${hotel.name}. This ${hotel.stars}-star hotel offers exceptional service and amenities in the heart of ${hotel.city}. Perfect for both business and leisure travelers.`}
                </p>
              </div>
            </div>

            {/* Right Side - Amenities */}
            <div className="col-span-4 p-4 border-1 rounded-lg">
              <div className="space-y-3">
                {/* Get amenities from rooms since hotel doesn't have direct amenities */}
                {hotel.rooms[0]?.amenities.slice(0, 4).map((amenity, index) => {
                  const icon = getAmenityIcon(amenity);
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center text-gray-600">
                        {icon || <Star className="w-4 h-4" />}
                      </div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>

              {/* View all amenities button */}
              {hotel.rooms[0]?.amenities &&
                hotel.rooms[0].amenities.length > 4 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-1 underline text-black hover:text-black text-sm font-medium transition-colors pt-2">
                        View all amenities ({hotel.rooms[0].amenities.length})
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-lg font-semibold">
                          All Amenities - {hotel.name}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {/* All Hotel Amenities */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-3">
                            All Amenities ({hotel.rooms[0].amenities.length})
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {hotel.rooms[0].amenities.map((amenity, index) => {
                              const icon = getAmenityIcon(amenity);
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                  <div className="w-6 h-6 flex items-center justify-center text-gray-600">
                                    {icon || <Star className="w-5 h-5" />}
                                  </div>
                                  <span className="text-sm text-gray-700 flex-1">
                                    {amenity}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
            </div>
          </div>

          {/* Rooms Section */}
          <div className="space-y-4 pb-4">
            <h2 className="text-xl font-bold text-gray-900">Rooms</h2>

            {/* Room Cards */}
            <div className="space-y-4">
              {hotel.rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden bg-gray-50 rounded-lg p-2">
                  <div className="flex">
                    {/* Room Images Carousel */}
                    <div className="w-48 h-32 relative rounded-md overflow-hidden">
                      {room.images.length > 1 ? (
                        <Carousel className="w-full h-full">
                          <CarouselContent className="h-full">
                            {room.images.map((image, index) => (
                              <CarouselItem key={index} className="h-full">
                                <img
                                  src={image}
                                  alt={`${room.name} - Image ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-1 size-6 bg-white/90 hover:bg-white border-gray-200" />
                          <CarouselNext className="right-1 size-6 bg-white/90 hover:bg-white border-gray-200" />
                        </Carousel>
                      ) : (
                        <img
                          src={room.images[0] || hotel.images[0]}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Room Details */}
                    <CardContent className="flex-1 p-4">
                      <div className="space-y-3">
                        <h3 className="font-bold text-gray-900">{room.name}</h3>

                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Square className="w-4 h-4" />
                            <span>
                              {room.amenities.find((a) => a.includes("m2")) ||
                                "N/A"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>Up to {room.guest} guests</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-green-600">
                              ${room.price}/night
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {room.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                          {room.amenities.slice(0, 3).map((amenity, index) => {
                            const iconMap: { [key: string]: React.ReactNode } =
                              {
                                "Balcony/Lanai/Terrace": (
                                  <Sun className="w-4 h-4" />
                                ),
                                "Cable television": (
                                  <Wifi className="w-4 h-4" />
                                ),
                                "Safe in Room": <Users className="w-4 h-4" />,
                              };

                            return (
                              <div
                                key={index}
                                className="flex items-center gap-1"
                              >
                                {iconMap[amenity] || (
                                  <Wifi className="w-4 h-4" />
                                )}
                                <span>{amenity}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-right border-t bg-white p-6 rounded-b-lg">
          <Button
            onClick={() => {
              onSelect?.(hotel);
              onClose();
            }}
            className="px-8 py-4 hover:cursor-pointer font-bold min-w-[250px]"
            size="lg"
          >
            Select This Hotel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
