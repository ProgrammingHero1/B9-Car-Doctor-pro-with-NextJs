"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Page = () => {
  const session = useSession();
  const [bookings, setBooking] = useState([]);
  const loadData = async () => {
    const resp = await fetch(
      `https://car-doctor-pro-nine.vercel.app/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await resp.json();
    setBooking(data?.myBookings);
  };

  const handleDelete = async (id) => {
    const deleted = await fetch(
      `https://car-doctor-pro-nine.vercel.app/my-bookings/api/booking/${id}`, {
        method : "DELETE",
      }
    );
    const resp = await deleted.json();
    if(resp?.response?.deletedCount >  0) {
      toast.success(resp?.message)
      loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, [session]);

  return (
    <div className="container mx-auto">
      <ToastContainer/>
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            My Bookings
          </h1>
        </div>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map(({ serviceTitle, _id, date, price }) => (
                <tr key={_id}>
                  <th>1</th>
                  <td>{serviceTitle}</td>
                  <td>{price}</td>
                  <td>{date}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link href={`/my-bookings/update/${_id}`}><button class="btn btn-primary">Edit</button></Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        class="btn btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
