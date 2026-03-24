"use client";

import React from "react";
import {
  BsCheckCircleFill,
  BsBoxSeam,
  BsTruck,
  BsHouseDoor,
} from "react-icons/bs";

type StepStatus = "completed" | "current" | "upcoming";

interface Step {
  title: string;
  date: string;
  status: StepStatus;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Order Confirmed",
    date: "20 Feb 2026, 10:30 AM",
    status: "completed",
    icon: <BsCheckCircleFill />,
  },
  {
    title: "Processing",
    date: "20 Feb 2026, 12:00 PM",
    status: "completed",
    icon: <BsBoxSeam />,
  },
  {
    title: "Out for Delivery",
    date: "21 Feb 2026, 08:00 AM",
    status: "current",
    icon: <BsTruck />,
  },
  {
    title: "Delivered",
    date: "Pending",
    status: "upcoming",
    icon: <BsHouseDoor />,
  },
];

const OrderTrackingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl space-y-8">

        {/* ORDER SUMMARY CARD */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Track Your Order
              </h2>
              <p className="text-gray-500 mt-1">
                Order ID: <span className="font-semibold">#ORD-20260220</span>
              </p>
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              On The Way 🚚
            </div>
          </div>
        </div>

        {/* TRACKING PROGRESS */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-8">
            Shipment Progress
          </h3>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-1 bg-gray-200"></div>

            <div className="space-y-10">
              {steps.map((step, index) => {
                const isCompleted = step.status === "completed";
                const isCurrent = step.status === "current";

                return (
                  <div key={index} className="relative flex items-start gap-6">

                    {/* ICON CIRCLE */}
                    <div
                      className={`z-10 flex items-center justify-center w-10 h-10 rounded-full text-white text-lg
                        ${
                          isCompleted
                            ? "bg-green-500"
                            : isCurrent
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        }`}
                    >
                      {step.icon}
                    </div>

                    {/* STEP DETAILS */}
                    <div>
                      <h4
                        className={`font-semibold text-lg ${
                          isCompleted
                            ? "text-green-600"
                            : isCurrent
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </h4>

                      <p className="text-sm text-gray-500 mt-1">
                        {step.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* DELIVERY DETAILS */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Delivery Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-800">Shipping Address</p>
              <p>John Doe</p>
              <p>12 Admiralty Way</p>
              <p>Lekki Phase 1, Lagos</p>
            </div>

            <div>
              <p className="font-medium text-gray-800">Payment Method</p>
              <p>Debit Card</p>
              <p>Transaction ID: TXN-893475</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderTrackingPage;
