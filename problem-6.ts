{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Partial = {
    [T in keyof Profile]?: Profile[T];
  };

  function updateProfile(obj: Profile, update: Partial): Profile {
    return { ...obj, ...update };
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
  //
}
