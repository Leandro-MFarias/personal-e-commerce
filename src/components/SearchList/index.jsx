export function SearchList({ filtered }) {
  if (!filtered || !filtered.length) return null;

  return (
    <div className="absolute ml-1 bg-zinc-50 text-black w-[280px] px-2 py-1 rounded-b-lg">
      <ul>
        {filtered.map(({id, name, imageUrl}) => (
          <li
            className="flex items-center justify-between space-y-2 cursor-pointer"
            key={id}
          >
            <p>{name}</p>
            <img src={imageUrl} alt={name} className="w-12" />
          </li>
        ))}
      </ul>
    </div>
  );
}
