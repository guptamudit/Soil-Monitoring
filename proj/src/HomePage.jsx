import React, { useState } from "react";

const HomePage = () => {
  const [imageName, setImageName] = useState("");
  const [output, setOutput] = useState({});
  const [previewUrl, setPreviewUrl] = useState("");

  // JSON object to store outputs based on image name
  const imageOutputs = {
    image_1: {
      name: "Image 1",
      value: "gigh",
    },
    image_2: {
      name: "Image 2",
      value: "example_value_2",
    },
    image_3: {
      name: "Image 3",
      value: "example_value_3",
    },
  };

  // Handles the file upload and sets image name/output based on file name
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Normalize file name
      const normalizedFileName = file.name
        .split(".")[0]
        .toLowerCase()
        .replace(/\s+/g, "_");
      setImageName(normalizedFileName);

      // Display image preview
      setPreviewUrl(URL.createObjectURL(file));

      // Check if the normalized name exists in the predefined outputs
      if (imageOutputs[normalizedFileName]) {
        setOutput(imageOutputs[normalizedFileName]);
      } else {
        setOutput({
          name: normalizedFileName,
          value: "No output defined for this image",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 flex space-x-8">
        {/* Left side: Image upload and preview */}
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-xl font-semibold text-blue-600 mb-4">
            Upload an Image
          </h1>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mb-4 px-4 py-2 border border-blue-300 rounded cursor-pointer text-blue-600"
          />
          {previewUrl && (
            <div className="mt-4 w-64 h-64 border border-blue-200 rounded-lg overflow-hidden shadow-sm">
              <img
                src={previewUrl}
                alt={output.name}
                className="w-full h-full object-cover"
              />
              <div className="bg-blue-600 text-white text-center py-2 text-sm">
                {output.name || "No Name"}
              </div>
            </div>
          )}
        </div>

        {/* Right side: Output details */}
        <div className="w-1/2 flex flex-col justify-center items-start bg-blue-100 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-600 mb-2">
            Image Details
          </h2>
          <div className="bg-white p-4 rounded shadow-md w-full">
            <p className="text-blue-800 font-semibold">Image name:</p>
            <p className="text-blue-600 mb-2">
              {output.name || "No image selected"}
            </p>
            <p className="text-blue-800 font-semibold">Image value:</p>
            <p className="text-blue-600">
              {output.value || "No output defined for this image"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
