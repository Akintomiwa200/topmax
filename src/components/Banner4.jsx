
import { FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Banner4() {
  // Define the URLs for each platform
  const instagramUrl = "https://www.instagram.com/your_instagram";
  const twitterUrl = "https://twitter.com/your_twitter";
  const emailUrl = "mailto:your_email@example.com";
  const whatsappUrl = "https://wa.me/your_whatsapp_number";

  // Function to open a new page with the given URL
  const openNewPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold leading-8 text-gray-800">Follow Us on the Following Platform</h2>
        </div>
        <div className="flex mt-16 w-full items-center justify-center">
          {/* Instagram */}
          <div className="cursor-pointer" onClick={() => openNewPage(instagramUrl)}>
            <FaInstagram className="h-10 w-auto mx-7 text-gray-600 hover:text-gray-800" />
          </div>
          {/* Twitter */}
          <div className="cursor-pointer" onClick={() => openNewPage(twitterUrl)}>
            <FaTwitter className="h-10 w-auto mx-7 text-gray-600 hover:text-gray-800" />
          </div>
          {/* Email */}
          <div className="cursor-pointer" onClick={() => openNewPage(emailUrl)}>
            <FaEnvelope className="h-10 w-auto mx-7 text-gray-600 hover:text-gray-800" />
          </div>
          {/* WhatsApp */}
          <div className="cursor-pointer" onClick={() => openNewPage(whatsappUrl)}>
            <FaWhatsapp className="h-10 w-auto mx-7 text-gray-600 hover:text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
