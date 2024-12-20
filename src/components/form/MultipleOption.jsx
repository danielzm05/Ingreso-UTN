import Select from "react-select";

export function SelectMultiple({ name, options, value, label, placeholder, onChange }) {
  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      getOptionValue={value}
      getOptionLabel={label}
      name={name}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      unstyled
      classNames={{
        control: () => "px-3 text-sm font-medium bg-background border border-slate-800 rounded-md min-h-9",
        menu: () => "bg-slate-800 border border-slate-800 rounded-md ",
        option: () => "p-2 hover:bg-sky-700 text-xs font-medium",
        multiValueLabel: () => "px-2 py-1 rounded-2xl font-medium text-slate-800 bg-yellow-400 text-xs",
      }}
    />
  );
}
