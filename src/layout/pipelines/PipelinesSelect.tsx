const USERS_MOCK = [
  { id: 0, name: 'Todos os usuários' },
  { id: 1, name: 'José da Silva' },
  { id: 2, name: 'Maria da Silva' },
];

export function PipelinesSelect() {
  return (
    <select className="border p-2 rounded">
      {USERS_MOCK.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
      ))}
    </select>
  );
}
