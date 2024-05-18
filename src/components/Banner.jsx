
const Banner = () => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen w-full flex justify-center flex-col items-center">
        <h2 className="text-black text-3xl mb-6">Refining Products</h2>
        <div className="flex flex-col justify-center items-center gap-6 p-4 w-full">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 w-full sm:w-4/5">
            <div className="w-full sm:w-1/4">
              <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGZ1cm5pdHVyZXxlbnwwfHx8fDE2MTM0Nzc5ODU&ixlib=rb-1.2.1&q=80&w=400" alt="Elegant Wooden Sofa" className="object-cover w-full rounded-lg" />
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-black text-lg font-semibold">Elegant Wooden Sofa</h1>
              <p className="text-justify text-sm">Experience ultimate comfort with our elegantly designed wooden sofa. Handcrafted from premium oak, this sofa offers both durability and timeless style, making it a perfect centerpiece for any living room.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 w-full sm:w-4/5">
            
            <div className="w-full sm:w-3/4">
              <h1 className="text-black text-lg font-semibold">Contemporary Dining Table Set</h1>
              <p className="text-justify text-sm">Our contemporary dining table set combines modern design with classic functionality. Crafted from high-quality materials, it features a spacious table and comfortable chairs, perfect for family gatherings.</p>
            </div>
            <div className="w-full sm:w-1/4">
              <img src="https://images.unsplash.com/photo-1598300050409-e919dc95a65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZ1cm5pdHVyZXxlbnwwfHx8fDE2MTM0Nzc5ODU&ixlib=rb-1.2.1&q=80&w=400" alt="Dining Table Set" className="object-cover w-full rounded-lg" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 w-full sm:w-4/5">
            <div className="w-full sm:w-1/4">
              <img src="https://images.unsplash.com/photo-1615874959474-53612e201f7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxmdXJuaXR1cmV8ZW58MHx8fHwxNjEzNDc3OTg1&ixlib=rb-1.2.1&q=80&w=400" alt="Ergonomic Office Chair" className="object-cover w-full rounded-lg" />
            </div>
            <div className="w-full sm:w-3/4">
              <h1 className="text-black text-lg font-semibold">Ergonomic Office Chair</h1>
              <p className="text-justify text-sm">Designed for maximum comfort and support, our ergonomic office chair is perfect for long working hours. It features adjustable settings and breathable mesh fabric to enhance your productivity.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
