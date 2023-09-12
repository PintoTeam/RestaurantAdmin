import { testUser } from "@/mock";
import { User } from "@/global.types";
import { UserCircle } from "@/lib/icons";

interface Props {
  user: User;
}

export function Profile({ user = testUser }: Props) {
  const { name, lastName, email } = user;

  return (
    <section className="flex flex-row w-full space-x-1 justify-center items-center">
      <UserCircle className="w-10 h-10" />
      <div className="flex flex-col">
        <p className="font-semibold">
          {name} {lastName}
        </p>
        <p className="text-gray-500 mt-[-0.25rem]">{email}</p>
      </div>
    </section>
  );
}
