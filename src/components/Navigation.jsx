export function Navigation({ name }) {
  return (
    <li>
      <a
        href="#"
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
      >
        {name}
      </a>
    </li>
  );
}
