import React, { useState } from "react";

const HomePage = () => {
  const [imageName, setImageName] = useState("");
  const [output, setOutput] = useState({});
  const [previewUrl, setPreviewUrl] = useState("");

  const imageOutputs = {
    image_1: { name: "Image 1", value: "gigh" },
    image_2: { name: "Image 2", value: "example_value_2" },
    image_3: { name: "Image 3", value: "example_value_3" },
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const normalizedFileName = file.name
        .split(".")[0]
        .toLowerCase()
        .replace(/\s+/g, "_");
      setImageName(normalizedFileName);
      setPreviewUrl(URL.createObjectURL(file));

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
    <div className="bg-gray-50 min-h-screen pt-5 pb-10">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center mb-3 text-2xl font-semibold text-indigo-600">
          DEPLOY YOUR IMAGE 👇🏻
        </h2>
        <div className="flex justify-center items-center">
          <input
            type="file"
            onChange={handleImageUpload}
            className="mb-4 px-4 py-2 border border-blue-300 rounded cursor-pointer text-blue-600"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:mt-4 lg:grid-cols-3 lg:grid-rows-1">
          {/* Left Box */}
          <div className="relative flex flex-col h-full shadow-lg bg-gray-100 rounded-lg p-6">
            <p className="text-lg font-bold text-gray-950">Problems:</p>
            <p className="mt-2 text-sm text-gray-850">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
            {/* Add more content as needed */}
          </div>

          {/* Center Box with Fixed Height */}
          <div className="relative flex flex-col h-80 overflow-hidden rounded-lg border border-blue-200 p-6 bg-white">
            <p className="text-lg font-bold text-gray-950 text-center">
              The image you chose:
            </p>
            <div className="flex flex-1 items-center justify-center">
              {previewUrl && (
                <div className="mt-4 mb-10 w-120 h-50 border border-blue-200 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={previewUrl}
                    alt={output.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Box */}
          <div className="relative flex flex-col h-full shadow-lg bg-gray-100 rounded-lg p-6">
            <p className="text-lg font-bold text-gray-950">
              Solutions after reviewing the image:
            </p>
            <p className="mt-2 text-sm text-gray-850">
              Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
              eget sem sodales gravida.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
