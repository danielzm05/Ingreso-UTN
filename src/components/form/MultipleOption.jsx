import Select from "react-select";

export function SelectMultiple({ name, options, value, label, placeholder, onChange, style }) {
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
        control: () => `px-3 focus:outline-none  focus:outline-primary focus:border-none ${style}`,
        menu: () => "bg-background border border-slate-800 rounded-md ",
        option: () => "p-2 hover:bg-sky-700 text-xs font-medium",
        multiValueLabel: () => "px-2 py-1 rounded-2xl font-medium text-slate-800 bg-primary text-xs",
      }}
    />
  );
}
