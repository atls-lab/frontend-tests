export interface ValueType {
  [key: string]: any
  value: string
}

export interface AutocompleteProps {
  options: ValueType[]
  value: ValueType
  getOptionLabel?: (option: ValueType | null) => string
  onChange?: (value: ValueType) => void
  onInputChange?: (value: string) => void
}
