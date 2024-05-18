
export default function Companies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold leading-8 text-gray-800">Companies Using Our Furniture Products</h2>
        </div>
        <div className="mt-16 w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
            {/* Company 1 */}
            <div className="flex flex-col bg-gray-200 items-center justify-center p-8 shadow-lg rounded-lg mx-2 w-full sm:w-1/2 lg:w-1/4">
              <img className="h-20 w-auto mb-4" src="company1_logo.png" alt="Company 1 Logo" />
              <p className="text-lg text-gray-700">Company 1</p>
            </div>
            {/* Company 2 */}
            <div className="flex flex-col bg-gray-200 items-center justify-center p-8 shadow-lg rounded-lg mx-2 w-full sm:w-1/2 lg:w-1/4">
              <img className="h-20 w-auto mb-4" src="company2_logo.png" alt="Company 2 Logo" />
              <p className="text-lg text-gray-700">Company 2</p>
            </div>
            {/* Company 3 */}
            <div className="flex flex-col bg-gray-200 items-center justify-center p-8 shadow-lg rounded-lg mx-2 w-full sm:w-1/2 lg:w-1/4">
              <img className="h-20 w-auto mb-4" src="company3_logo.png" alt="Company 3 Logo" />
              <p className="text-lg text-gray-700">Company 3</p>
            </div>
            {/* Company 4 */}
            <div className="flex flex-col bg-gray-200 items-center justify-center p-8 shadow-lg rounded-lg mx-2 w-full sm:w-1/2 lg:w-1/4">
              <img className="h-20 w-auto mb-4" src="company4_logo.png" alt="Company 4 Logo" />
              <p className="text-lg text-gray-700">Company 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
