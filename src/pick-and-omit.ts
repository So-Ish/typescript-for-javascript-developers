export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight' | 'height'>;

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
type SmallProfile = Omit<DetailedProfile, 'height'>; // １２行目に従って紐解いてみる！
