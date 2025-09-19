import { useState } from "react";

function Home() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [caption, setCaption] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handlePaste = (e) => {
    // Check if clipboard data contains files
    const items = e.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const file = items[i].getAsFile();
          setImage(file);
          setImageUrl(URL.createObjectURL(file));
          break;
        }
      }
    }
  };

  const handleGenerateCaption = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      const sampleCaptions = [
        "Sunset dreams and golden beams 🌅✨ #GoldenHour",
        "Finding peace in nature's embrace 🍃 #Mindfulness",
        "City lights and vibrant nights 🌃 UrbanExplorer",
        "Simple moments, lasting memories ❤️ #LifeIsBeautiful",
      ];
      setCaption(
        sampleCaptions[Math.floor(Math.random() * sampleCaptions.length)]
      );
      setIsGenerating(false);
    }, 2000);
  };

  const handleClear = () => {
    setImage(null);
    setImageUrl("");
    setCaption("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Turn Every Post into a Story Worth Sharing!!
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Generate catchy, creative, and tailored captions in seconds — for
            Instagram, TikTok, LinkedIn, or anywhere you post.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* Upload Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Upload Image
              </h2>

              <div
                className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
                onPaste={handlePaste}
                onClick={() => document.getElementById("file-upload").click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />

                {imageUrl &&
                typeof imageUrl === "string" &&
                imageUrl.startsWith("blob:") ? (
                  <div className="mb-6">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="max-h-60 mx-auto rounded-lg shadow-md"
                    />
                  </div>
                ) : (
                  <>
                    <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Click to upload an image
                    </p>
                  </>
                )}

                <p className="text-gray-500 text-sm">- or drop a file -</p>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-link text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Paste an image or URL"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    value={imageUrl}
                    onChange={handleUrlChange}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={handleGenerateCaption}
                disabled={!imageUrl || isGenerating}
                className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isGenerating ? "opacity-75" : ""
                }`}
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating...
                  </div>
                ) : (
                  "Generate Caption →"
                )}
              </button>
            </div>

            {/* Generated Caption */}
            {caption && (
              <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Your Generated Caption:
                </h3>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 text-lg">{caption}</p>
                </div>
                <div className="flex justify-end mt-4 space-x-3">
                  <button className="px-4 py-2 text-blue-600 hover:text-blue-800 transition duration-300">
                    <i className="far fa-copy mr-2"></i> Copy
                  </button>
                  <button className="px-4 py-2 text-blue-600 hover:text-blue-800 transition duration-300">
                    <i className="fas fa-redo mr-2"></i> Regenerate
                  </button>
                  <button
                    onClick={handleClear}
                    className="px-4 py-2 text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    <i className="fas fa-times mr-2"></i> Clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Platform Tips */}
      </div>
    </div>
  );
}

export default Home;
