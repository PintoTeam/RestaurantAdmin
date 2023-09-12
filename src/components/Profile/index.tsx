import { testUser } from "@/mock";
import { User } from "@/global.types";
import { UserCircle } from "@/lib/icons";
import { Button } from "@/lib";
import { useStore } from "@/store";

export function Profile() {
  const { user, clearUser } = useStore();
  const { name, lastName, email } = user ?? {};

  const handleClick = () => {
    clearUser();
  };

  return (
    <>
      <div className="flex flex-row w-full space-x-1 justify-center items-center">
        <UserCircle className="w-9 h-9 text-primary" />
        <div className="flex flex-col" suppressHydrationWarning>
          <p className="font-semibold text-primary">
            {name} {lastName}
          </p>
          <p className="text-gray-500 mt-[-0.25rem]">{email}</p>
        </div>
      </div>
      <Button variant="Danger" className="mt-2 w-full" onClick={handleClick}>
        Log out
      </Button>
    </>
  );
}
