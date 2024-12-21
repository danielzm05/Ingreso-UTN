export function Input({
  value,
  label = "",
  name,
  placeholder = "",
  type = "text",
  onChange,
  required = false,
  minLength = "0",
  autoComplete = "on",
}) {
  return (
    <label htmlFor={name} className="w-full flex flex-col font-medium text-sm gap-1">
      {label}
      <input
        className="px-3 text-sm bg-background border border-slate-800 rounded-md min-h-9"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        minLength={minLength}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
}

export function TextArea({ label, name, onChange, required }) {
  return (
    <label htmlFor={name} className="w-full flex flex-col font-medium text-sm gap-1">
      {label}
      <textarea
        className="px-3 text-sm bg-background border border-slate-800 rounded-md min-h-40"
        name={name}
        onChange={onChange}
        required={required}
      ></textarea>
    </label>
  );
}
