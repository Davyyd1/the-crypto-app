import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        `Account successfully created! You are getting redirected...`
      );
    },
    onError: (error) => {
      toast.error(`${error}`);
    },
  });

  return { signUp, isLoading };
}
