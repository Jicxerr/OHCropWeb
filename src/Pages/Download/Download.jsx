import React from "react";

function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-300 p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full ">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-green-700 text-center">
            Download Documentation
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            Welcome to the OhCrop documentation download page. Here, you can
            find all the necessary documents to get started with our hydroponic
            management system. Our comprehensive guides and manuals will help
            you set up and optimize your system for the best results.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Available Documents
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <a href="#user-guide" className="text-green-600 hover:underline">
                User Guide
              </a>{" "}
              - Comprehensive guide on using the OhCrop system.
            </li>
            <li>
              <a
                href="#installation-guide"
                className="text-green-600 hover:underline"
              >
                Installation Guide
              </a>{" "}
              - Step-by-step instructions for setting up the system.
            </li>
            <li>
              <a
                href="#troubleshooting"
                className="text-green-600 hover:underline"
              >
                Troubleshooting
              </a>{" "}
              - Solutions to common issues and FAQs.
            </li>
            <li>
              <a href="#api-docs" className="text-green-600 hover:underline">
                API Documentation
              </a>{" "}
              - Detailed API reference for developers.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Download Links
          </h2>
          <div className="space-y-4 mb-6">
            <a
              href="/downloads/user-guide.pdf"
              className="block bg-green-600 text-white text-center py-3 px-6 rounded-lg hover:bg-green-700"
            >
              Download User Guide
            </a>
            <a
              href="/downloads/installation-guide.pdf"
              className="block bg-green-600 text-white text-center py-3 px-6 rounded-lg hover:bg-green-700"
            >
              Download Installation Guide
            </a>
            <a
              href="/downloads/troubleshooting.pdf"
              className="block bg-green-600 text-white text-center py-3 px-6 rounded-lg hover:bg-green-700"
            >
              Download Troubleshooting Guide
            </a>
            <a
              href="/downloads/api-docs.pdf"
              className="block bg-green-600 text-white text-center py-3 px-6 rounded-lg hover:bg-green-700"
            >
              Download API Documentation
            </a>
          </div>

          <p className="text-gray-700 text-center">
            If you have any questions or need further assistance, please feel
            free to{" "}
            <a
              href="mailto:support@ohcrop.com"
              className="text-green-600 hover:underline"
            >
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Download;
