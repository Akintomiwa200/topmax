import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className=" bg-[url('../../src/assets/land.png')] bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center">
        <Navbar classame=''/>
        
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center flex-1">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Welcome to our furniture store! At our store, we are passionate about providing high-quality furniture 
          pieces that elevate your living space. From stylish sofas to elegant dining sets, we have everything 
          you need to create the home of your dreams.
        </p>
        <p className="text-gray-700 mt-4">
          Our team of designers works tirelessly to curate a collection of furniture that combines both 
          functionality and aesthetics. We believe that furniture should not only serve a practical purpose but 
          also enhance the overall look and feel of your home.
        </p>
        <p className="text-gray-700 mt-4">
          Whether you&apos;re furnishing a cozy apartment or a spacious house, we have a wide range of options to 
          suit every style and budget. Explore our collection today and discover the perfect pieces to transform 
          your space into a sanctuary of comfort and style.
        </p>
      </div>
    </div>
  );
};

export default About;
