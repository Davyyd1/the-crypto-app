import { useMutation } from "@tanstack/react-query";
import { logIn as logInApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
// import supabase from "../../services/supabase";

export function useLogin() {
  const { mutate: logIn, isLoading } = useMutation({
    mutationFn: logInApi,
    onSuccess: () => {
      toast.success(`Logged in sucessfully! You are getting redirected...`);
    },
    onError: (e) => {
      toast.error("Provided email or password are incorrect" + e);
    },
  });

  return { logIn, isLoading };
}
