import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Calendar, Bed } from "lucide-react";
import { useState } from "react";
import { config } from "@/lib/config";

interface BookingData {
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

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingData;
  dateRange: string;
  nights: number;
  sendMessage?: (message: any) => void;
}

const API_URL =
  process.env.NEXT_PUBLIC_HYPERFUNNEL_API_URL ||
  "https://hyperfunnel-api.arzion.com";

export const CheckoutModal = ({
  isOpen,
  onClose,
  booking,
  dateRange,
  nights,
  sendMessage,
}: CheckoutModalProps) => {
  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
  });

  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "");
    const limitedDigits = digitsOnly.slice(0, 16);
    // Add space every 4 digits
    return limitedDigits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setPaymentInfo({
      ...paymentInfo,
      cardNumber: formatted,
    });
  };
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    cardNumber: false,
  });
  const [showErrors, setShowErrors] = useState(false);

  const validateForm = () => {
    const newErrors = {
      firstName: !guestInfo.firstName.trim(),
      lastName: !guestInfo.lastName.trim(),
      email:
        !guestInfo.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestInfo.email),
      phone: !guestInfo.phone.trim(),
      cardNumber:
        !paymentInfo.cardNumber.trim() ||
        paymentInfo.cardNumber.replace(/\s/g, "").length < 13,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleCompleteBooking = async () => {
    setShowErrors(true);

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/bookings/${booking.booking_id}/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer_email: "alan.bruno@arzion.com",
            customer_name: "Alan Bruno",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Close modal after successful checkout
      onClose();

      if (sendMessage) {
        sendMessage({
          role: "user",
          parts: [
            {
              type: "text",
              text: `Checkout completed for booking ${booking.booking_id}. Please proceed to booking details.`,
            },
          ],
        });
      }
    } catch (error) {
      console.error("Error completing checkout:", error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-semibold">
            Secure checkout
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hotel Information */}
          <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-2 pr-4">
            <div className="w-24 h-18 bg-blue-200 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=150&fit=crop"
                alt={booking.hotel_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{booking.hotel_name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {dateRange} ({nights} nights)
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Bed className="w-4 h-4" />
                <span>{booking.room_name}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-base font-bold">
                ${booking.price?.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Guest Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              Guest information
            </h3>
            <div className="space-y-3">
              <div>
                <Input
                  placeholder="First name"
                  value={guestInfo.firstName}
                  onChange={(e) =>
                    setGuestInfo({ ...guestInfo, firstName: e.target.value })
                  }
                  className={`h-12 ${
                    showErrors && errors.firstName
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  required
                />
                {showErrors && errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    First name is required
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Last name"
                  value={guestInfo.lastName}
                  onChange={(e) =>
                    setGuestInfo({ ...guestInfo, lastName: e.target.value })
                  }
                  className={`h-12 ${
                    showErrors && errors.lastName
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  required
                />
                {showErrors && errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    Last name is required
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  value={guestInfo.email}
                  onChange={(e) =>
                    setGuestInfo({ ...guestInfo, email: e.target.value })
                  }
                  className={`h-12 ${
                    showErrors && errors.email
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  required
                />
                {showErrors && errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {!guestInfo.email.trim()
                      ? "Email is required"
                      : "Please enter a valid email address"}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Phone number"
                  type="tel"
                  value={guestInfo.phone}
                  onChange={(e) =>
                    setGuestInfo({ ...guestInfo, phone: e.target.value })
                  }
                  className={`h-12 ${
                    showErrors && errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  required
                />
                {showErrors && errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Phone number is required
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">
              Payment information
            </h3>
            <div className="space-y-3">
              <div>
                <Input
                  placeholder="1234 5678 9012 3456"
                  value={paymentInfo.cardNumber}
                  onChange={handleCardNumberChange}
                  className={`h-12 ${
                    showErrors && errors.cardNumber
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  maxLength={19}
                  required
                />
                {showErrors && errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {!paymentInfo.cardNumber.trim()
                      ? "Credit card number is required"
                      : "Please enter a valid credit card number (minimum 12 digits)"}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Complete Booking Button */}
          <div>
            <Button
              className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 text-lg rounded-full mb-2 font-bold"
              onClick={handleCompleteBooking}
            >
              Complete booking - ${booking.price?.toLocaleString()}
            </Button>

            {/* Security Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Secure 256-bit SSL encryption</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
