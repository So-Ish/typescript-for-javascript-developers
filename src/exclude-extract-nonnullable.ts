export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctinoType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractiongFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NoNNullableTypes = NonNullable<NullableTypes>;
