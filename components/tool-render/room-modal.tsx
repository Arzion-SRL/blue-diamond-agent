import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Users,
  TriangleRight,
  Bed,
  Wifi,
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
  Star,
  Loader2,
  ConciergeBell,
  Crown,
  Moon,
  Sparkles,
  Sofa,
  Briefcase,
  DoorOpen,
  Cigarette,
  CigaretteOff,
  PhoneCall,
  Bath,
} from "lucide-react";
import { useState, useEffect } from "react";
import { fetchRoomDetails, type Room } from "@/lib/api/hotels";

interface RoomModalProps {
  roomId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (room: Room) => void;
  sendMessage?: (message: any) => void;
}

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

  // Size indicators
  if (amenityLower.includes("m2") || amenityLower.includes("sq")) {
    return <Home className="w-4 h-4" />;
  }

  return null;
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

export const RoomModal = ({
  roomId,
  isOpen,
  onClose,
  onSelect,
  sendMessage,
}: RoomModalProps) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!roomId || !isOpen) {
      setRoom(null);
      setError(null);
      return;
    }

    const loadRoom = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchRoomDetails(roomId);
        setRoom(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load room");
      } finally {
        setIsLoading(false);
      }
    };

    loadRoom();
  }, [roomId, isOpen]);

  if (!roomId || !isOpen) return null;

  if (isLoading) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="!max-w-4xl sm:!max-w-4xl max-h-[95vh] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-4 flex-shrink-0">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Room Details
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 flex items-center justify-center py-4">
            <div className="flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Loading room details...</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (error) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="!max-w-4xl sm:!max-w-4xl max-h-[95vh] p-0 flex flex-col">
          <DialogHeader className="p-6 pb-4 flex-shrink-0">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Room Details
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-600 mb-2">Failed to load room details</p>
              <p className="text-gray-500 text-sm">{error}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!room) return null;

  const roomSize = getRoomSize(room.description, room.amenities);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl sm:!max-w-2xl max-h-[95vh] p-0 flex flex-col gap-0">
        <DialogHeader className="p-6 pb-4 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {room.name}
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto pt-4">
          <div className="space-y-6">
            {/* Room Images with Navigation */}
            <div className="relative px-6 overflow-hidden">
              <Carousel className="w-full overflow-hidden">
                <CarouselContent>
                  {room.images.map((image, index) => (
                    <CarouselItem key={index} className="w-full">
                      <div className="aspect-[16/9] relative overflow-hidden rounded-lg w-full">
                        <img
                          src={image}
                          alt={`${room.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white" />

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {room.images.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-white/60"
                    />
                  ))}
                </div>
              </Carousel>
            </div>

            <div className="px-6 space-y-6 pb-6">
              {/* About room section */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  About room
                </h3>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Max: {room.guest} people</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TriangleRight className="w-4 h-4" />
                    <span>{roomSize}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Amenities section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Amenities
                </h3>

                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  {room.amenities.map((amenity, index) => {
                    const icon = getAmenityIcon(amenity);
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center text-gray-600">
                          {icon || <Star className="w-4 h-4" />}
                        </div>
                        <span className="text-gray-700 text-sm">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed footer with action button */}
        <div className="text-right border-t bg-white p-6 rounded-b-lg">
            <Button
              onClick={() => {
                onSelect?.(room);
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
                onClose();
              }}
              className="px-8 py-4 hover:cursor-pointer font-bold min-w-[250px]"
              size="lg"
            >
              Select This Room
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
