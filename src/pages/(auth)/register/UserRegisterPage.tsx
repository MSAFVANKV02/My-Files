import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContextPage } from "@/contexts/context";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Link } from "react-router-dom";
Modal.setAppElement("#root");

type Props = {};

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  name: z.string().min(2, "Name must be at least 2 characters."),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function UserRegisterPage({}: Props) {
  const { handleOpenLoginModal, isOpenModal } = useContextPage();

  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Login Data:", data);

    // Example API call to backend
    try {
      const response = await axios.post(
        "/api/auth/register", // API endpoint
        data, // Request body containing the data
        { withCredentials: true } // Config options
      );

      if (response.status === 201) {
        alert("Register successful");
      } else {
        alert("Login failed.");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={handleOpenLoginModal}
        shouldCloseOnOverlayClick={true}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
        className={`bg-white rounded-lg  max-w-xl p-4 h-fit  w-full overflow-y-auto relative z-[10001]`}
      ></Modal>

      <div className="flex flex-col justify-center items-center gap-5 h-screen fixed top-0 bottom-0 left-0 right-0 bg-white">
        <h1 className="text-center text-3xl font-bold">Welcome to My Files</h1>
        <div className="w-[60%] shadow-xl border h-[80vh] flex flex-col justify-center items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-3/5"
            >
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <label className="block mb-1 text-sm font-medium">
                      User Name
                    </label>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Name"
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded-xl
                   active:right-0 active:outline-none  focus:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <label className="block mb-1 text-sm font-medium">
                      Email
                    </label>
                    <FormControl>
                      <input
                        type="email"
                        placeholder="Name"
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded-xl
                   active:right-0 active:outline-none  focus:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Pass Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <label className="block mb-1 text-sm font-medium">
                      Password
                    </label>
                    <FormControl>
                      <input
                        type="password"
                        placeholder="Name"
                        {...field}
                        className="w-full p-2 border border-gray-300 rounded-xl
                   active:right-0 active:outline-none  focus:ring-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full  py-2">
                Register
              </Button>
            </form>
          </Form>
          <Link to={`/login`} className="underline text-blue-400 text-sm mt-5">
            Already Have an Account ?
          </Link>
        </div>
      </div>
    </>
  );
}
