import supabase from "./supabase";

export async function signUp(email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
}

export async function getUser() {
  const { data: users, error } = await supabase.from("users").select("*");

  return users;
}
