export {};

type MyExclude<T, U> = T extends U ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctinoType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes, string | number>; // 3行目に従って紐解けばわかる！三項演算子！

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NoNNullableTypes = NonNullable<NullableTypes>;
