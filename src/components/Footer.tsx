import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 ">
        <div className="max-w-[90%]">
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a global institution for the betterment of people
            and their music enthusiasts. This is surely a game up in your life,
            if you wanna do something in the field of Music, fostering global
            vibrant community.
          </p>
        </div>
        <div className="max-w-[90%]">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            +91 70110 46379
            <br />
            <address>1/4334, Street 2, Main City, New Delhi - 110032</address>
            <br />
            Email : vipul.maheshwari.
            <br />
            official@gmail.com
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <p className="flex flex-col items-start">
            <Link href={"/"}>Home</Link>
            <Link href={"/aboutus"}>About Us</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/courses"}>Courses</Link>
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <p className="flex flex-col items-start">
            <Link href={"https://www.facebook.com/"}>Facebook</Link>
            <Link href={"https://x.com/?lang=en"}>Twitter</Link>
            <Link href={"https://www.instagram.com/"}>Instagram</Link>
            <Link href={"https://in.pinterest.com/"}>Pinterest</Link>
          </p>
        </div>
      </div>
      <p className="text-sm text-center mt-8">
        &#169; Delhi Music School. All Rights not reserved :)
      </p>
    </footer>
  );
};

export default Footer;
