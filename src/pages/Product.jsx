import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { RiCloseLine } from 'react-icons/ri';
import Navbar from '../components/Navbar';
import Allproducts from '../components/Allproducts';
import SubNavbar from '../components/SubNavbar';

export default function Product() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = Allproducts.flatMap(category =>
    category.items.flatMap(subCategory =>
      subCategory.items.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  );

  const categoryProducts = selectedCategory
    ? Allproducts.find(category => category.name === selectedCategory)?.items.flatMap(subCategory => subCategory.items) || []
    : Allproducts.flatMap(category => category.items.flatMap(subCategory => subCategory.items));

  const displayProducts = searchQuery.trim() === ''
    ? categoryProducts
    : filteredProducts;

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white">
      <Navbar className='mb-8' />
      <SubNavbar setSearchQuery={setSearchQuery} setSelectedCategory={setSelectedCategory} className="mt-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 p-4">
          {displayProducts.map(product => (
            <div key={product.id} className="border border-gray-200 p-4 rounded-md cursor-pointer" onClick={() => openModal(product)}>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <img src={product.imageSrc} alt={product.name} className="w-full h-32 object-cover mb-2" />
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
          <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded-md">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-xl font-semibold">{selectedProduct.name}</Dialog.Title>
                <button onClick={closeModal}>
                  <RiCloseLine className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              <img src={selectedProduct.imageSrc} alt={selectedProduct.name} className="w-full h-48 object-cover mb-4" />
              <p className="text-gray-600">{selectedProduct.description}</p>
              <p className="text-gray-800 font-bold mt-4">${selectedProduct.price.toFixed(2)}</p>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
}
