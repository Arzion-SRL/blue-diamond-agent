import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RoomModal } from "./room-modal";
import {
  Users,
  Bed,
  Wifi,
  Car,
  Coffee,
  Waves,
  Tv,
  Phone,
  Wind,
  Bath,
  Shirt,
  Volume2,
  DoorOpen,
  Armchair,
  Home,
  Radio,
  Zap,
  Snowflake,
  Fan,
  Crown,
  MapPin,
  Moon,
  Cigarette,
  CigaretteOff,
  PhoneCall,
  MessageSquare,
  Sofa,
  Briefcase,
  Star,
  ShowerHead,
  Sparkles,
  Martini,
  TriangleRight,
  ConciergeBell,
  Vault,
} from "lucide-react";
import React, { useState } from "react";

interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  guest: number;
  images: string[];
  amenities: string[];
  hotel_id: string;
  created_at: string;
  updated_at: string | null;
}

interface RoomsProps {
  rooms: Room[];
  sendMessage?: (message: any) => void;
}

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

const ImageCarousel = ({ images, alt, className }: ImageCarouselProps) => {
  if (images.length === 0) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500">No image available</span>
      </div>
    );
  }

  return (
    <img
      src={images[0]}
      alt={alt}
      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${className}`}
    />
  );
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
  if (
    amenityLower.includes("room service") ||
    amenityLower.includes("24-hour")
  ) {
    return <ConciergeBell className="w-4 h-4" />;
  }

  // Bed & Sleep
  if (
    amenityLower.includes("bed") ||
    amenityLower.includes("dreambed") ||
    amenityLower.includes("mattress")
  ) {
    return <Bed className="w-4 h-4" />;
  }
  if (
    amenityLower.includes("sheets") ||
    amenityLower.includes("thread count")
  ) {
    return <Sparkles className="w-4 h-4" />;
  }
  if (amenityLower.includes("pillows")) {
    return <Moon className="w-4 h-4" />;
  }
  if (amenityLower.includes("turndown") || amenityLower.includes("turn down")) {
    return <Moon className="w-4 h-4" />;
  }

  // Furniture & Space
  if (
    amenityLower.includes("balcony") ||
    amenityLower.includes("terrace") ||
    amenityLower.includes("lanai")
  ) {
    return <Home className="w-4 h-4" />;
  }
  if (
    amenityLower.includes("sitting area") ||
    amenityLower.includes("sitting")
  ) {
    return <Armchair className="w-4 h-4" />;
  }
  if (amenityLower.includes("sofa") || amenityLower.includes("chair")) {
    return <Sofa className="w-4 h-4" />;
  }
  if (amenityLower.includes("desk")) {
    return <Briefcase className="w-4 h-4" />;
  }
  if (
    amenityLower.includes("connecting rooms") ||
    amenityLower.includes("connecting")
  ) {
    return <DoorOpen className="w-4 h-4" />;
  }

  // Services & Luxury
  if (amenityLower.includes("butler") || amenityLower.includes("service")) {
    return <Crown className="w-4 h-4" />;
  }
  if (amenityLower.includes("iron") || amenityLower.includes("ironing")) {
    return <Shirt className="w-4 h-4" />;
  }
  if (
    amenityLower.includes("exclusive") ||
    amenityLower.includes("distinctive")
  ) {
    return <Star className="w-4 h-4" />;
  }

  // Pool & Water
  if (
    amenityLower.includes("pool") ||
    amenityLower.includes("swim") ||
    amenityLower.includes("mermaid")
  ) {
    return <Waves className="w-4 h-4" />;
  }
  if (amenityLower.includes("beach")) {
    return <MapPin className="w-4 h-4" />;
  }

  // Smoking
  if (
    amenityLower.includes("non-smoking") ||
    amenityLower.includes("no smoking")
  ) {
    return <CigaretteOff className="w-4 h-4" />;
  }
  if (amenityLower.includes("smoking")) {
    return <Cigarette className="w-4 h-4" />;
  }

  // Remote Control
  if (amenityLower.includes("remote")) {
    return <PhoneCall className="w-4 h-4" />;
  }

  // Size indicators
  if (amenityLower.includes("m2") || amenityLower.includes("sq")) {
    return <Home className="w-4 h-4" />;
  }

  return null;
};

const getBedInfo = (description: string) => {
  const descLower = description.toLowerCase();

  if (descLower.includes("two bedrooms") || descLower.includes("2 bedroom")) {
    return "2 bedrooms";
  }
  if (descLower.includes("king bed")) {
    return "1 king bed";
  }
  if (descLower.includes("double bed")) {
    return "1 double bed";
  }
  if (descLower.includes("queen bed")) {
    return "1 queen bed";
  }

  return "1 bed";
};

const getRoomSize = (description: string, amenities: string[]) => {
  // Try to extract size from description first
  const descLower = description.toLowerCase();

  // Look for patterns like "68m2", "68 m2", "68 sq m", "68 square meters"
  const sizePattern = /(\d+)\s*(m2|sq\s*m|square\s*meters?)/i;
  const sizeMatch = description.match(sizePattern);

  if (sizeMatch) {
    return `${sizeMatch[1]}m2`;
  }

  // Try to find size in amenities
  for (const amenity of amenities) {
    const amenityMatch = amenity.match(sizePattern);
    if (amenityMatch) {
      return `${amenityMatch[1]}m2`;
    }
  }

  // Default sizes based on room type
  if (descLower.includes("suite")) {
    return "65m2";
  }
  if (descLower.includes("junior")) {
    return "45m2";
  }
  if (descLower.includes("premium") || descLower.includes("luxury")) {
    return "50m2";
  }

  return "40m2"; // Default fallback
};

const filterSizeRelatedAmenities = (amenities: string[]) => {
  return amenities.filter((amenity) => {
    const amenityLower = amenity.toLowerCase();
    return !(
      amenityLower.includes("m2") ||
      amenityLower.includes("sq") ||
      amenityLower.includes("square") ||
      amenityLower.includes("meters") ||
      amenityLower.includes("feet")
    );
  });
};

const getRoomFeatures = (description: string, amenities: string[]) => {
  const features = [];
  const descLower = description.toLowerCase();

  // Special features from description (removed bed info as it's shown separately)
  if (descLower.includes("ocean view") || descLower.includes("sea view")) {
    features.push("Ocean view");
  }
  if (descLower.includes("pool view")) {
    features.push("Pool view");
  }
  if (descLower.includes("sunset pool view")) {
    features.push("Sunset pool view");
  }
  if (descLower.includes("plunge pool")) {
    features.push("Private plunge pool");
  }
  if (descLower.includes("balcony") || descLower.includes("terrace")) {
    features.push("Balcony/Terrace");
  }
  if (descLower.includes("living area") || descLower.includes("sitting area")) {
    features.push("Separate living area");
  }

  // Add important amenities that have icons (excluding size info since it's shown separately)
  const filteredAmenities = filterSizeRelatedAmenities(amenities);
  const importantAmenities = filteredAmenities.filter((amenity) => {
    // Only include amenities that have an icon
    return getAmenityIcon(amenity) !== null;
  });

  // Add some important amenities to features if space allows
  const remainingSlots = 4 - features.length;
  if (remainingSlots > 0) {
    features.push(...importantAmenities.slice(0, remainingSlots));
  }

  return features.slice(0, 4); // Limit to 4 features for clean display
};

const getRoomType = (name: string) => {
  const nameLower = name.toLowerCase();

  if (nameLower.includes("premium") || nameLower.includes("luxury")) {
    return { label: "Premium", variant: "outline" as const };
  }
  if (nameLower.includes("suite")) {
    return { label: "Best value", variant: "secondary" as const };
  }

  return { label: "Standard", variant: "outline" as const };
};

export const Rooms = ({ rooms, sendMessage }: RoomsProps) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<Room | null>(
    null
  );

  const handleRoomClick = (room: Room) => {
    setSelectedRoomForModal(room);
    setRoomModalOpen(true);
  };

  const handleRoomModalClose = () => {
    setRoomModalOpen(false);
    setSelectedRoomForModal(null);
  };

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleRoomSelectFromCard = (room: Room) => {
    setSelectedRoom(room);
    if (sendMessage) {
      sendMessage({
        role: "user",
        parts: [
          {
            type: "text",
            text: `Select room: ${room.name} at \\$${room.price}`,
          },
        ],
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 text-lg">
        Available Rooms ({rooms.length} found)
      </h3>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
          dragFree: false,
          skipSnaps: false,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4 px-1">
          {rooms.map((room) => {
            const roomType = getRoomType(room.name);
            const features = getRoomFeatures(room.description, room.amenities);
            const roomSize = getRoomSize(room.description, room.amenities);
            const bedInfo = getBedInfo(room.description);
            const filteredAmenities = filterSizeRelatedAmenities(
              room.amenities
            );

            return (
              <CarouselItem
                key={room.id}
                className="pl-2 md:pl-4 md:basis-1/2 p-1"
              >
                <Card
                  className={`overflow-hidden transition-all duration-200 flex flex-col h-full hover:shadow-lg rounded-lg gap-0 hover:cursor-pointer p-2 ${
                    selectedRoom?.id === room.id ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => handleRoomClick(room)}
                >
                  {/* Room Type Badge */}
                  <div className="relative">
                    <div className="absolute top-3 left-3 z-10">
                      <Badge
                        variant={roomType.variant}
                        className="bg-white/90 backdrop-blur-sm"
                      >
                        {roomType.label}
                      </Badge>
                    </div>

                    {/* Room Image/Carousel */}
                    <div className="aspect-[4/3] overflow-hidden rounded-md">
                      <ImageCarousel
                        images={room.images}
                        alt={room.name}
                        className=""
                      />
                    </div>
                  </div>

                  <CardContent className="p-1 pt-2 h-full flex flex-col">
                    {/* Room Name */}
                    <h4 className="font-bold text-gray-900 leading-tight mb-1">
                      {room.name.length > 50
                        ? room.name.substring(0, 50) + "..."
                        : room.name}
                    </h4>

                    {/* Room Size and Bed Info */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <TriangleRight className="w-4 h-4" />
                        <span className="text-sm">{roomSize}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Bed className="w-4 h-4" />
                        <span className="text-sm">{bedInfo}</span>
                      </div>
                    </div>

                    {/* Room Features */}
                    <div className="space-y-1 flex-grow">
                      {features.map((feature, index) => {
                        // Get appropriate icon for the feature
                        const getFeatureIcon = (feature: string) => {
                          // Try to get icon from amenity icon function first
                          const amenityIcon = getAmenityIcon(feature);
                          if (amenityIcon) return amenityIcon;

                          // Fallback to specific feature icons
                          if (feature.includes("view"))
                            return <Waves className="w-4 h-4" />;
                          if (
                            feature.includes("Balcony") ||
                            feature.includes("Terrace")
                          )
                            return <Home className="w-4 h-4" />;
                          if (
                            feature.includes("living") ||
                            feature.includes("area")
                          )
                            return <Armchair className="w-4 h-4" />;
                          if (feature.includes("Free wifi"))
                            return <Wifi className="w-4 h-4" />;

                          return <Star className="w-4 h-4" />;
                        };

                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <div className="w-5 h-5 flex items-center justify-center">
                              {getFeatureIcon(feature)}
                            </div>
                            <span className="text-xs">{feature}</span>
                          </div>
                        );
                      })}

                      {/* Guest capacity */}
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-xs">
                          Up to {room.guest} guest{room.guest > 1 ? "s" : ""}
                        </span>
                      </div>

                      {/* Show all amenities button */}
                      {filteredAmenities.length > 0 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              className="flex items-center gap-1 underline text-black hover:text-black text-sm font-medium transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View all amenities ({filteredAmenities.length})
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-lg font-semibold">
                                All Amenities -{" "}
                                {room.name.length > 40
                                  ? room.name.substring(0, 40) + "..."
                                  : room.name}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              {/* Room Features from Description */}
                              <div>
                                <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                  Room Features
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {/* Room Size */}
                                  <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                                      <Home className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm text-gray-700 flex-1">
                                      {roomSize}
                                    </span>
                                  </div>
                                  {/* Bed Info */}
                                  <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                                      <Bed className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm text-gray-700 flex-1">
                                      {bedInfo}
                                    </span>
                                  </div>
                                  {/* Other Features */}
                                  {features.map((feature, index) => {
                                    const getFeatureIcon = (
                                      feature: string
                                    ) => {
                                      const amenityIcon =
                                        getAmenityIcon(feature);
                                      if (amenityIcon) return amenityIcon;

                                      if (feature.includes("view"))
                                        return <Waves className="w-5 h-5" />;
                                      if (
                                        feature.includes("Balcony") ||
                                        feature.includes("Terrace")
                                      )
                                        return <Home className="w-5 h-5" />;
                                      if (
                                        feature.includes("living") ||
                                        feature.includes("area")
                                      )
                                        return <Armchair className="w-5 h-5" />;

                                      return <Star className="w-5 h-5" />;
                                    };

                                    return (
                                      <div
                                        key={index}
                                        className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                                      >
                                        <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                                          {getFeatureIcon(feature)}
                                        </div>
                                        <span className="text-sm text-gray-700 flex-1">
                                          {feature}
                                        </span>
                                      </div>
                                    );
                                  })}
                                  {/* Guest capacity */}
                                  <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                    <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                                      <Users className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm text-gray-700 flex-1">
                                      Up to {room.guest} guest
                                      {room.guest > 1 ? "s" : ""}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* All Room Amenities */}
                              <div>
                                <h4 className="text-sm font-semibold text-gray-800 mb-3">
                                  All Amenities ({filteredAmenities.length})
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {filteredAmenities.map((amenity, index) => {
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

                    {/* Price and Selection */}
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <div className="text-base font-bold text-gray-900">
                          ${room.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">Per night</div>
                      </div>

                      <Button
                        className="font-bold"
                        variant={
                          selectedRoom?.id === room.id ? "default" : "outline"
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRoomSelectFromCard(room);
                        }}
                      >
                        {selectedRoom?.id === room.id ? "Selected" : "Select"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {rooms.length > 2 && (
          <>
            <CarouselPrevious className="-left-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" />
            <CarouselNext className="-right-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" />
          </>
        )}
      </Carousel>

      {/* Room Modal */}
      <RoomModal
        roomId={selectedRoomForModal?.id || null}
        isOpen={roomModalOpen}
        onClose={handleRoomModalClose}
        onSelect={handleRoomSelect}
        sendMessage={sendMessage}
      />
    </div>
  );
};
