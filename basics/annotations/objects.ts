const profile = {
  name: "alex",
  age: 36,
  coords: { latitude: 0, longitude: 0 },
  setAge(age: number): void {
    this.age = age;
  },
};

// With destructuring
// const { age, name }: { age: number; name: string } = profile;

const {
  coords: { latitude, longitude },
}: { coords: { latitude: number; longitude: number } } = profile;
