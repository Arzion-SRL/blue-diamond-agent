import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarSync, Shield } from "lucide-react";
import { useState } from "react";
import { CheckoutModal } from "./checkout-modal";

interface BookingData {
  hotel_id?: string;
  room_id?: string;
  room_name?: string;
  hotel_name?: string;
  check_in_date?: string;
  check_out_date?: string;
  guests?: number;
  price?: number;
  status?: string;
  booking_id?: string;
  created_at?: string;
  updated_at?: string | null;
  // Error fields
  status_code?: number;
  success?: boolean;
  detail?: string;
  request_body?: {
    hotel_id: string;
    room_id: string;
    check_in_date: string;
    check_out_date: string;
    guests: number;
    status: string;
  };
}

// Type for successful booking data (required fields for CheckoutModal)
interface SuccessfulBookingData {
  hotel_id: string;
  room_id: string;
  room_name: string;
  hotel_name: string;
  check_in_date: string;
  check_out_date: string;
  guests: number;
  price: number;
  status: string;
  booking_id: string;
  created_at: string;
  updated_at: string | null;
}

interface BookingProps {
  booking: BookingData;
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

// Type guard to check if booking data is complete for checkout
const isSuccessfulBooking = (
  booking: BookingData
): booking is SuccessfulBookingData => {
  return !!(
    booking.hotel_id &&
    booking.room_id &&
    booking.room_name &&
    booking.hotel_name &&
    booking.check_in_date &&
    booking.check_out_date &&
    booking.guests &&
    booking.price &&
    booking.status &&
    booking.booking_id &&
    booking.created_at
  );
};

export const Booking = ({ booking, sendMessage }: BookingProps) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Check if this is an error response
  const isError =
    booking.status_code &&
    booking.status_code !== 200 &&
    booking.status_code !== 201;
  const isRoomUnavailable = booking.status_code === 409;

  // Get data from the appropriate source
  const sourceData =
    isError && booking.request_body ? booking.request_body : booking;
  const checkInDate = sourceData.check_in_date || booking.check_in_date;
  const checkOutDate = sourceData.check_out_date || booking.check_out_date;
  const guests = sourceData.guests || booking.guests;

  // Only calculate if we have dates
  const nights =
    checkInDate && checkOutDate
      ? calculateNights(checkInDate, checkOutDate)
      : 0;
  const hotelName = booking.hotel_name || "Hotel";
  const roomName = booking.room_name || "Room";
  const dateRange =
    checkInDate && checkOutDate
      ? formatDateRange(checkInDate, checkOutDate)
      : "";

  // Render error state for room unavailability
  if (isRoomUnavailable) {
    return (
      <div className="space-y-4">
        {/* Alternative suggestions */}
        <Card className="max-w-md overflow-hidden transition-all duration-200 hover:shadow-lg rounded-lg bg-orange-50 hover:cursor-pointer">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-4xl flex items-center justify-center flex-shrink-0">
                <CalendarSync className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  What would you like to do?
                </h3>
                <p className="text-xs text-gray-600">
                  We can help you find alternatives
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-orange-100 p-4 rounded-sm">
              <div className="flex justify-between items-top gap-4">
                <span className="text-gray-600">Requested dates</span>
                <span className="font-semibold text-gray-900 text-right">
                  {dateRange} ({nights} night{nights > 1 ? "s" : ""})
                </span>
              </div>

              <div className="flex justify-between items-top gap-4">
                <span className="text-gray-600">Guests</span>
                <span className="font-semibold text-gray-900 text-right">
                  {guests} guest{guests && guests > 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                className="w-full bg-primary text-primary-foreground h-12 rounded-full font-bold"
                onClick={() => {
                  if (sendMessage) {
                    sendMessage({
                      role: "user",
                      parts: [
                        {
                          type: "text",
                          text: `Show me other available rooms for ${dateRange} for ${guests} guests at this hotel.`,
                        },
                      ],
                    });
                  }
                }}
              >
                Show Other Available Rooms
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 rounded-full font-bold"
                onClick={() => {
                  if (sendMessage) {
                    sendMessage({
                      role: "user",
                      parts: [
                        {
                          type: "text",
                          text: `Show me similar hotels for ${dateRange} for ${guests} guests.`,
                        },
                      ],
                    });
                  }
                }}
              >
                Find Similar Hotels
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render other errors
  if (isError) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-red-600 font-semibold">
            😞 There was an issue processing your booking request.
          </p>
          <p className="text-gray-600">
            {booking.detail ||
              "An error occurred while processing your request."}
          </p>
          {dateRange && (
            <p className="text-gray-900">
              Requested dates: <span className="font-bold">{dateRange}</span>
              {guests && (
                <span>
                  {" "}
                  for{" "}
                  <span className="font-bold">
                    {guests} guest{guests > 1 ? "s" : ""}
                  </span>
                </span>
              )}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Render success state (original functionality)
  return (
    <div className="space-y-4">
      {/* Success message */}
      <div className="space-y-2">
        <p className="text-gray-900">
          Fantastic choice! I have provisionally reserved the{" "}
          <span className="font-bold">{roomName}</span> at{" "}
          <span className="font-bold">{hotelName}</span> for{" "}
          <span className="font-bold">{dateRange}</span>.
        </p>
        <p className="text-gray-600">Here is a secure link for the payment:</p>
      </div>

      {/* Payment Card */}
      <Card className="max-w-md overflow-hidden shadow-lg rounded-lg">
        <CardContent className="p-4 space-y-6">
          {/* Secure Payment Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-4xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Secure Payment</h3>
              <p className="text-xs text-gray-600">SSL encrypted & protected</p>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-3 bg-gray-50 p-4 rounded-sm">
            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-600">Travel dates</span>
              <span className="font-semibold text-gray-900 text-right">
                {dateRange} ({nights} night{nights > 1 ? "s" : ""})
              </span>
            </div>

            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-600">Hotel</span>
              <span className="font-semibold text-gray-900 text-right">
                {hotelName}
              </span>
            </div>

            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-600">Room</span>
              <span className="font-semibold text-gray-900 text-right">
                {roomName}
              </span>
            </div>

            <div className="flex justify-between items-top gap-4">
              <span className="text-gray-600">Guests</span>
              <span className="font-semibold text-gray-900 text-right">
                {booking.guests || 1} guest
                {(booking.guests || 1) > 1 ? "s" : ""}
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-top gap-4">
              <span className="font-bold text-gray-900">Total</span>
              <div className="font-bold text-gray-900 text-right">
                ${booking.price?.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Pay Button */}
          <Button
            className="w-full bg-primary hover:bg-primary-hover text-white h-12 rounded-full mb-4 font-bold"
            onClick={() => setIsCheckoutOpen(true)}
          >
            Pay Securely: ${booking.price?.toLocaleString()}
          </Button>

          {/* Payment Methods */}
          <div className="flex items-center justify-center gap-2">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6667 13.2H1.33333C0.979711 13.2 0.640573 13.063 0.390524 12.8192C0.140476 12.5754 0 12.2447 0 11.9L0 1.49995C0 1.15517 0.140476 0.82451 0.390524 0.580712C0.640573 0.336915 0.979711 0.199951 1.33333 0.199951L18.6667 0.199951C19.0203 0.199951 19.3594 0.336915 19.6095 0.580712C19.8595 0.82451 20 1.15517 20 1.49995V11.9C20 12.2447 19.8595 12.5754 19.6095 12.8192C19.3594 13.063 19.0203 13.2 18.6667 13.2ZM9.91111 8.19603L9.71167 9.41478C10.2212 9.62461 10.7717 9.7228 11.3244 9.70241H11.3183C11.9659 9.73911 12.6072 9.56099 13.1378 9.19704L13.1283 9.20299C13.3448 9.04763 13.5208 8.8449 13.6422 8.6111C13.7635 8.37731 13.8269 8.11899 13.8272 7.85695V7.84883C13.8272 7.25299 13.4183 6.75845 12.6122 6.37603C12.3923 6.27243 12.1819 6.15065 11.9833 6.01203L11.9961 6.0207C11.9405 5.98582 11.8943 5.93855 11.8611 5.88279C11.828 5.82703 11.809 5.76439 11.8056 5.70003V5.69895C11.8099 5.63192 11.8315 5.56702 11.8683 5.51024C11.9051 5.45345 11.9559 5.40658 12.0161 5.37395L12.0183 5.37287C12.2048 5.26785 12.4191 5.21939 12.6339 5.23366H12.6306H12.675L12.7178 5.23312C13.0756 5.23312 13.415 5.30841 13.7211 5.44328L13.7056 5.43733L13.8356 5.50503L14.035 4.32908C13.6318 4.1761 13.2026 4.09855 12.77 4.10049H12.7428H12.7444C12.1185 4.0739 11.5013 4.25154 10.9906 4.60533L10.9994 4.59937C10.7871 4.74539 10.6139 4.939 10.4943 5.16391C10.3747 5.38882 10.3122 5.63845 10.3122 5.89178V5.89449C10.3067 6.46758 10.73 6.96266 11.5711 7.36783C11.7933 7.46262 11.985 7.57853 12.1567 7.71774L12.1528 7.71449C12.2022 7.75523 12.2424 7.80555 12.2708 7.86224C12.2992 7.91894 12.3152 7.98078 12.3178 8.04383V8.04599C12.3178 8.21878 12.2122 8.3672 12.06 8.43383L12.0572 8.43491C11.8906 8.52049 11.6928 8.57033 11.4828 8.57033H11.4572H11.4583H11.4167C10.9406 8.57033 10.4894 8.46741 10.085 8.28324L10.1044 8.29137L9.91389 8.1982L9.91111 8.19603ZM15.5361 8.81408H17.3778C17.4074 8.93794 17.4654 9.20877 17.5517 9.62658H18.8889L17.7256 4.19312H16.6144C16.4555 4.17904 16.2962 4.21549 16.1603 4.29701C16.0245 4.37854 15.9193 4.50076 15.8606 4.64541L15.8589 4.65028L13.7256 9.62658H15.2367L15.54 8.81462L15.5361 8.81408ZM8.27278 4.19312L7.36944 9.62658H8.81056L9.71333 4.19312H8.27278ZM2.73444 5.30191L3.90667 9.61791H5.42556L7.68944 4.19312H6.16389L4.75611 7.90028L4.60833 7.14683L4.10611 4.65028C4.07945 4.50616 3.99627 4.37782 3.8742 4.29248C3.75214 4.20714 3.60078 4.1715 3.45222 4.19312L3.45556 4.19258H1.12944L1.11222 4.30253C2.90333 4.74616 4.08 5.70328 4.61 7.14628C4.44775 6.73365 4.19653 6.35978 3.87333 6.04995L3.87278 6.04941C3.55581 5.73203 3.17663 5.48004 2.75778 5.30841L2.73556 5.30028L2.73444 5.30191ZM17.1439 7.69662H15.9439C16.025 7.4879 16.2161 6.98234 16.5172 6.17995L16.5428 6.10358L16.6317 5.88366C16.6676 5.79338 16.6935 5.72008 16.7094 5.66374L16.8139 6.12903L17.1433 7.69445L17.1439 7.69662Z"
                fill="#818181"
              />
            </svg>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.93062 4.41992C0.41682 4.41992 0 4.8362 0 5.34992V16.0499C0 16.5637 0.41688 16.9799 0.93062 16.9799H19.0694C19.5832 16.9799 20 16.5636 20 16.0499V5.34992C20 4.83614 19.5831 4.41992 19.0694 4.41992H0.93062ZM0.7444 7.05868H2.2019L2.39002 7.44492V7.05866H4.09878L4.47252 7.90366L4.8369 7.05866H10.2631C10.5098 7.05866 10.7316 7.1043 10.8944 7.2493V7.05868H12.3794V7.24928C12.6352 7.10862 12.9516 7.05868 13.3119 7.05868H15.4644L15.6638 7.44492V7.05866H17.2575L17.475 7.44492V7.05866H19.0275V10.3324H17.4588L17.1619 9.8368V10.3324H15.2044L14.9913 9.81054H14.5094L14.2919 10.3324H13.2756C12.8769 10.3324 12.5742 10.2378 12.3794 10.133V10.3324H9.96436V9.5893C9.96436 9.48444 9.94576 9.47836 9.88248 9.47618H9.79186L9.79436 10.3324H5.12436V9.92742L4.95686 10.3337H3.98124L3.81374 9.93368V10.3324H1.935L1.72 9.81054H1.23812L1.0225 10.3324H0.0675V8.61492L0.7444 7.05868ZM0.0675 9.88052H0.67438L0.89124 9.35552H2.05376L2.26812 9.88052H3.40438V8.03678L4.21626 9.88052H4.70686L5.51626 8.03864L5.51876 9.88052H6.09126V7.52866H5.16126L4.49 9.12432L3.75874 7.5287H2.8475V9.75492L1.8975 7.52866H1.0675L0.0675 9.88054V9.88052ZM6.51062 7.52864V9.88052H8.37312V9.39364H7.06812V8.92432H8.34188V8.44244H7.06812V8.01868H8.37312V7.52868H6.51062V7.52864ZM8.77562 7.52864V9.88052H9.33562V9.02492H9.93624C10.1378 9.02492 10.2626 9.04284 10.3444 9.12554C10.4462 9.23868 10.4325 9.44216 10.4325 9.58366L10.435 9.88054H10.9994V9.41804C10.9994 9.20804 10.9859 9.10376 10.9069 8.9868C10.8571 8.91828 10.7525 8.83548 10.63 8.78868C10.7752 8.7305 11.0244 8.53674 11.0244 8.1618C11.0244 7.8995 10.9177 7.7462 10.7406 7.64118C10.5597 7.53612 10.3492 7.52868 10.0631 7.52868H8.77562V7.52864ZM11.3431 7.52864V9.88052H11.9131V7.52866H11.3431V7.52864ZM13.3319 7.52864C12.9467 7.52864 12.6638 7.61534 12.4831 7.80304C12.2429 8.05496 12.1819 8.37364 12.1819 8.7224C12.1819 9.15004 12.2842 9.42024 12.4806 9.6199C12.6754 9.81956 13.0189 9.88052 13.2906 9.88052H13.945L14.1563 9.35552H15.3169L15.5344 9.88052H16.6725V8.11552L17.7319 9.88052H18.5244V7.52866H17.9519V9.1668L16.9694 7.52868H16.1181V9.75304L15.1719 7.52866H14.3344L13.5469 9.37806H13.2956C13.1485 9.37806 12.9923 9.34986 12.9062 9.2568C12.8023 9.13812 12.7525 8.95624 12.7525 8.7043C12.7525 8.45782 12.8178 8.27082 12.9131 8.1718C13.024 8.063 13.1391 8.03242 13.3431 8.03242H13.8731V7.52866H13.3319L13.3319 7.52864ZM1.4675 7.91492L1.84626 8.85554H1.09126L1.4675 7.91492ZM14.7481 7.91492L15.135 8.85554H14.3631L14.7481 7.91492ZM9.32938 8.01554H10.02C10.1177 8.01554 10.2194 8.02014 10.2856 8.05804C10.3583 8.0922 10.4031 8.16514 10.4031 8.26554C10.4031 8.368 10.3602 8.45008 10.2875 8.48804C10.2105 8.53478 10.1198 8.5368 10.0106 8.5368H9.3294V8.01552L9.32938 8.01554ZM4.0106 11.0899H7.02186L7.45374 11.5905L7.9156 11.0899H9.93122C10.1643 11.0899 10.5468 11.1141 10.7187 11.2812V11.0899H12.52C12.6893 11.0899 13.0558 11.1238 13.2731 11.2812V11.0899H16.0038V11.2812C16.1395 11.1504 16.4267 11.0899 16.6713 11.0899H18.2006V11.2812C18.3611 11.1646 18.5874 11.0899 18.8994 11.0899H19.9337V11.5568H18.8206C18.2344 11.5568 18.0194 11.9146 18.0194 12.2549C18.0194 12.9974 18.6736 12.9633 19.1981 12.9812C19.2954 12.9812 19.3545 12.9972 19.395 13.033C19.4361 13.0656 19.4631 13.1203 19.4631 13.1887C19.4631 13.2527 19.4364 13.3055 19.3975 13.3418C19.3526 13.3858 19.2778 13.3999 19.1712 13.3999H18.0969V13.903H19.1756C19.5336 13.903 19.798 13.8016 19.9338 13.6024V14.2124C19.7099 14.321 19.4156 14.3637 19.1144 14.3637H17.6669V14.1537C17.4992 14.2887 17.1966 14.3637 16.9069 14.3637H12.3431V13.6068C12.3431 13.514 12.3337 13.5099 12.2413 13.5099H12.1694V14.3637H10.6669V13.4799C10.4154 13.589 10.1304 13.5987 9.88874 13.5949H9.70938V14.3649L7.88812 14.3637L7.44062 13.8543L6.965 14.3637H4.01062V11.0899H4.0106ZM4.51372 11.5599V13.9118H6.72812L7.44372 13.133L8.13186 13.9118H9.21874V13.123H9.91624C10.4049 13.123 10.89 12.9882 10.89 12.3349C10.89 11.6837 10.3911 11.5599 9.94748 11.5599H8.16122L7.45 12.3312L6.7625 11.5599H4.51372ZM11.1419 11.5599V13.9118H11.7025V13.053H12.2994C12.5031 13.053 12.6278 13.0732 12.7094 13.1574C12.8132 13.2668 12.7994 13.4759 12.7994 13.6174V13.9118H13.36V13.4455C13.3577 13.2382 13.3464 13.131 13.2675 13.0162C13.2199 12.9476 13.1187 12.8648 12.9944 12.8187C13.1414 12.7599 13.3899 12.5684 13.39 12.193C13.39 11.9248 13.2794 11.7783 13.1031 11.6712C12.9198 11.5727 12.7134 11.5599 12.4306 11.5599L11.1419 11.5599ZM13.7087 11.5599V13.9118H15.5712V13.4237L14.2644 13.4218V12.9537H15.5394V12.4737H14.2644V12.0462H15.5712V11.5599H13.7087ZM16.6375 11.5599C16.0522 11.5599 15.8394 11.9188 15.8394 12.2599C15.8394 13.0041 16.4935 12.9701 17.0156 12.988C17.1128 12.988 17.1717 13.0047 17.2144 13.0405C17.2527 13.0732 17.2825 13.127 17.2825 13.1955C17.2825 13.2597 17.2546 13.3129 17.2162 13.3493C17.1692 13.3934 17.0946 13.4074 16.9887 13.4074H15.9056V13.9118H16.9931C17.5561 13.9118 17.87 13.6752 17.87 13.1693C17.87 12.9273 17.8118 12.7844 17.7031 12.6712C17.5767 12.5422 17.3687 12.4899 17.0656 12.4824L16.765 12.4743C16.6699 12.4743 16.6064 12.4681 16.5475 12.4474C16.4772 12.4213 16.4256 12.3611 16.4256 12.2724C16.4256 12.1978 16.4482 12.1411 16.5094 12.103C16.5655 12.0644 16.6316 12.0605 16.7331 12.0605H17.7569V11.5599H16.6375ZM8.6581 11.8118V13.693L7.80248 12.7374L8.6581 11.8118ZM5.06748 12.0474H6.46936L7.08124 12.7337L6.44248 13.4243H5.06748V12.9562H6.29498V12.4755H5.06748V12.0474ZM9.21186 12.0474H9.9431C10.1455 12.0474 10.2856 12.1304 10.2856 12.338C10.2856 12.5434 10.1516 12.6518 9.93624 12.6518H9.21184L9.21186 12.0474ZM11.7119 12.0474H12.4025C12.5023 12.0474 12.6021 12.0495 12.67 12.0893C12.7426 12.1268 12.7856 12.1982 12.7856 12.2974C12.7856 12.3966 12.7426 12.4765 12.67 12.5199C12.595 12.5639 12.5022 12.568 12.3931 12.568H11.7119V12.0474ZM18.9156 12.0637H19.9337V12.7355C19.9181 12.7153 19.9045 12.6954 19.8819 12.6774C19.7575 12.548 19.5535 12.495 19.2481 12.4874L18.9456 12.4793C18.8526 12.4793 18.7889 12.4731 18.73 12.4524C18.6576 12.4262 18.6081 12.3659 18.6081 12.2768C18.6081 12.2019 18.6311 12.145 18.69 12.1068C18.7469 12.068 18.814 12.0637 18.9156 12.0637Z"
                fill="#818181"
              />
            </svg>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6667 13.2H1.33333C0.979711 13.2 0.640573 13.063 0.390524 12.8192C0.140476 12.5754 0 12.2447 0 11.9L0 1.49995C0 1.15517 0.140476 0.82451 0.390524 0.580712C0.640573 0.336915 0.979711 0.199951 1.33333 0.199951L18.6667 0.199951C19.0203 0.199951 19.3594 0.336915 19.6095 0.580712C19.8595 0.82451 20 1.15517 20 1.49995V11.9C20 12.2447 19.8595 12.5754 19.6095 12.8192C19.3594 13.063 19.0203 13.2 18.6667 13.2ZM10.6178 5.39995C10.2385 5.39995 9.87479 5.54685 9.60662 5.80832C9.33844 6.06979 9.18778 6.42442 9.18778 6.7942C9.18778 7.16398 9.33844 7.51861 9.60662 7.78009C9.87479 8.04156 10.2385 8.18845 10.6178 8.18845C10.997 8.18845 11.3608 8.04156 11.6289 7.78009C11.8971 7.51861 12.0478 7.16398 12.0478 6.7942C12.0478 6.42442 11.8971 6.06979 11.6289 5.80832C11.3608 5.54685 10.997 5.39995 10.6178 5.39995ZM11.9144 5.47795L13.0444 8.1397H13.3233L14.4733 5.47795H13.9106L13.1906 7.21995L12.4794 5.47633H11.9133L11.9144 5.47795ZM5.25889 7.32666L4.92444 7.64191C5.10722 7.93983 5.43667 8.13645 5.81278 8.13645L5.84833 8.13591H5.84667C5.96414 8.14394 6.08205 8.12831 6.19307 8.09C6.30408 8.05168 6.40582 7.99151 6.49196 7.91322C6.5781 7.83492 6.64679 7.74018 6.69376 7.6349C6.74073 7.52961 6.76498 7.41602 6.765 7.3012V7.28278V7.28387C6.765 6.8722 6.58722 6.68316 5.99889 6.47408C5.68778 6.36087 5.59556 6.28774 5.59556 6.14799C5.59556 5.98387 5.76222 5.85983 5.98278 5.85983C6.06405 5.86193 6.14381 5.88175 6.2162 5.91783C6.2886 5.95392 6.35178 6.00536 6.40111 6.06837L6.40222 6.06945L6.67333 5.72278C6.46161 5.53683 6.18662 5.43414 5.90167 5.43462H5.89056H5.89111C5.78619 5.4281 5.68099 5.44231 5.58184 5.4764C5.48269 5.51049 5.39163 5.56377 5.31411 5.63302C5.2366 5.70227 5.17423 5.78608 5.13076 5.87941C5.08728 5.97275 5.06359 6.07368 5.06111 6.17616V6.17724C5.06111 6.53799 5.22667 6.71783 5.71556 6.89008C5.85444 6.93341 5.97333 6.98324 6.08556 7.04337L6.07444 7.03795C6.12183 7.06574 6.16108 7.10496 6.18842 7.15182C6.21576 7.19869 6.23027 7.25162 6.23056 7.30553V7.30662C6.23012 7.40393 6.1902 7.49712 6.11952 7.56583C6.04884 7.63454 5.95314 7.67318 5.85333 7.67333L5.82611 7.67224H5.82722H5.82C5.57389 7.67224 5.36167 7.53195 5.26167 7.32937L5.26 7.32558L5.25889 7.32666ZM8.345 5.41999H8.33667C7.96426 5.41944 7.60661 5.56188 7.34111 5.81649C7.14565 6.0052 7.01212 6.24629 6.95748 6.50914C6.90283 6.77199 6.92953 7.04474 7.03419 7.29277C7.13885 7.54079 7.31674 7.7529 7.54528 7.90215C7.77383 8.0514 8.04271 8.13107 8.31778 8.13103H8.33444C8.57167 8.13103 8.795 8.07524 8.99278 7.97612L8.98445 7.97991V7.3857C8.83222 7.55903 8.60833 7.66845 8.35778 7.66953L8.32944 7.67008C8.21095 7.67023 8.09368 7.64669 7.98488 7.60091C7.87609 7.55513 7.77807 7.48809 7.6969 7.40392C7.61573 7.31975 7.55312 7.22025 7.51295 7.11156C7.47278 7.00287 7.45589 6.8873 7.46333 6.77199V6.77416L7.46278 6.74437C7.46278 6.27312 7.85111 5.89016 8.33278 5.88366H8.33333C8.59278 5.88528 8.825 5.99741 8.98333 6.17453L8.98445 6.17562V5.57978C8.79023 5.47518 8.57188 5.42056 8.35 5.42108H8.34556L8.345 5.41999ZM17.0433 7.03091H17.1111L17.8294 8.07416H18.4683L17.6294 6.98108C17.8079 6.95578 17.9698 6.86535 18.0824 6.72808C18.195 6.59082 18.25 6.41697 18.2361 6.2417V6.24387C18.2361 5.75745 17.8928 5.47795 17.2944 5.47795H16.525V8.07362H17.0439L17.0433 7.03091ZM14.7111 5.47795V8.07362H16.1822V7.63433H15.2278V6.93341H16.145V6.49358H15.2278V5.91778H16.1822V5.47849L14.7111 5.47795ZM4.21167 5.47795V8.07362H4.73V5.47795H4.21167ZM1.77778 5.47795V8.07362H2.53722C2.88199 8.09213 3.22147 7.98476 3.48944 7.77245L3.48667 7.77462C3.63656 7.65274 3.75744 7.5005 3.84091 7.32848C3.92437 7.15646 3.96842 6.96879 3.97 6.77849V6.76387C3.97019 6.58528 3.93233 6.4086 3.8588 6.24504C3.78528 6.08147 3.6777 5.93458 3.54289 5.81368C3.40808 5.69278 3.24898 5.60051 3.07567 5.54272C2.90236 5.48492 2.71862 5.46287 2.53611 5.47795L2.54111 5.47741L1.77778 5.47795ZM2.43667 7.63433H2.29722V5.91724H2.43667C2.56391 5.90365 2.69265 5.91541 2.81509 5.95182C2.93752 5.98822 3.05109 6.04852 3.14889 6.12903L3.14722 6.12795C3.32389 6.28774 3.43389 6.51524 3.43389 6.76766V6.77416V6.77362V6.77903C3.43389 7.03416 3.32389 7.26437 3.14778 7.42687L3.14722 7.42741C2.94629 7.58578 2.68923 7.66017 2.43222 7.63433L2.43611 7.63487L2.43667 7.63433ZM17.195 6.67287H17.0439V5.88637H17.2033C17.53 5.88637 17.7028 6.01962 17.7028 6.27149C17.7028 6.53366 17.5272 6.67287 17.195 6.67287Z"
                fill="#818181"
              />
            </svg>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.27505 11.525C8.35838 11.525 10.2917 11.6083 11.4417 11.325H11.45C12.775 11 14.6167 10.0666 15.0917 7.01662C15.0917 7.01662 16.15 3.19995 10.9 3.19995H6.39172C5.98338 3.19995 5.63338 3.49995 5.56672 3.89995L3.65005 16.0333C3.60838 16.2833 3.80838 16.5166 4.05838 16.5166H6.91672L7.61672 12.0833C7.66672 11.7666 7.94172 11.525 8.27505 11.525Z"
                fill="#818181"
              />
              <path
                d="M15.8251 7.6084C15.1501 10.7167 13.0251 12.3584 9.64179 12.3584H8.41679L7.55846 17.7917C7.52512 18.0084 7.69179 18.2001 7.90846 18.2001H9.49179C9.77512 18.2001 10.0251 17.9917 10.0668 17.7084C10.1335 17.3751 10.5001 14.9417 10.5751 14.5251C10.6168 14.2417 10.8668 14.0334 11.1501 14.0334H11.5168C13.8668 14.0334 15.7085 13.0751 16.2501 10.3167C16.4668 9.20007 16.3501 8.2834 15.8251 7.6084Z"
                fill="#818181"
              />
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Important Information */}
      <p className="text-gray-900">
        Your reservation is held for 15 minutes. You'll receive confirmation
        details immediately after payment.
      </p>

      {/* Checkout Modal - only render for successful bookings */}
      {isSuccessfulBooking(booking) && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          booking={booking}
          dateRange={dateRange}
          nights={nights}
          sendMessage={sendMessage}
        />
      )}
    </div>
  );
};
