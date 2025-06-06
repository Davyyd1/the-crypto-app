import supabase from "./supabase";

export async function signUp({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  const { data: dataLogin, error: erorrLogin } =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

  if (erorrLogin) throw new Error(erorrLogin.message);

  return { data, dataLogin, erorrLogin };
}

export async function logIn({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
