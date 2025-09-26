import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BookingDetailsData {
  message: string;
  booking_id: string;
  confirmation_code: string;
  status: string;
  check_in_date: string;
  check_out_date: string;
  guests: number;
  price: number;
  hotel_name?: string;
  room_name?: string;
}

interface BookingDetailsProps {
  bookingDetails: BookingDetailsData;
  sendMessage?: (message: any) => void;
}

const formatDateRange = (checkIn: string, checkOut: string) => {
  // Parse dates as local dates to avoid timezone issues
  const [startYear, startMonth, startDay] = checkIn.split("-").map(Number);
  const [endYear, endMonth, endDay] = checkOut.split("-").map(Number);

  const startDate = new Date(startYear, startMonth - 1, startDay);
  const endDate = new Date(endYear, endMonth - 1, endDay);

  const startMonthName = startDate.toLocaleDateString("en-US", {
    month: "short",
  });
  const endMonthName = endDate.toLocaleDateString("en-US", {
    month: "short",
  });

  // If same month and year, show: "Sep 11-14, 2025"
  if (startMonth === endMonth && startYear === endYear) {
    return `${startMonthName} ${startDay}-${endDay}, ${startYear}`;
  }

  // If same year but different months, show: "Sep 30 - Oct 2, 2025"
  if (startYear === endYear) {
    return `${startMonthName} ${startDay} - ${endMonthName} ${endDay}, ${startYear}`;
  }

  // If different years, show: "Dec 30, 2025 - Jan 2, 2026"
  return `${startMonthName} ${startDay}, ${startYear} - ${endMonthName} ${endDay}, ${endYear}`;
};

const calculateNights = (checkIn: string, checkOut: string) => {
  // Parse dates as local dates to avoid timezone issues
  const [startYear, startMonth, startDay] = checkIn.split("-").map(Number);
  const [endYear, endMonth, endDay] = checkOut.split("-").map(Number);

  const start = new Date(startYear, startMonth - 1, startDay);
  const end = new Date(endYear, endMonth - 1, endDay);

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const BookingDetails = ({
  bookingDetails,
  sendMessage,
}: BookingDetailsProps) => {
  const nights = calculateNights(
    bookingDetails.check_in_date,
    bookingDetails.check_out_date
  );
  const dateRange = formatDateRange(
    bookingDetails.check_in_date,
    bookingDetails.check_out_date
  );

  // Default values in case hotel/room info is not provided
  const hotelName = bookingDetails.hotel_name || "Princess Grand Jamaica";
  const roomName = bookingDetails.room_name || "Platinum Junior Suite";

  return (
    <div className="space-y-4">
      {/* Success message */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">
          🎉 Booking Confirmed!
        </h3>
        <p className="text-gray-700">{bookingDetails.message}</p>
      </div>

      {/* Booking Details Card */}
      <Card className="max-w-lg overflow-hidden shadow-lg rounded-lg">
        <CardContent className="p-4 space-y-6">
          {/* Header with Calendar Icon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-4xl flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-xl">
                Booking details
              </h3>
            </div>
          </div>

          {/* Booking Information */}
          <div className="space-y-3 bg-gray-50 p-4 rounded-sm">
            {/* Confirmation Number */}
            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-700 font-medium">Confirmation #</span>
              <span className="font-bold text-gray-900 text-right">
                {bookingDetails.confirmation_code}
              </span>
            </div>

            {/* Travel Dates */}
            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-700 font-medium">Travel dates</span>
              <span className="font-bold text-gray-900 text-right">
                {dateRange} ({nights} night{nights > 1 ? "s" : ""})
              </span>
            </div>

            {/* Hotel */}
            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-700 font-medium">Hotel</span>
              <span className="font-bold text-gray-900 text-right">
                {hotelName}
              </span>
            </div>

            {/* Room */}
            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-700 font-medium">Room</span>
              <span className="font-bold text-gray-900 text-right">
                {roomName}
              </span>
            </div>

            {/* Occupancy */}
            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-700 font-medium">Occupancy</span>
              <span className="font-bold text-gray-900 text-right">
                {bookingDetails.guests} guest
                {bookingDetails.guests > 1 ? "s" : ""}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Total Amount */}
            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-900 font-bold">Total paid</span>
              <div className="font-bold text-gray-900 text-right">
                ${bookingDetails.price.toLocaleString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="max-w-lg space-y-3">
        <p className="text-gray-900">
          A confirmation email has been sent to your email address with all the
          booking details.
        </p>
      </div>
    </div>
  );
};
