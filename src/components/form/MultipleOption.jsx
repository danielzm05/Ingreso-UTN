import Select from "react-select";

export function SelectMultiple({ name, options, value, label, placeholder, onChange, style, isSearchable = true, isMulti = true }) {
  return (
    <Select
      isMulti={isMulti}
      closeMenuOnSelect={false}
      getOptionValue={value}
      getOptionLabel={label}
      name={name}
      isClearable={true}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      isSearchable={isSearchable}
      unstyled
      classNames={{
        control: () => `px-3 focus:outline-none focus:outline-primary focus:border-none ${style}`,
        valueContainer: () => "flex flex-nowrap gap-1",
        menu: () => "bg-background border border-slate-800 rounded-md ",
        option: () => "p-2 hover:bg-sky-700 text-xs font-medium",
        singleValue: () => "text-primary font-semibold",
        multiValueLabel: () => "px-2 py-1 rounded-2xl font-medium text-slate-800 bg-primary text-xs",
      }}
    />
  );
}
