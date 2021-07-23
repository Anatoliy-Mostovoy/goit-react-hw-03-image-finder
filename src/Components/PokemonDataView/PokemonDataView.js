export default function PokemonDataView({ pokemon: { name, sprites, stats } }) {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="200"
      />
      <h2>{name}</h2>
      <ul>
        {stats.map(entry => {
          return (
            <li key={entry.stat.name}>
              {entry.stat.name}:{entry.base_stat}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
