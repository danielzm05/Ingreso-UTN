export function Select({ label, name, onChange, defaultValue = "", required = true, children }) {
  return (
    <label htmlFor={name} className="flex flex-col font-medium text-sm gap-1">
      {label}
      <select
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        required={required}
        className="px-3 text-sm bg-card border border-border1 rounded-md h-9 focus:outline-none  focus:outline-primary focus:border-none"
      >
        {children}
      </select>
    </label>
  );
}
