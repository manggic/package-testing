import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
type FormData = {
  email: string;
  password: string;
  name: string;
  dob: Date;
  age: number;
  gender: "male" | "female";
};

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, "must be atleast 5 char")
    .max(10, "must be at max 10 char"),
  name: z.string().max(10),
  dob: z.date(),
  age: z.number().min(1).max(100),
  gender: z.enum(["male", "female"]),
});

const ReactHookFormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleOnSubmit = (data:FormData) => {
    console.log(data, getValues("gender"));
  };

  return (
    <div>
      <div className="text-4xl text-center pt-4 text-blue-500">React hook form with Zod</div>
      <form
        className="mt-1 flex flex-col gap-3 p-5 w-[50%]"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div>
          <label className="pr-2 w-[80px] inline-block">Email</label>
          <input
            className="p-1 border"
            type="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="pr-2 w-8">Password</label>
          <input
            className="p-1 border"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div>
          <label className="pr-2 w-8">Name</label>
          <input
            className="p-1 border"
            {...register("name", { required: "name is required" })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label className="pr-2 w-8">Date of Birth</label>
          <input
            className="p-1 border"
            type="date"
            {...register("dob", { valueAsDate: true })}
          />
          {errors.dob && (
            <span className="text-red-500">{errors.dob.message}</span>
          )}
        </div>
        <div>
          <label className="pr-2 w-8">Age</label>
          <input
            className="p-1 border"
            type="number"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && (
            <span className="text-red-500">{errors.age.message}</span>
          )}
        </div>
        <div>
          <label className="pr-2 w-8">Gender</label>
          <select {...register("gender", { required: "gender is required" })}>
            <option value="">select</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {errors.gender && (
            <span className="text-red-500">{errors.gender.message}</span>
          )}
        </div>
        <button className="border p-2 bg-gray-300 inline">submit</button>
      </form>
    </div>
  );
}

export default ReactHookFormWithZod