import { ME_QUERY } from "@/graphql";
import clientRequireToken from "@/libs/Apollo";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function getMe() {
  const cookieStore = cookies();
  const token: any = cookieStore.get("token");
  const client = clientRequireToken(token?.value);

  try {
    const {
      data: { me },
    } = await client.query({
      query: ME_QUERY,
    });

    return me;
  } catch (error) {
    console.log(error);
  }
}

export default async function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await getMe();

  if (!me) {
    redirect("/auth/login");
  }
  return <>{children}</>;
}
