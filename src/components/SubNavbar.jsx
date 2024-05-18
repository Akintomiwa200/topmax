import { RiSearchLine } from 'react-icons/ri';
import allProducts from '../components/Allproducts'; // Adjust the import path as needed

export default function SubNavbar({ setSearchQuery, setSelectedCategory }) {
  const categories = allProducts.map(category => category.name);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSearchQuery(''); // Clear the search query when a category is selected
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <ul className="flex space-x-4">
            {categories.map(category => (
              <li
                key={category}
                className="cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <RiSearchLine className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={e => {
              setSearchQuery(e.target.value);
              setSelectedCategory(''); // Clear the selected category when searching
            }}
            className="block w-40 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400 sm:text-sm"
          />
        </div>
      </header>
    </div>
  );
}
