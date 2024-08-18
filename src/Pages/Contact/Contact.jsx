// import React from 'react'
import qrCodeImage from '../../assets/qr-code.png';  
import facebookLogo from '../../assets/facebook-logo.png';  

function Contact() {
  const facebookUrl = 'https://www.facebook.com/OptimizeHydroponicCrop';  // Facebook URL

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-10">Contact Us</h1>

        {/* QR Code Section */}
        <div className="mb-12">
          <h2 className="text-2xl mb-4">Connect with us</h2>
          <img src={qrCodeImage} alt="QR Code to connect on Facebook" className="w-40 h-40" />
        </div>

        {/* Facebook Image Link Section */}
        <div>
          <h2 className="text-2xl mb-4">Or click below to visit our Facebook page</h2>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook Logo" className="w-16 h-16 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
