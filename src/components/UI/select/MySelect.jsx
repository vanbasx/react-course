export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="block rounded-md border p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
