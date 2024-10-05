// import {
//   createContext,
//   useState,
//   ReactNode,
//   Dispatch,
//   SetStateAction,
// } from "react";

// type User = {
//   name: string;
//   age: number;
//   isMarried: boolean;
//   dob: Date;
//   gender: "male" | "female";
// };

// export const defaultValue:User = {
//    name:'ram',
//    age: 25,
//    isMarried: true,
//    dob: new Date(),
//    gender: 'male'
// }

// type USER_CONTEXT_TYPE = {
//   user: User | null;
//   setUser: Dispatch<SetStateAction<User | null>>;
// };

// export const UserContext = createContext<USER_CONTEXT_TYPE>({
//   user: null,
//   setUser: () => {},
// });

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const value = {
//     user,
//     setUser,
//   };
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
