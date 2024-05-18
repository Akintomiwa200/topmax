import Navbar from '../components/Navbar'; // Import the Navbar component

export const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Navbar /> 
      <div className='bg-gray-300 w-full flex justify-center items-center flex-1'>
        NotFound
      </div>
    </div>
  );
};
