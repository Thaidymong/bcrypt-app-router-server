"use server";
import { MUTATION_SIGNIN } from "@/graphql";
import clientRequireToken from "@/libs/Apollo";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const payload = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const client = clientRequireToken("");

  try {
    const {
      data: {
        signIn: { token },
      },
    } = await client.mutate({
      mutation: MUTATION_SIGNIN,
      variables: {
        input: {
          ...payload,
        },
      },
    });
    if (token) {
      cookies().set("token", token);
    }
  } catch (error: any) {
    return {
      error: error?.message,
    };
  }
}

export async function logout() {
  cookies().delete("token");
}
